"""Regenerate compressed gallery images and dated project lists from originals."""
import json
import re
from collections import Counter
from datetime import datetime
from pathlib import Path

from PIL import Image, ImageOps

# Optional for galleries containing HEIC originals (pip install pillow-heif).
try:
    from pillow_heif import register_heif_opener
except ImportError:
    if any(path.suffix.lower() in {'.heic', '.heif'}
           for path in (Path(__file__).resolve().parent / 'images' / 'galerie').rglob('*')):
        raise SystemExit('Photos HEIC présentes : installer pillow-heif avec python -m pip install pillow-heif.')
else:
    register_heif_opener()

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / 'images' / 'galerie'
OUTPUT = ROOT / 'images' / 'galerie-web'
NAMES = {'environnement': 'Environnement / Nature', 'education': 'Éducation / Enseignement',
         'religion': 'Mosquée de Tagmout', 'routes': 'Routes / Sentiers',
         'tourisme': 'Tourisme', 'festivites': 'Festivités', 'autres': 'Divers', 'eau': 'Hydraulique / Eau'}
ALBUM_NAMES = {'عملية التحفيظ العقاري الجماعي بدوار تكموت': 'Immatriculation foncière collective à Tagmout'}
DATES = Counter()


def photo_date(image, path):
    exif = image.getexif()
    details = exif.get_ifd(34665) if 34665 in exif else {}
    for value in (details.get(36867), details.get(36868), exif.get(306)):
        if value:
            try:
                result = datetime.strptime(str(value), '%Y:%m:%d %H:%M:%S')
                DATES['EXIF'] += 1
                return result, 'EXIF'
            except ValueError:
                pass
    match = re.search(r'(20\d{6})(?:_(\d{6}))?', path.stem)
    if match:
        try:
            result = datetime.strptime(match[1] + (match[2] or '000000'), '%Y%m%d%H%M%S')
            DATES['nom du fichier'] += 1
            return result, 'filename'
        except ValueError:
            pass
    DATES['date du fichier (approximative)'] += 1
    return datetime.fromtimestamp(path.stat().st_mtime), 'file'


projects = {}
before = after = 0
for category in NAMES:
    folder = SOURCE / category
    albums = [folder] + sorted(p for p in folder.iterdir() if p.is_dir())
    projects[category] = []
    for album in albums:
        photos = []
        for source in sorted(album.iterdir()):
            if not source.is_file() or source.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif'}:
                continue
            target = OUTPUT / source.relative_to(SOURCE).with_suffix(source.suffix.lower() + '.webp')
            target.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(source) as image:
                date, date_source = photo_date(image, source)
                web = ImageOps.exif_transpose(image).convert('RGB')
                web.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
                web.save(target, 'WEBP', quality=78, method=6)
            before += source.stat().st_size
            after += target.stat().st_size
            photos.append({'src': target.relative_to(ROOT).as_posix(), 'original': source.name,
                           'date': date.isoformat(), 'dateSource': date_source})
        if photos:
            photos.sort(key=lambda photo: (photo['date'], photo['original']))
            projects[category].append({'id': album.relative_to(SOURCE).as_posix(),
                                      'name': NAMES[category] if album == folder else ALBUM_NAMES.get(album.name, album.name),
                                      'images': photos})
(ROOT / 'gallery-data.js').write_text('window.galleryProjects = ' + json.dumps(projects, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(json.dumps({'photos': sum(len(p['images']) for ps in projects.values() for p in ps),
                  'original_MB': round(before / 1048576, 2), 'web_MB': round(after / 1048576, 2),
                  'date_sources': DATES}, ensure_ascii=False))
