# Journal des changements

## 2026-10-08 — Renommage de l’album des terres

Statut : terminé ; modifications locales, sans déploiement.

### Changements prévus
- Remplacer le titre de l’album foncier par « Conservation Commune des terres à Tagmout » dans la galerie et son générateur.
- Conserver les photos et leurs chemins.

### Changements réalisés et vérifications
- Titre remplacé dans gallery-data.js et dans la correspondance des noms du générateur prepare-gallery.py ; photos et chemins conservés.
- Vérifications réussies : nouveau titre présent dans les deux fichiers, ancien titre absent de ces fichiers, git diff --check réussi (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur non vérifié ; aucun déploiement ni régénération des photos. Entrées et modifications précédentes conservées.

## 2026-10-08 — Allègement des libellés des impacts

Statut : terminé ; modifications locales, sans déploiement.

### Changements prévus
- Retirer les dates des libellés de « Nos impacts en chiffres » à la demande de l’utilisateur après examen du rendu.
- Conserver les chiffres, les nouveaux impacts et les dates de la page Réalisations.

### Changements réalisés et vérifications
- Dates retirées uniquement des neuf libellés datés de la section des impacts sur l’accueil ; les 11 compteurs et leurs valeurs sont conservés. Page Réalisations non modifiée lors de cette intervention.
- Vérifications réussies : aucune date restante dans la section, 11 compteurs présents ; git diff --check réussi (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur non vérifié ; aucun déploiement. Entrées et modifications précédentes conservées.

## 2026-10-08 — Dates et compléments des impacts et réalisations

Statut : terminé ; modifications locales, sans déploiement.

### Changements prévus
- Conserver les compteurs, cartes et listes ; placer les dates avant les descriptions validées.
- Intituler la section « Nos impacts en chiffres », porter les complexes religieux à 2 et ajouter la fontaine, 1 ensemble local et annexe à Tizi, et la route de 2026.
- Dater les réalisations éducatives, hydrauliques, routières, religieuses et environnementales ; distinguer le chemin pédestre de 2025 de la route de 2026.

### Changements réalisés et vérifications
- Accueil : titre « Nos impacts en chiffres », dates en premier, compteur des complexes religieux porté à 2 ; fontaine (2006), 1 ensemble local et annexe à Tizi (2001), et route vers la Mosquée et le centre du Douar (2026) ajoutés.
- Réalisations : dates placées en premier pour l’éducation (2001, 2004), les réservoirs (2001, 2026), la route (2006), le chemin pédestre (2025), les bâtiments religieux (2005, 2012) et l’éradication des cactus (2020). Route de 2026 distincte du chemin de 2025 dans les textes.
- Vérifications réussies : 11 compteurs, valeur 2 pour les complexes religieux, présence de toutes les dates attendues et git diff --check (avertissements LF/CRLF uniquement). Mise en page existante conservée ; conteneur des compteurs avec retour à la ligne automatique.
- Limites : rendu navigateur non vérifié ; aucun déploiement. Entrées précédentes et modifications de l’utilisateur conservées.

## 2026-10-08 — Retrait de la navigation du pied de page

Statut : terminé ; modifications locales, sans déploiement.

### Changements prévus
- Retirer la rangée de liens du pied de page des sept pages à la demande de l'utilisateur.
- Retirer le style dédié devenu inutile et conserver les coordonnées et le copyright.

### Changements réalisés et vérifications
- Rangée de liens retirée des sept pieds de page ; style .footer-nav supprimé ; version CSS actualisée pour le cache.
- Vérifications réussies : absence de footer-nav sur les sept pages, présence du menu principal, des coordonnées et du copyright ; git diff --check réussi (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué. Entrées et modifications précédentes conservées.

## 2026-10-08 — Corrections éditoriales approuvées et coordonnées

Statut : terminé ; modifications locales, sans déploiement.

### Changements prévus
- Harmoniser les libellés approuvés et la graphie Tizirte.
- Dater les réalisations selon les précisions de l'association.
- Renommer Autres en Divers et traduire le titre de l'album foncier.
- Ajouter les liens de navigation et les coordonnées validées au pied des sept pages, ainsi qu'une adresse textuelle sur Contact.
- Conserver les photos et reporter les statuts des missions, en attente des indications de l'utilisateur.

### Changements réalisés et vérifications
- Libellés harmonisés sur les sept pages : Qui sommes-nous ?, Notre impact en chiffres, Contact et partenariats, Femmes et enfants et Tizirte.
- Réalisations datées : réservoir 750 m³ (2001), réseau en partenariat avec le Conseil régional (2015), plusieurs puits (depuis 2015), fontaine (2006), second réservoir 100 m³ (2026), mosquée (2005), maison de l'imam (2012).
- Galerie : Autres devient Divers ; titre français Immatriculation foncière collective à Tagmout. Générateur adapté pour conserver cette traduction à la prochaine génération, sans modifier les chemins des albums.
- Navigation vers les sept pages et coordonnées de la bannière ajoutées aux pieds de page ; adresse, téléphones et email en texte sur Contact, avec liens d'appel et email. Styles avec retour à la ligne pour les petits écrans ; versions CSS/JS actualisées.
- Vérifications réussies : syntaxe JavaScript des deux fichiers ; sept pieds de page ; références locales HTML et fichiers des 144 photos présents ; tableaux des photos et dates identiques à la version précédente ; anciens libellés absents des textes affichés ; git diff --check (avertissements LF/CRLF uniquement).
- Limites : rendu et interactions en navigateur non vérifiés ; générateur de galerie non exécuté pour préserver les fichiers photographiques. Aucun déploiement. Statuts des missions et sélection des photos reportés conformément à la demande ; modifications préexistantes et entrées précédentes conservées.

## 2026-10-04 — Rapport Word destiné à l’association

Statut : document créé ; vérification visuelle de la pagination non disponible.

### Changements prévus
- Adapter l’audit en un document Word centré sur les contenus, les libellés, les parcours des visiteurs et les décisions à valider par l’association.
- Exclure les constats techniques et proposer des formulations concrètes sans inventer de faits ou d’engagements.
- Vérifier le document produit et consigner les éventuelles limites de rendu.

### Changements réalisés et vérifications
- Document créé : `Rapport-editorial-association-Tagmout-2026-10-04.docx`.
- Adaptation éditoriale destinée au bureau : harmonisation des libellés, accueil, présentation, réalisations, observatoire, commissions, galerie, contact et tableau des validations attendues.
- Priorités, constats, enjeux, exemples de formulation et décisions à valider conservés ; constats techniques exclus. Aucune donnée ni responsabilité nouvelle présentée comme acquise.
- Contrôles réussis : ouverture par python-docx, intégrité ZIP et XML, présence du titre et des six sections après l’introduction, trois tableaux et recherche des termes techniques exclus.
- Rendu tenté avec render_docx.py : échec, LibreOffice soffice.exe indisponible ; absence de binaire LibreOffice dans les dépendances embarquées. Le rendu visuel et le nombre final de pages ne sont donc pas confirmés. Des erreurs de nettoyage des dossiers temporaires ont également été signalées par le moteur.
- Aucun contenu du site modifié ; document préparé mais non envoyé à l’association.

## 2026-10-04 — Audit approfondi du site

Statut : rapport livré ; validation navigateur en attente d'une URL publique.

### Changements prévus
- Créer un rapport Markdown d'audit de toutes les pages, des interactions, des contenus, de l'accessibilité, du responsive, des performances et du SEO.
- Consigner les contrôles réalisés, les preuves, les priorités et les limites ; distinguer constats confirmés, risques à valider et propositions éditoriales.
- Ne pas modifier le fonctionnement ni le contenu public du site dans cette intervention.

### Vérifications et résultats
- Rapport créé : `AUDIT-SITE-2026-10-04.md`, avec constats par zone, niveaux de preuve, priorités, impacts, recommandations, exemples et plan de validation.
- Sept pages examinées, ainsi que le CSS, le JavaScript, le manifeste de galerie et le générateur Python. Comparaison de la navigation, des CTA, des contenus et des métadonnées.
- 98 références locales HTML et 144 chemins d'images de galerie contrôlés : aucun fichier manquant ; aucun identifiant HTML dupliqué détecté par page. Syntaxe des deux JavaScript valide.
- Mesures : 55 809 342 octets pour les images WebP du manifeste, neuf images verticales et quatorze dates issues des fichiers. Doublons photographiques confirmés par empreinte ; deux visuels représentatifs inspectés.
- Fonction réelle de mise à jour de la visionneuse exécutée sur objets simulés : source vide confirmée pour une photo dont seul data-src est renseigné. Ce test n'est pas une recette navigateur.
- Contrastes calculés à partir des couleurs CSS et références W3C consultées pour contraste, pause et dialogue modal.
- Vérification documentaire : identifiants de constats uniques ; git diff --check réussi.
- Limites explicites dans le rapport : aucun rendu ni parcours navigateur, audit lecteur d'écran, mesure réseau de production ou validation juridique. URL publique demandée ; refus antérieur d'ouverture locale respecté. Aucune qualification individuelle de toutes les photos.
- Aucun fichier fonctionnel du site modifié, aucun déploiement effectué ; seuls le rapport et cette entrée de journal sont ajoutés/modifiés.

## 2026-10-04 — Présentation du titre des albums

### Changements prévus
- Séparer visuellement le titre et le nombre de photos avec une présentation lisible sur mobile.
- Isoler le sens de lecture des titres arabes et du compteur français.

Statut : terminé.

### Changements réalisés et vérifications
- Titre centré sur une ligne indépendante, taille responsive et retour à la ligne pour les noms longs ; compteur dans une pastille discrète en dessous.
- Titre isolé avec bdi et direction automatique ; compteur français isolé de gauche à droite pour éviter les inversions avec les titres arabes. Pluriel corrigé pour zéro photo.
- Versions CSS/JavaScript actualisées ; modifications préexistantes conservées.
- Vérifications : node --check script.js et git diff --check réussis (avertissements LF/CRLF uniquement) ; contrôle des éléments et du sens de lecture.
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué.

## 2026-10-04 — Miniatures sous les photos de la galerie

### Changements prévus
- Remplacer les points par une bande de miniatures sous la photo, avec sélection directe et repérage de la photo active.
- Conserver les flèches gauche/droite et la navigation tactile, adapter la bande aux petits écrans.

Statut : terminé.

### Changements réalisés et vérifications
- Points remplacés par une bande de miniatures cliquables sous la photo, à défilement horizontal ; sélection active encadrée et recentrée, libellés accessibles et focus clavier.
- Flèches conservées ; gestes tactiles horizontaux ajoutés sur la photo. Dimensions des miniatures adaptées aux mobiles et chargement différé des images.
- Versions CSS/JavaScript de la galerie actualisées. Modifications préexistantes conservées.
- Vérifications réussies : node --check script.js, git diff --check (avertissements LF/CRLF uniquement), contrôle de la structure et des branches sans photo, une photo et plusieurs photos.
- Limites : rendu et gestes tactiles non vérifiés dans un navigateur ; aucun déploiement effectué.

## 2026-10-04 — Annulation de la navigation numérotée

### Changements prévus
- Annuler uniquement la dernière intervention et rétablir les points de navigation de la galerie.
- Conserver les autres modifications et les entrées précédentes du journal.

Statut : terminé.

### Changements réalisés et vérifications
- Dernière intervention annulée : points, styles, position dans le diaporama, comportement pour une seule photo et versions CSS/JavaScript rétablis.
- Nouvel album dans Autres et autres modifications conservés ; historique du journal conservé.
- Vérifications réussies : node --check script.js et git diff --check (avertissements LF/CRLF uniquement). script.js et styles.css ne présentent plus de différence avec Git.
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué.

## 2026-10-04 — Navigation numérotée des photos

### Changements prévus
- Remplacer les points du diaporama par des boutons numérotés pour chaque image.
- Adapter leur présentation aux petits écrans et distinguer la photo active.

Statut : terminé.

### Changements réalisés et vérifications
- Points remplacés par des boutons 1, 2, 3… pour chaque photo de la sélection, y compris les albums à une seule image ; clic direct conservé.
- Navigation placée sous les images pour éviter de les masquer, avec retour à la ligne, boutons de 44 pixels minimum et photo active mise en évidence.
- Libellés accessibles, aria-current sur la photo active et contour de focus au clavier ajoutés. Versions CSS et JavaScript de la galerie passées à 2.11.
- Vérifications réussies : syntaxe JavaScript avec node --check, contrôle des branches sans photo/une photo/plusieurs photos et git diff --check (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué. Modifications préexistantes conservées.

## 2026-10-04 — Nouvel album dans Autres

### Changements prévus
- Intégrer le nouveau sous-dossier « عملية التحفيظ العقاري الجماعي بدوار تكموت » à la galerie Autres.
- Prendre en charge ses photos HEIC, générer les versions WebP et conserver les originaux et le tri chronologique.
- Actualiser le manifeste et vérifier les images et les chemins générés.

Statut : terminé.

### Changements réalisés et vérifications
- Album « عملية التحفيظ العقاري الجماعي بدوار تكموت » intégré à Autres avec ses 83 photos (60 HEIC, 23 JPEG), nom arabe conservé et dates du 15 mai au 29 novembre 2024.
- Prise en charge HEIC/HEIF ajoutée à prepare-gallery.py avec pillow-heif et message explicite si la dépendance manque ; décodeur installé dans l'environnement Python.
- Versions WebP générées pour le nouvel album (32,17 Mo), originaux conservés. Manifeste régénéré depuis les sources actuelles : 144 photos, dont une photo du réservoir repérée lors du contrôle de complétude. Version du manifeste dans galerie.html passée à 2.10.
- Vérifications réussies : 83 photos dans Autres ; correspondance complète des 144 sources avec le manifeste ; décodage des 144 WebP, dimensions limitées à 1600 pixels, chemins existants et tri chronologique ; syntaxe de gallery-data.js et script.js ; git diff --check (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur non vérifié, aucun déploiement effectué ; les 14 dates approximatives des autres albums restent fondées sur les dates des fichiers. Modifications préexistantes conservées.

## 2026-10-04 — Corrections des réalisations, commissions et présentation

### Changements prévus
- Déplacer le deuxième point de l'infrastructure hydraulique en dernier.
- Mettre les majuscules demandées aux titres Routières, Pédestres, Religieuse et Animation, ainsi qu'à Environnement dans la présentation.
- Remplacer les deux formulations de communication par « Création d'un site web pour la communication. » et « Création d'une page Facebook pour les échanges. ».

Statut : terminé.

### Changements réalisés et vérifications
- Deuxième point hydraulique (second réservoir de 100 m³) déplacé en cinquième et dernière position ; les cinq points sont conservés.
- Majuscules corrigées : Infrastructures Routières et Pédestres sur l'accueil et les réalisations, Infrastructure Religieuse, Solidarité & Animation, Sauvegarde de l'Environnement dans Qui sommes-nous.
- Deux points distincts dans la commission Ressources Humaines : « Création d'un site web pour la communication. » et « Création d'une page Facebook pour les échanges. ».
- Vérifications réussies : nombre et ordre des points hydrauliques, présence des sept corrections textuelles, git diff --check (avertissements LF/CRLF uniquement).
- Limites : rendu en navigateur non vérifié ; aucun déploiement effectué.

## 2026-10-04 — Ordre des chiffres clés et logo agrandi

### Changements prévus
- Réordonner les huit chiffres clés selon la demande : engagement, réservoir de 750 m³, puits, foyers, familles, route, complexe religieux, second réservoir de 100 m³.
- Agrandir le logo de l'en-tête sur ordinateur et mobile, en conservant les modifications existantes de l'utilisateur.

Statut : terminé.

### Changements réalisés et vérifications
- Huit chiffres clés réordonnés selon la demande, avec délais d'apparition progressifs ; valeurs existantes conservées, dont 20+ familles.
- Logo de l'en-tête agrandi de 64 à 88 pixels sur ordinateur et de 48 à 88 pixels selon la largeur sur mobile ; espacement du contenu d'accueil et des ancres ajusté.
- Version CSS passée à 2.10 sur les sept pages pour actualiser le style en cache.
- Vérifications réussies : ordre des huit éléments, dimensions CSS et conservation des modifications préexistantes de l'utilisateur (20+ familles et viewport initial-scale=5.0). git diff --check réussi, avec avertissements LF/CRLF uniquement.
- Limites : rendu visuel en navigateur non vérifié ; aucun déploiement effectué.

## 2026-10-04 — En-tête sur deux lignes et corrections des textes

### Changements prévus
- Agrandir le logo et le nom de l'association sur une première ligne ; placer la navigation sur la deuxième ligne et adapter les petits écrans.
- Intégrer les corrections des quatre captures : chiffres clés, hydraulique, commissions et présentation de l'association.

Statut : terminé.

### Changements réalisés et vérifications
- En-tête commun sur deux lignes : logo de 64 pixels et nom agrandi, puis onglets centrés. Sous 900 pixels, nom conservé sur une ligne avec taille adaptée et bouton de menu sur la deuxième ligne.
- Espacement du titre d'accueil adapté ; version CSS 2.9 sur les sept pages.
- Corrections des captures intégrées : Développement Durable, puits d'eau potable, 15+ familles soutenues sans Ramadan dans le chiffre clé, second réservoir de 100 m³ et partenaires, Assemblées Générales, Commissions de Travail Thématiques, page Facebook, route et présentation du Douar/Village.
- Vérifications réussies : structure commune des sept pages, version CSS et présence des corrections ; syntaxe de script.js ; git diff --check (avertissements LF/CRLF uniquement).
- Limites : rendu visuel en navigateur non vérifié ; aucun déploiement effectué.


## 2026-10-03 — Galerie chronologique et photos compressées

### Changements prévus
- Générer des versions WebP adaptées au web sans modifier les photos originales.
- Trier chaque album du plus ancien au plus récent selon les dates EXIF, puis les noms de fichiers ou la date du fichier en dernier recours.
- Charger uniquement la photo affichée et la suivante, et adapter les points de navigation aux petits écrans.

Statut : terminé.

### Changements réalisés et vérifications
- 63 versions WebP créées dans images/galerie-web, limitées à 1600 pixels et qualité 78 ; originaux conservés. Poids total réduit de 265,32 à 21,34 Mo (environ 92 %).
- Nouveau manifeste gallery-data.js avec dates et albums, produit par prepare-gallery.py. Tri chronologique croissant dans les albums, les thèmes et la vue Tous.
- Dates : 38 EXIF, 11 noms de fichiers, 14 dates de modification de fichiers faute de date de prise de vue disponible. Les 49 photos du Réservoir disposent de dates EXIF ou dans les noms.
- Chargement à la demande de la photo affichée et de la suivante ; points de navigation sur plusieurs lignes pour les petits écrans. Versions CSS/JS de la galerie mises à jour.
- Vérifications réussies : 63 WebP décodables et dimensions maximales, existence des chemins, ordre chronologique, filtres Tous/Eau/deux projets/Autres, syntaxe des deux JavaScript, git diff --check (avertissements LF/CRLF uniquement).
- Limites : dates de prise de vue inconnues pour 14 photos (dont les 7 de Tizirte), tri approximatif par date du fichier ; rendu navigateur non vérifié ; aucun déploiement effectué. Relancer prepare-gallery.py après ajout de photos avec Python et Pillow.

## 2026-10-03 — Photos des sous-projets de la galerie

### Changements prévus
- Relier les deux projets Hydraulique / Eau aux sous-dossiers créés par l'utilisateur et à leurs photos respectives.
- Conserver les filtres de projets existants et vérifier les chemins des images.

Statut : terminé.

### Changements réalisés et vérifications
- Les deux albums du thème Hydraulique / Eau utilisent leurs sous-dossiers respectifs : 49 photos pour Réservoir commun Dou Mahmoud et 7 pour Projet Eau Potable Tizirte.
- Gestion d'un sous-dossier par projet ajoutée au chargement des photos ; filtres et modifications existants conservés. Version JavaScript de la galerie passée à 2.8.
- Syntaxe JavaScript (node --check), existence des 63 chemins de photos de la galerie et nombres de photos des deux projets : vérifiés avec succès.
- git diff --check : réussi, avec avertissements LF/CRLF uniquement.
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué. Les ajouts ultérieurs de photos nécessitent une mise à jour des listes du site statique.

## 2026-10-02 — Introduction des commissions sur trois lignes

### Changements prévus
- Placer « et » sur une deuxième ligne et « du bien-être de ses habitants. » sur une troisième ligne dans l'introduction des commissions.

Statut : terminé.

### Changements réalisés et vérifications
- Deux retours explicites ajoutés autour de « et » dans l'introduction sur l'accueil.
- Présence des retours dans le HTML et `git diff --check` : vérifiés avec succès (avertissements LF/CRLF uniquement).
- Limites : sur petit écran, les phrases peuvent se répartir sur davantage de lignes ; rendu navigateur non vérifié et aucun déploiement effectué.

## 2026-10-02 — Présentation visuelle des commissions

### Changements prévus
- Remplacer l'énumération sur l'accueil par cinq cartes avec pictogrammes et descriptions courtes, adaptées aux petits écrans.
- Conserver la phrase d'introduction modifiée par l'utilisateur et le lien vers les commissions.

Statut : terminé.

### Changements réalisés et vérifications
- Accueil : cinq cartes blanches avec pictogrammes SVG, numéros discrets et descriptions courtes ; introduction de l'utilisateur conservée et bouton maintenu.
- Styles : palette verte et beige existante, cinq colonnes sur grand écran, disposition 3 + 2 sur tablette et une colonne sur téléphone ; version CSS 2.6 sur l'accueil.
- Contrôle des cinq cartes et `git diff --check` : réussis (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué.

## 2026-10-02 — Nos commissions sur l'accueil

### Changements prévus
- Raccourcir le libellé en « Nos commissions » dans les menus et les titres de la page dédiée.
- Ajouter une présentation des commissions sur l'accueil après les projets d'avenir, avec un lien vers la page dédiée.

Statut : terminé.

### Changements réalisés et vérifications
- Sept menus et titres de la page dédiée renommés « Nos commissions ».
- Accueil : section ajoutée immédiatement après les projets d'avenir, présentant les cinq domaines et un bouton « Découvrir nos commissions ».
- Vérifications réussies : libellés des sept menus, ordre des sections, destination du bouton et `git diff --check` (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué. Modifications précédentes conservées.

## 2026-10-02 — Projets et commissions dans le menu principal

### Changements prévus
- Ajouter deux entrées distinctes dans la navigation de toutes les pages : « Projet d'avenir » et « Nos commissions thématiques ».
- Déplacer les commissions sur une page dédiée et retirer les onglets internes ainsi que leur code devenu inutile.
- Adapter la navigation à l'espace disponible et vérifier les liens et contenus conservés.

Statut : terminé.

### Changements réalisés et vérifications
- Navigation des sept pages : deux liens distincts « Projet d'avenir » et « Nos commissions thématiques ».
- Nouvelle page `commissions-thematiques.html` : cinq commissions et leurs contenus conservés ; page des projets recentrée sur l'observatoire.
- Onglets internes et leur CSS/JavaScript retirés. Navigation sur grand écran autorisée à passer sous le logo pour éviter les collisions ; menu mobile conservé.
- Versions CSS/JavaScript passées à 2.5 sur les sept pages.
- Vérifications réussies : syntaxe JavaScript, `git diff --check`, présence des liens dans les sept menus, existence des cibles locales et conservation des cinq commissions.
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué. Modifications précédentes conservées.

## 2026-10-02 — Titre des cartes des contacts

### Changements prévus
- Remplacer le titre des cartes par « Cartes de visite des contacts », selon la précision de l'utilisateur.

Statut : terminé.

### Changements réalisés et vérifications
- `contact.html` : titre remplacé par « Cartes de visite des contacts ».
- Présence du titre et `git diff --check` : vérifiés avec succès (avertissements LF/CRLF uniquement).
- Limites : aucun déploiement effectué ; rendu navigateur non vérifié pour ce changement de texte.

## 2026-10-02 — Chiffres, onglets et cartes de visite

### Changements prévus
- Renommer le titre en « Nos impacts en chiffres », conserver les deux libellés sur deux lignes et ajouter un second réservoir de 100 m³.
- Séparer le projet d'avenir et les commissions thématiques dans deux onglets accessibles de la page existante.
- Reformuler le titre des cartes de visite et vérifier les modifications.

Statut : terminé.

### Changements réalisés et vérifications
- Accueil : titre « Nos impacts en chiffres », libellés des foyers et puits conservés sur deux lignes, huitième statistique « 1 — Second réservoir de 100 m³ » ajoutée à côté du réservoir de 750 m³.
- Page des projets : onglets « Projet d'avenir » et « Nos commissions thématiques », sélection accessible et navigation par flèches, Début et Fin. Les deux sections restent lisibles sans JavaScript.
- Contact : titre reformulé en « Cartes de visite des membres du bureau ».
- Versions CSS et JavaScript passées à 2.4 sur les six pages pour renouveler le cache.
- `node --check script.js` et `git diff --check` : réussis (avertissements LF/CRLF uniquement).
- Vérification automatisée avec objets DOM simulés : sélection initiale, changement d'onglet, navigation clavier et état des panneaux réussis ; contrôle des huit statistiques et des retours à la ligne réussi.
- Limites : rendu visuel navigateur non vérifié ; aucun déploiement effectué. Modifications préexistantes conservées.

## 2026-10-02 — Libellés des statistiques sur deux lignes

### Changements prévus
- Fixer les retours à la ligne des libellés des foyers et des puits sur l'accueil, avec deux lignes équilibrées.
- Préserver la modification existante « Puits exploités à ce jour ».

Statut : terminé.

### Changements réalisés et vérifications
- `index.html` : retours explicites après « Foyers alimentés » et « Puits exploités » ; espaces insécables pour garder chacun des deux groupes sur une ligne.
- Texte préexistant des puits conservé.
- Contrôle des deux libellés dans le HTML et `git diff --check` : réussis (avertissements LF/CRLF uniquement).
- Limite : rendu navigateur non vérifié ; aucun déploiement effectué.

Ce fichier conserve l'historique des interventions sur le site. Ajouter une entrée avant chaque intervention, puis la compléter avec les modifications et vérifications réalisées. Ne pas supprimer les anciennes entrées.

## 2026-10-01 — Corrections après revue

Statut : terminé. Entrée créée avant toute modification du site, puis complétée après vérification.

### Changements prévus
- Réparer la photo de la mosquée sur l'accueil et intégrer les deux nouvelles photos dans la galerie.
- Rendre le bouton du menu mobile accessible au clavier et synchroniser son état accessible.
- Masquer les catégories sans photo et prévoir un message pour une galerie vide.
- Créer des versions optimisées des cartes de visite et différer leur chargement.
- Ajouter les liens téléphoniques et corriger « integrated » en « intégré ».
- Conserver cette exigence de journalisation dans les consignes du projet.

### État initial à préserver
Les modifications de contenu déjà présentes dans `projets-d-avenir.html` et `realisations.html`, ainsi que les deux nouveaux JPEG de la mosquée et la suppression de l'ancienne image, proviennent du travail antérieur à cette intervention.

### Vérifications
- `node --check script.js` : réussi.
- `git diff --check` : réussi (avertissements de conversion LF/CRLF uniquement).
- Contrôle des références locales des six pages HTML et de toutes les images déclarées dans la galerie JavaScript : aucun fichier manquant.
- Contrôle des six boutons de menu et de leurs cibles, des quatre liens téléphoniques et des six images différées : réussi.
- Vérification du décodage des six nouveaux WebP : réussie. Inspection visuelle d'une carte française et d'une carte arabe : textes conservés et lisibles.
- Le rendu navigateur et les interactions sur appareil n'ont pas été validés : l'ouverture locale avait été bloquée par la politique du navigateur lors de la revue précédente.

### Changements réalisés
- `index.html` : aperçu de la mosquée relié à `Mosquee face 1.jpeg`.
- `script.js` : les deux nouveaux JPEG de la mosquée sont déclarés dans la galerie, avec légendes distinctes ; les catégories vides sont masquées et un message de secours est prévu si aucune photo n'est disponible.
- Les six pages HTML : bouton natif de menu avec nom accessible, `aria-expanded` et `aria-controls` ; versions CSS/JS harmonisées en `2.2` pour renouveler le cache.
- `script.js` : état accessible du menu synchronisé à l'ouverture et à la fermeture ; Échap ferme le menu et rend le focus au bouton.
- `styles.css` : présentation et focus visible du bouton ; liens du menu mobile fermé retirés de la navigation clavier via `visibility`; styles des filtres masqués et du message vide.
- `images/cartes/*-web.webp` : six versions optimisées, dimension maximale 1050 px et qualité WebP 85. Originaux conservés. Poids total utilisé par la page : 3 573 160 → 492 022 octets, soit une réduction de 86,2 %.
- `contact.html` : utilisation des images optimisées avec `loading="lazy"` et `decoding="async"` ; quatre liens `tel:` au format international marocain.
- `qui-sommes-nous.html` : « integrated » remplacé par « intégré ».
- `AGENTS.md` : consigne permanente demandant de journaliser chaque intervention avant les modifications, puis de consigner les résultats.
- Les changements de contenu préexistants ont été préservés. Aucun déploiement ni commit effectué.

## 2026-10-01 — Commit et envoi sur GitHub

### Changements prévus
- Vérifier et regrouper les modifications actuelles du site, les images et les consignes dans un commit.
- Envoyer le commit sur la branche main du dépôt GitHub origin.

Statut : vérifications en cours.

### Changements réalisés et vérifications
- Ensemble des modifications existantes conservé : contenus, menu accessible, galerie, photos de la mosquée et cartes optimisées ; consignes et journal inclus.
- Contrôle de syntaxe JavaScript (node --check script.js) : réussi.
- Contrôle git diff --check : réussi ; avertissements LF/CRLF uniquement.
- Limite : aucune nouvelle vérification du rendu navigateur pour cette opération de versionnement.
- Préparation terminée ; commit et envoi sur origin/main exécutés à la suite de cette entrée, résultat communiqué dans le chat.

## 2026-10-02 — En-tête adapté aux téléphones

### Changements prévus
- Corriger le débordement du nom de l'association dans l'en-tête mobile, préserver la lisibilité du logo et réserver la place du bouton de menu.
- Améliorer les zones tactiles et le défilement du menu sur écran court ; renouveler la version CSS sur les six pages.

Statut : terminé.

### Changements réalisés et vérifications
- styles.css : nom autorisé à revenir à la ligne, logo de 40 px et marges réduites sur téléphone ; bouton de menu de 44 × 44 px avec espace réservé.
- Menu déroulant : liens tactiles élargis et défilement vertical limité à la hauteur disponible.
- Six pages HTML : version CSS passée à 2.3.
- Vérification dans Edge sans interface aux largeurs 270, 320, 375, 390, 600, 768, 1150 et 1440 px : en-tête contenu dans la largeur, aucune collision logo/bouton ; ouverture et fermeture par Échap réussies à toutes les largeurs mobiles.
- Vérification des six références CSS et git diff --check : réussie.
- Limites : pas de vérification sur téléphone physique, ni de déploiement. Le contrôle navigateur porte sur l'en-tête de l'accueil, dont les styles sont partagés par les six pages.

Statut : terminé.

## 2026-10-02 — Versionnement de l'en-tête mobile

### Changements prévus
- Conserver et vérifier les modifications existantes de l'en-tête mobile, puis créer un commit et l'envoyer sur origin/main.

### Changements réalisés et vérifications
- Modifications existantes préservées : en-tête et menu adaptés aux téléphones, version CSS 2.3 sur les six pages.
- Différences relues ; syntaxe JavaScript vérifiée avec succès.
- Ligne vide finale du journal retirée après le contrôle des espaces.
- Limite : contrôles visuels précédemment consignés non réexécutés pour ce commit.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

## 2026-10-02 — Versionnement des commissions et contenus

### Changements prévus
- Vérifier et conserver les changements actuels : page des commissions, présentation sur l'accueil, navigation, statistiques et contacts.
- Créer le commit et l'envoyer sur origin/main.

### Changements réalisés et vérifications
- Modifications existantes conservées, y compris la nouvelle page commissions-thematiques.html et les entrées précédentes du journal.
- Syntaxe JavaScript et git diff --check : réussis (avertissements LF/CRLF uniquement).
- Limite : rendu navigateur non réexécuté pour cette opération de versionnement.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

## 2026-10-02 — Renommage et intégration des photos d’eau

### Changements prévus
- Examiner et renommer les sept nouvelles photos WhatsApp avec des noms descriptifs sans espaces ni accents.
- Intégrer les sept photos dans la galerie Eau, ajouter leurs légendes et remplacer les références à l’ancienne image supprimée.
- Vérifier les fichiers référencés et la syntaxe JavaScript, puis consigner les résultats.

Statut : terminé.

### Changements réalisés et vérifications
- Les deux albums du thème Hydraulique / Eau utilisent leurs sous-dossiers respectifs : 49 photos pour Réservoir commun Dou Mahmoud et 7 pour Projet Eau Potable Tizirte.
- Gestion d'un sous-dossier par projet ajoutée au chargement des photos ; filtres et modifications existants conservés. Version JavaScript de la galerie passée à 2.8.
- Syntaxe JavaScript (node --check), existence des 63 chemins de photos de la galerie et nombres de photos des deux projets : vérifiés avec succès.
- git diff --check : réussi, avec avertissements LF/CRLF uniquement.
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué. Les ajouts ultérieurs de photos nécessitent une mise à jour des listes du site statique.

### Changements réalisés et vérifications
- Sept photos examinées visuellement et renommées avec des noms descriptifs ; JPEG conservés sans recompression.
- Galerie Eau : sept photos intégrées avec légendes et textes alternatifs explicites (14 photos au total).
- Accueil : référence cassée remplacée par la vue d’ensemble de l’installation et texte alternatif adapté.
- Version JavaScript passée de 2.5 à 2.6 sur les sept pages pour renouveler le cache.
- Toutes les références locales HTML et les 14 photos déclarées vérifiées : aucun fichier manquant.
- node --check script.js et git diff --check : réussis (avertissements LF/CRLF uniquement).
- Suppression préexistante de eau/1.webp respectée ; autres images et contenus préservés.
- Limites : rendu navigateur non vérifié ; aucun commit, envoi GitHub ou déploiement réalisé.

Statut : terminé.

## 2026-10-02 — Versionnement des photos des installations d'eau

### Changements prévus
- Conserver les modifications existantes : sept nouvelles photos, légendes, aperçu sur l'accueil et version JavaScript.
- Vérifier les changements, créer un commit et l'envoyer sur origin/main.

### Changements réalisés et vérifications
- Sept JPEG ajoutés en remplacement de l'ancienne photo d'eau, légendes de galerie et aperçu d'accueil actualisés ; version JavaScript 2.6 sur les sept pages.
- Modifications de l'utilisateur et entrées précédentes conservées.
- node --check script.js et git diff --check : réussis ; présence des sept JPEG confirmée.
- Limite : rendu navigateur non vérifié lors de ce versionnement.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

## 2026-10-03 — Galerie organisée par thèmes et sous-projets

### Changements prévus
- Ajouter une sélection de sous-projets sous chaque thème, avec des albums indépendants.
- Créer Réservoir commun Dou Mahmoud et Projet Eau Potable Tizirte dans Hydraulique / Eau.
- Conserver les photos existantes sans attribuer arbitrairement les photos d’eau à un projet ; vérifier le filtrage et les références.

Statut : terminé.

### Changements réalisés et vérifications
- Les deux albums du thème Hydraulique / Eau utilisent leurs sous-dossiers respectifs : 49 photos pour Réservoir commun Dou Mahmoud et 7 pour Projet Eau Potable Tizirte.
- Gestion d'un sous-dossier par projet ajoutée au chargement des photos ; filtres et modifications existants conservés. Version JavaScript de la galerie passée à 2.8.
- Syntaxe JavaScript (node --check), existence des 63 chemins de photos de la galerie et nombres de photos des deux projets : vérifiés avec succès.
- git diff --check : réussi, avec avertissements LF/CRLF uniquement.
- Limites : rendu navigateur non vérifié ; aucun déploiement effectué. Les ajouts ultérieurs de photos nécessitent une mise à jour des listes du site statique.

## 2026-10-03 — Versionnement de la galerie par projets

### Changements prévus
- Conserver et versionner les albums, les originaux, les WebP, le manifeste et le script de préparation.
- Vérifier la syntaxe et les références locales ; corriger si nécessaire les chemins affectés par les déplacements, puis envoyer sur origin/main.

### Changements réalisés et vérifications
- Albums par projet, 63 images WebP, originaux déplacés/ajoutés, manifeste et script de préparation inclus ; modifications existantes préservées.
- Accueil : référence à la photo déplacée remplacée par sa version WebP existante.
- Syntaxe des deux JavaScript, existence des 63 images du manifeste et git diff --check : réussis. Contrôle des références HTML : seul chemin manquant détecté sur l'accueil, corrigé.
- Limite : rendu navigateur non vérifié pour ce versionnement.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

## 2026-10-04 — Versionnement de l'en-tête et des corrections de contenu

### Changements prévus
- Vérifier et conserver les modifications existantes de présentation et de contenu, puis créer un commit et l'envoyer sur origin/main.

### Changements réalisés et vérifications
- Changements existants préservés : en-tête sur deux lignes, adaptation mobile, corrections de textes et chiffres, version CSS 2.9.
- Syntaxe JavaScript et git diff --check : réussis (avertissements LF/CRLF uniquement).
- Limite : rendu navigateur non vérifié lors de ce versionnement.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

## 2026-10-04 — Versionnement du logo et des chiffres clés

### Changements prévus
- Conserver les changements existants (logo agrandi, chiffres réordonnés, 20+ familles et viewport initial-scale=5.0), vérifier les différences et envoyer un commit sur origin/main.

### Changements réalisés et vérifications
- Modifications existantes conservées ; version CSS 2.10 sur les sept pages et journal inclus.
- git diff --check et node --check script.js : réussis (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur non vérifié ; réglage préexistant initial-scale=5.0 conservé, susceptible de provoquer un zoom initial important sur mobile.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

## 2026-10-04 — Rétablissement du zoom initial de l'accueil

### Changements prévus
- Vérifier le retour du viewport à initial-scale=1.0 et publier la correction dans un nouveau commit.

### Changements réalisés et vérifications
- Correction déjà présente dans index.html conservée : initial-scale=5.0 remplacé par initial-scale=1.0.
- Limite : rendu mobile non vérifié ; contrôle du diff effectué avant commit.

## 2026-10-04 — Versionnement des albums et de la navigation de galerie

### Changements prévus
- Conserver les changements existants de galerie, photos, génération et contenus ; vérifier puis créer et envoyer le commit sur origin/main.

### Changements réalisés et vérifications
- Modifications existantes conservées : albums et photos, miniatures, gestes tactiles, titres bilingues, prise en charge HEIC/HEIF dans le générateur et corrections de contenu.
- Syntaxe des deux JavaScript, existence des 144 chemins du manifeste et git diff --check : réussis (avertissements LF/CRLF uniquement).
- Limites : rendu navigateur, gestes tactiles et exécution du générateur Python non revérifiés lors du versionnement.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

## 2026-10-08 — Versionnement des corrections éditoriales et coordonnées

### Changements prévus
- Conserver et versionner les changements du site, les coordonnées, l'audit et le rapport éditorial ; vérifier les fichiers puis envoyer sur origin/main.

### Changements réalisés et vérifications
- Corrections éditoriales, coordonnées, pieds de page, libellés des albums, audit et rapport Word inclus ; modifications existantes conservées.
- Syntaxe des deux JavaScript, existence des 144 chemins du manifeste et git diff --check : réussis (avertissements LF/CRLF uniquement).
- Surveillance Git fsmonitor indisponible : contrôles effectués avec core.fsmonitor=false, sans changer la configuration.
- Limites : rendu navigateur, document Word et exécution du générateur Python non revérifiés pour ce versionnement.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

## 2026-10-08 — Versionnement des impacts et réalisations

### Changements prévus
- Vérifier et conserver les nouveaux compteurs et les dates des réalisations, puis créer et envoyer un commit sur origin/main.

### Changements réalisés et vérifications
- Modifications existantes préservées : 11 compteurs, dont 2 complexes religieux, libellés sans dates sur l'accueil et dates en tête des réalisations.
- Contrôle des 11 compteurs et git diff --check : réussis (avertissements LF/CRLF uniquement).
- Limite : rendu navigateur non vérifié lors du versionnement.
- Préparation terminée ; résultat du commit et de l'envoi communiqué dans le chat.

### Reprise du versionnement le 2026-10-08
- Prévu : inclure également les modifications récentes du libellé de galerie et de son générateur, puis reprendre le commit et l'envoi précédemment non autorisés.
- Réalisé : différences supplémentaires relues, syntaxe de gallery-data.js et git diff --check vérifiés avec succès ; toutes les modifications existantes conservées.
- Limites : rendu navigateur et générateur Python non exécutés pour cette reprise.
