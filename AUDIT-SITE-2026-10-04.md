# Audit approfondi — Association Tagmout n’Aït Oumzil

Date : 4 octobre 2026. Version examinée : fichiers locaux de `D:\Site_web_tagmout` présents à cette date.

## 1. Portée, méthode et limites

L’audit couvre les **sept pages** actuelles, leur HTML complet, le CSS partagé, les interactions de `script.js`, le manifeste `gallery-data.js` et le générateur `prepare-gallery.py`. La septième page, Nos commissions, fait partie du périmètre. Les anciens constats ont été réévalués sur cette version : le bouton mobile et les téléphones ont été corrigés ; l’ancienne photo cassée n’est plus un défaut actuel.

Contrôles réalisés : inventaire de tous les liens et ressources déclarés en HTML, existence des 144 images du manifeste, structure des titres et des contrôles, lecture des branches des interactions, mesures des fichiers, détection des images identiques, inspection de deux images représentatives et calcul des contrastes des couleurs CSS. Un test isolé de la fonction réelle de visionneuse, exécutée sur des objets simulés, confirme le défaut de chargement décrit en GAL-01.

**Il ne s’agit pas d’une recette complète dans un navigateur.** L’ouverture locale a été refusée précédemment par la politique du navigateur. L’adresse publique a été demandée pour compléter les contrôles. Aucun parcours visuel, geste tactile, lecteur d’écran, envoi d’email ou appel téléphonique n’est présenté ici comme testé. Les captures des pages, les erreurs réseau en production, les Core Web Vitals, l’indexation et les réponses HTTP restent à vérifier. Aucun score Lighthouse ni taux de conformité n’est inventé.

Les conclusions utilisent trois niveaux de preuve :

- **Confirmé** : présent dans les fichiers, mesuré ou établi par un test isolé. Cela ne signifie pas nécessairement observé dans un navigateur.
- **Risque à valider** : cause identifiable, mais effet dépendant du viewport, du navigateur, du serveur ou du contenu publié.
- **Amélioration** : proposition UX, éditoriale ou de conception ; ne constitue pas forcément un bug.

Priorités : **critique** = service essentiel indisponible ou incident majeur avéré ; **élevé** = parcours important, accès au contenu ou fonctionnalité fortement dégradés ; **moyen** = friction, perte de compréhension ou optimisation significative ; **faible** = finition ou confort. Aucun incident de priorité critique n’est établi sur les éléments accessibles. Plusieurs défauts élevés doivent être corrigés avant une validation publique complète.

Les exemples rédactionnels ci-dessous sont des propositions. Les chiffres, dates, noms officiels, engagements et états d’avancement doivent être validés par l’association avant publication.

## 2. Inventaire et résultats de base

| Page | Sections et éléments examinés | Résultat général |
|---|---|---|
| Accueil | En-tête, hero, CTA, huit chiffres, présentation, trois réalisations, trois aperçus photo, observatoire, cinq commissions, soutien, pied de page | Parcours de découverte complet, mais long ; aperçus photo sans action ; risques de débordement mobile |
| Qui sommes-nous ? | Présentation, bureau exécutif, bannière, portrait et mot du président | Identité forte ; gouvernance peu détaillée et texte long sans sortie de parcours |
| Réalisations | Six domaines : éducation, eau, routes, religion, solidarité, environnement | Informations nombreuses, mais peu datées et non reliées aux preuves photographiques |
| Galerie | Neuf filtres dont Tous, sous-projets, compteur, diaporama, flèches, miniatures, gestes tactiles, visionneuse | Fonctionnalité la plus riche et zone concentrant les principaux défauts |
| Projet d’avenir | Présentation de l’observatoire/planétarium, recherche de partenaires | Page trop peu détaillée pour convertir un partenaire intéressé |
| Nos commissions | Introduction et cinq accordéons | Répartition lisible ; états accessibles et suivi des actions manquants |
| Contact & Partenariats | Trois contacts, quatre téléphones, quatre liens email, carte, six cartes de visite | Coordonnées utilisables ; choix du contact et accès à la localisation perfectibles |

Navigation commune : sept liens identiques sur les sept pages et un logo vers l’accueil ; aucun sous-menu. Le menu mobile s’ouvre/se ferme par bouton, se ferme au choix d’un lien et avec Échap selon le code. Aucun formulaire, paiement, recherche, compte utilisateur ou mécanisme d’adhésion n’est implémenté. Leur absence ne constitue pas à elle seule une erreur.

Résultats mesurés :

- Sept pages avec chacune un H1 et une description ; aucun identifiant HTML dupliqué détecté dans une même page.
- 98 références locales HTML contrôlées ; aucun chemin manquant.
- 144 images de galerie présentes, réparties dans neuf albums et huit thèmes.
- Galerie : **55 809 342 octets, soit 55,81 Mo décimaux** pour l’ensemble des WebP. Ce total n’est pas le poids initial effectivement téléchargé.
- Album Eau Potable Tizirte : 7 photos ; Réservoir commun Dou Mahmoud : 47 ; album foncier dans Autres : 83 ; mosquée : 2 ; cinq autres albums : 1 chacun.
- Neuf images de galerie sont verticales. Quatorze dates proviennent de la date du fichier, 78 du nom et 52 d’EXIF.
- Sept pages sans élément `main`, sans lien d’évitement et sans formulaire. Aucun attribut HTML width/height sur les images statiques ; certains espaces sont néanmoins réservés par le CSS.
- Syntaxe de `script.js` et `gallery-data.js` valide.
- Les fichiers présents dans `images` totalisent environ **544,69 Mo**, originaux compris. Cela ne représente pas le poids d’une page.

## 3. Navigation, structure et comportements globaux

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| GLO-01 — Toutes les pages | **Confirmé.** `.scroll-reveal` démarre à `opacity:0` et seule l’exécution JS lui ajoute `visible` (`styles.css:987`, `script.js:45`). Le menu mobile dépend aussi du JS ; les accordéons restent fermés sans lui. | Élevé | Un script indisponible peut rendre invisibles des coordonnées, des réalisations et des CTA pourtant présents dans le HTML. | Contenu visible par défaut, animations activées uniquement après initialisation réussie. Prévoir des détails natifs pour les commissions et une navigation de repli. Exemple : appliquer l’opacité seulement sous une classe d’amélioration ajoutée par JS. |
| GLO-02 — Structure des sept pages | **Confirmé.** Aucun `main` ni lien « Aller au contenu ». | Moyen | Les utilisateurs au clavier répètent la traversée de l’en-tête à chaque page ; le contenu principal n’a pas son repère dédié. | Entourer le contenu d’un `main id="contenu"` et ajouter un lien d’évitement visible au focus. |
| GLO-03 — Navigation active | **Confirmé.** La page courante reçoit seulement une classe CSS ; aucun `aria-current="page"` (`script.js:34`). La comparaison attend le nom exact du fichier. | Moyen | Le repère courant n’est pas explicitement exposé aux aides techniques ; des URL sans extension configurées côté hébergeur pourraient ne plus être reconnues. | Renseigner `aria-current` dans chaque page ou dans le générateur ; tester les formes d’URL réellement déployées. |
| GLO-04 — Menu et changement de largeur | **Risque à valider.** L’état ouvert est conservé quand le viewport passe du mobile au desktop puis revient au mobile ; aucun suivi du breakpoint. | Faible | Réouverture inattendue après rotation ou redimensionnement ; décalage possible entre le bouton masqué et son état. | À la sortie du mode mobile, réinitialiser l’état ; tester rotation avec menu ouvert. Ne pas imposer un piège de focus à ce simple menu non modal. |
| GLO-05 — Parcours globaux | **Amélioration.** Les pages Présentation, Réalisations et Commissions se terminent sans lien contextuel vers une prochaine action. Seul le menu permet de poursuivre. | Moyen | Après lecture, l’utilisateur doit décider seul comment contribuer ou vérifier les réalisations. | Terminer par une action adaptée : « Voir les photos de nos réalisations », « Proposer mes compétences », « Contacter l’association ». |
| GLO-06 — Pied de page | **Confirmé / amélioration.** Il ne contient que le copyright. | Moyen | Peu de repères en bas des longues pages ; absence de coordonnées centrales, d’informations d’édition et d’explication des services tiers. | Ajouter contact principal, localisation textuelle et pages d’informations pertinentes. Déterminer les obligations juridiques applicables séparément ; cet audit n’établit pas une non-conformité légale. |
| GLO-07 — En-tête et fichiers communs | **Confirmé.** Le même en-tête est copié sept fois. CSS 2.13/JS 2.13 en galerie contre CSS 2.10/JS 2.6 ailleurs, alors que les fichiers physiques sont les mêmes. | Moyen | Dérive de maintenance et caches séparés ; un visiteur revenant sur une ancienne URL peut conserver un ancien fichier selon les en-têtes du serveur. | Générer les éléments communs depuis un modèle et versionner les ressources de façon uniforme, idéalement avec une empreinte de contenu. |

## 4. Affichage, UI et responsive

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| UI-01 — Cartes Accueil/Réalisations | **Confirmé dans le CSS.** `.container` conserve 64 px de padding horizontal cumulé ; `.cards-grid` impose `minmax(300px,1fr)`. À 320 px, il reste 256 px ; à 360 px, 296 px. | Élevé | La grille ne tient pas dans sa zone disponible. `overflow-x:hidden` peut masquer les bords au lieu de résoudre le débordement. | Utiliser `minmax(min(100%,300px),1fr)` ou une colonne à petite largeur, et des marges mobiles adaptées. Vérifier ensuite 320/360/390 px et le zoom. |
| UI-02 — Aperçus photo de l’accueil | **Confirmé dans le HTML.** Grille inline à minimum 280 px, contre 256 px disponibles à 320 px (`index.html:164`). | Moyen | Débordement de l’aperçu sur les plus petits écrans. | Déplacer la règle dans le CSS commun et borner le minimum à 100 % du parent. |
| UI-03 — Contact sur petit écran | **Risque à valider.** Les lignes de contact sont des conteneurs flex sans retour à la ligne ; emails longs, deux téléphones et padding de 32 px par côté dans la carte. | Élevé | Les adresses ou numéros peuvent dépasser ou être coupés, précisément au moment de contacter l’association. | Autoriser `flex-wrap`, `min-width:0` et `overflow-wrap:anywhere` ; mettre chaque téléphone du trésorier sur sa propre ligne si nécessaire. |
| UI-04 — En-tête vers 900–1024 px | **Risque à valider.** Sept liens non sécables, gap de 1,2 rem ; passage au menu mobile seulement à 900 px. | Moyen | La navigation peut manquer d’espace juste au-dessus du breakpoint, particulièrement si les polices ou le zoom agrandissent les libellés. | Mesurer à 901/960/1024 px ; choisir le breakpoint à partir de la largeur réelle des liens ou autoriser une structure adaptée. |
| UI-05 — CSS du logo | **Confirmé.** Des règles finales (`styles.css:1564` et suivantes) remplacent les réglages mobiles précédents, notamment le retour à la ligne du nom et la taille du logo. | Moyen | Les intentions des correctifs antérieurs deviennent difficiles à lire ; risque de débordement avec texte agrandi. | Regrouper toutes les règles de navigation et conserver une seule définition par breakpoint ; autoriser le nom à revenir à la ligne lorsque nécessaire. |
| UI-06 — Hero et bandeaux | **Confirmé / amélioration.** Hero à minimum 700 px, grand padding et en-tête fixe ; bandeaux internes à padding haut 10 rem. | Moyen | Le contenu utile arrive tard sur petit écran ; les pages courtes, notamment Projet, consacrent beaucoup d’espace à l’habillage. | Réduire les bandeaux internes, adapter le hero à la hauteur utile avec `svh` et préférer une hauteur minimale liée au contenu. Mesurer sans supposer que le H1 est actuellement masqué. |
| UI-07 — Galerie mobile | **Confirmé par calcul CSS.** À 320 px, les marges externes et internes laissent environ 200 px à la photo, avec deux flèches de 38 px en surimpression. | Moyen | Les contrôles occupent une part importante de l’image ; faible valeur visuelle du diaporama sur mobile. | Réduire les paddings à 12–16 px et placer éventuellement les flèches sous la photo, près du compteur. |
| UI-08 — Contrastes | **Mesuré.** Terracotta `#c96b52` sur blanc : 3,68:1 ; sur beige : 3,23:1. Blanc sur or `#dcb375` : 1,95:1. Ces couleurs servent notamment aux petits labels et au survol des flèches. | Moyen | Certains textes secondaires et contrôles deviennent difficiles à distinguer. Les ratios ne constituent pas un audit complet des fonds transparents ou photographiques. | Assombrir le terracotta pour le petit texte et employer le vert foncé sur l’or. À titre de comparaison, vert/blanc = 7,23:1 et gris de texte/fond clair = 5,09:1. Voir la référence W3C sur le contraste ci-dessous. |
| UI-09 — Iconographie et signaux d’interaction | **Amélioration.** Emojis sur les réalisations, SVG fins sur les commissions ; effets de survol sur des cartes et images sans lien. | Faible | Aspect variable selon les appareils et signaux de clic parfois ambigus. | Choisir une famille d’icônes cohérente ; réserver les animations de survol aux éléments actionnables ou rendre les cartes réellement navigables. |
| UI-10 — Mouvement et impression | **Confirmé.** Animations infinies de bannière et de défilement, défilement fluide, aucun `prefers-reduced-motion` ni style d’impression. | Moyen | Mouvement imposé ; impression possible de zones invisibles/non révélées et en-tête fixe inadapté. | Réduire les animations selon la préférence système et ajouter un style print qui affiche le contenu, masque les commandes et neutralise l’en-tête fixe. |

Pour interpréter les contrastes : le W3C distingue notamment texte normal et grand texte ; le seuil usuel AA du texte normal est 4,5:1. Les petits labels identifiés doivent donc être assombris. [Référence W3C : contraste minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

## 5. Accueil — examen section par section

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| ACC-01 — Hero | **Amélioration.** Le seul CTA est « Nous Découvrir ». La recherche de partenaires n’apparaît que plus bas. | Moyen | Un partenaire ou membre de la diaspora prêt à aider ne dispose pas d’une entrée directe. | Conserver la découverte et ajouter un CTA secondaire « Soutenir un projet » vers une section Contact contextualisée. |
| ACC-02 — Chiffres clés | **Confirmé.** Les chiffres commencent tous à zéro, sans valeur de repli ni date de référence. « Familles soutenues » ne précise plus période ni opération. | Moyen | Sans animation ils restent inexacts ; les volumes peuvent être interprétés comme annuels ou cumulés. | Inscrire les vraies valeurs dans le HTML, animer seulement l’affichage, ajouter une période validée : « 20+ familles — opération Ramadan [année] ». Les 25+ années restent compatibles avec une fondation en 2000 ; ne pas les présenter comme une erreur. |
| ACC-03 — Aperçu galerie | **Confirmé.** Les trois images ont `.gallery-item` et un curseur de clic, mais l’accueil ne possède pas de lightbox et les images ne sont pas des liens (`index.html:165–173`). | Moyen | Une action suggérée visuellement n’a aucun effet. | Lier chaque image à son album, avec titre visible, ou supprimer les signaux d’interaction. Exemple : « Voir l’album Eau potable de Tizirte ». |
| ACC-04 — Projet phare | **Confirmé.** « Nos Projets d’Avenir » et « En savoir plus sur nos projets » renvoient à une page au singulier ne présentant que l’observatoire. | Moyen | Promesse plus large que le contenu trouvé. | Harmoniser : « Notre projet d’avenir » et « Découvrir le projet d’observatoire », ou enrichir réellement la destination. |
| ACC-05 — Longueur et répétitions | **Amélioration.** Huit statistiques, plusieurs résumés, cinq commissions et plusieurs invitations de découverte se succèdent. | Moyen | Sur téléphone, l’action de soutien et les coordonnées sont éloignées ; plusieurs sections reformulent la mission. | Prioriser mission → preuves majeures → projet à soutenir → contact ; condenser les résumés secondaires tout en conservant leurs pages détaillées. |
| ACC-06 — Commissions | **Amélioration.** Chaque carte décrit une commission mais toutes passent par le même bouton général ; le texte d’introduction impose des sauts de ligne, dont « et » isolé. | Faible | Accès moins direct et mise en page textuelle rigide. | Lier les cinq cartes à une ancre de commission et laisser le texte se répartir naturellement. Exemple : « Cinq commissions au service du village et de ses habitants. » |

## 6. Qui sommes-nous ?

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| PRE-01 — Bureau exécutif | **Confirmé / amélioration.** La rubrique annonce une gouvernance transparente mais ne détaille ni composition complète, ni mandat, ni fonctionnement ; les trois responsables sont ailleurs, sur Contact. | Moyen | Un partenaire doit chercher qui porte les projets et comment l’association fonctionne. | Présenter les fonctions et mandats validés, relier les contacts ; proposer un bilan ou rapport d’activité si disponible. Ne pas inventer les membres manquants. |
| PRE-02 — Mot du président | **Amélioration.** Long passage historique et phrases très longues, sans résumé, intertitres ou date du message. | Moyen | Lecture coûteuse, surtout pour le visiteur extérieur qui cherche rapidement la mission actuelle. | Garder le texte signé, précédé d’un résumé court ; ajouter « Notre histoire », « Le lien avec la diaspora », « Transmettre et agir ». |
| PRE-03 — Ton et microcopie | **Confirmé.** « etc. . », capitales fréquentes et formulations comme « se les rappeler » ; affirmation « choix intelligent » à propos de la migration. | Faible | Irrégularités de lecture ; certains passages peuvent sembler généraliser des expériences familiales diverses. | Correction éditoriale avec accord de l’auteur, sans réécrire arbitrairement son témoignage. Exemple : « préserver leur mémoire et poursuivre leur œuvre » ; « un choix qui a ouvert de nouvelles perspectives ». |
| PRE-04 — Hiérarchie et sortie de page | **Confirmé.** « Notre Bureau Exécutif » est un H3 avant le premier H2 de contenu ; aucune invitation finale à participer malgré l’appel aux contributions. | Moyen | Plan de page moins clair et intention de contribution non accompagnée. | Ajouter un H2 « L’association et sa gouvernance », puis un lien « Envoyer une contribution à l’association ». |

## 7. Réalisations

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| REA-01 — Six domaines | **Confirmé.** Catalogue textuel sans dates de réalisation, statut actualisé ni renvoi vers les albums existants. | Élevé | Les réalisations sont difficiles à vérifier et à distinguer d’actions permanentes ou de projets anciens. | Pour chaque réalisation : période, résultat, partenaires validés, photo et lien vers l’album. Exemple de structure : « Réservoir de 750 m³ — réalisé en [année validée] — voir les travaux ». |
| REA-02 — Carte hydraulique | **Amélioration.** Beaucoup plus longue que les autres ; un point regroupe forage, adduction, distribution et foyers alimentés. | Moyen | Lecture et comparaison difficiles ; forte disproportion dans une grille de cartes. | Séparer réservoirs, puits, réseau et fontaine, avec résultats courts ; réserver les détails à une fiche projet. |
| REA-03 — Éducation et solidarité | **Confirmé / amélioration.** « Scolarisation complète », « soutien actif », « soulagement des dépenses » ne donnent pas de période ni indicateur. | Moyen | Bénéfices annoncés difficiles à comprendre ou vérifier. | Préciser le sens avec données validées : nombre d’élèves, type de cours, fréquence des distributions, nature des dépenses prises en charge. |
| REA-04 — Environnement | **Amélioration éditoriale.** Le brûlage des déchets est présenté dans la même rubrique que la protection de l’environnement, sans contexte, date ou explication de la stratégie actuelle. | Moyen | Contradiction perçue avec la promesse de développement durable. Cet audit ne tranche ni la légalité ni les effets sanitaires. | Distinguer pratiques historiques et objectifs actuels ; faire valider techniquement le texte avant d’ajouter une qualification écologique. |
| REA-05 — Titres | **Confirmé.** Les six domaines sont des H3 directement après le H1, sans H2 intermédiaire. | Moyen | Plan documentaire inutilement discontinu. | Faire de chaque domaine un H2 ou introduire un H2 parent explicite, puis conserver les H3. |

## 8. Galerie — filtres, albums, diaporama et visionneuse

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| GAL-01 — Visionneuse, changement de photo | **Confirmé par test isolé.** Les slides possèdent `data-src`, mais `showSlide` n’initialise que la photo active et la suivante. La visionneuse copie seulement `img.src` (`script.js:345–348`, `465`). | Élevé | Ouvrir la première image puis aller immédiatement à la précédente ou avancer rapidement vers une image non initialisée peut produire une image vide/cassée. Le chargement des miniatures ne remplit pas le `src` de la slide. | Partager un modèle de données et charger directement l’URL choisie ; à défaut `img.getAttribute('src') || img.dataset.src`. Tester immédiatement avant que l’autoplay n’ait parcouru les photos. |
| GAL-02 — Ouverture et commandes de la visionneuse | **Confirmé.** Ouverture seulement sur clic de `div`/image ; fermeture et flèches en `span`, sans nom accessible de bouton (`galerie.html:85–90`). | Élevé | L’ouverture n’est pas disponible au clavier ; les commandes n’ont pas leur sémantique attendue. | Bouton « Agrandir la photo » et vrais boutons « Fermer », « Photo précédente », « Photo suivante ». Conserver Échap et les flèches clavier déjà prévus. |
| GAL-03 — Modalité et focus | **Confirmé.** Pas de rôle dialog, nom de dialogue, déplacement/confinement/restauration du focus ; seul le scroll du body est bloqué. Alt fixe « Vue agrandie ». | Élevé | Le clavier et le lecteur d’écran peuvent rester dans la page sous la visionneuse ; le contenu agrandi est peu décrit. | Utiliser `dialog` avec gestion adaptée ou un composant modal complet ; nommer la photo, rendre le fond inerte, restaurer le déclencheur à la fermeture. |
| GAL-04 — Lecture automatique | **Confirmé.** Intervalle de 4 secondes sans commande Pause, relancé après action ; pas d’arrêt au focus, à l’ouverture de la visionneuse ou quand l’onglet est masqué (`script.js:370`). | Élevé | L’utilisateur perd la photo sélectionnée pendant sa lecture ; le diaporama continue en arrière-plan et peut se désynchroniser de la visionneuse. | Désactiver l’autoplay par défaut ou ajouter une vraie commande Lecture/Pause ; arrêter pendant les interactions et la modalité. Voir référence W3C ci-dessous. |
| GAL-05 — Miniatures | **Confirmé.** Chaque miniature reçoit le même `src` que la photo de 1600 px (`script.js:304`), malgré un affichage de 68–88 px. | Élevé | Des fichiers de plusieurs centaines de ko sont sollicités pour de très petits aperçus. `loading=lazy` ne garantit pas que seules les miniatures strictement visibles seront téléchargées. | Générer des miniatures de 160–240 px, réserver les grandes images à la photo active et à sa voisine. Mesurer ensuite les transferts réseau réels. |
| GAL-06 — Position et très grands albums | **Amélioration.** 144 miniatures dans Tous, 83 dans Autres ; pas de compteur visible « photo x/y », ni flèches clavier du diaporama hors visionneuse. | Moyen | Défilement et tabulation longs ; retrouver une photo précise reste difficile. | Afficher « 12 / 83 », proposer navigation clavier dans le composant, une grille d’albums ou un aperçu paginé ; éviter 144 arrêts Tab successifs avec une navigation de groupe adaptée. |
| GAL-07 — Légendes | **Confirmé.** La plupart des légendes proviennent de noms tels que `IMG-20240515-WA0001` ; les sept photos de Tizirte ont des légendes dédiées, contrairement à la majorité. | Moyen | Les textes alternatifs décrivent un fichier plutôt que la scène ; faible compréhension des événements. | Ajouter titre, légende, lieu et date validée dans les données. Exemple à adapter à la photo réelle : « Travaux du réservoir — préparation de la plateforme ». |
| GAL-08 — Information sous la photo | **Confirmé.** L’overlay descriptif du diaporama est explicitement masqué ; la légende est surtout disponible dans la visionneuse. | Moyen | Les images ne racontent pas les réalisations sans clic supplémentaire ; date et étape restent inconnues. | Ajouter une légende visible sous l’image, sans recouvrir le sujet, et une date si fiable. |
| GAL-09 — Images mal classées et doublons | **Confirmé par empreintes et inspection de deux fichiers.** Éducation et Tourisme partagent la même vue générale du village. Routes et Festivités partagent la même bannière associative. | Moyen | La catégorie promet des preuves visuelles qu’elle ne fournit pas ; impression de remplissage. | Remplacer par des photos pertinentes ou signaler honnêtement un album à venir ; garder la bannière dans Présentation. |
| GAL-10 — Recadrage | **Confirmé dans le CSS et les dimensions.** Tous les sujets sont forcés en 16:9 avec `object-fit:cover`, alors que neuf images sont verticales et certaines sont des bannières. | Moyen | Des parties importantes sont nécessairement coupées ; les bannières sont particulièrement mal adaptées. | Préférer `contain` sur un fond neutre dans le diaporama ou des ratios adaptés ; réserver `cover` aux miniatures. |
| GAL-11 — État dans l’URL | **Confirmé.** Aucun paramètre, fragment ni historique pour les thèmes, albums et photos. | Moyen | Impossible de partager une réalisation précise ; retour/rechargement remet sur Tous. | URL comme `galerie.html?theme=eau&album=tizirte&photo=...`, validation des valeurs inconnues, restauration de l’état à l’arrivée. |
| GAL-12 — Tri chronologique | **Confirmé.** Tri global ascendant ; 14 dates approximatives issues de `mtime`, information `dateSource` non transmise à l’affichage. | Moyen | Mélange d’albums et chronologie potentiellement trompeuse ; une copie Git peut modifier la date approximative lors d’une régénération. | Stocker une date éditoriale stable ou « date inconnue » ; afficher l’incertitude si nécessaire ; proposer tri récent/ancien au niveau de l’album. |
| GAL-13 — Français/arabe | **Confirmé.** Le titre sélectionné utilise bien `bdi dir=auto`, mais les boutons de sous-projet et les légendes n’appliquent pas la même isolation ni une langue arabe explicite. | Moyen | Lisibilité, ponctuation et prononciation peuvent diverger selon les zones ; un visiteur francophone ne comprend pas le grand album Autres. | Ajouter `lang=ar`, direction/isolation aux libellés concernés et une traduction française validée. Renommer « Autres » en rubrique plus informative si elle reste dominée par cet événement. |
| GAL-14 — Fichier de données ou image indisponible | **Confirmé.** `window.galleryProjects || {}` transforme un manifeste absent en galerie vide ; aucun gestionnaire de chargement/erreur sur les photos. | Moyen | Un incident technique ressemble à une absence de contenu ; écran vide sans explication ni nouvelle tentative. | Distinguer « Aucune photo dans cet album » de « Impossible de charger les photos » ; proposer réessayer et conserver une légende pendant le chargement. |
| GAL-15 — Réutilisation des données dans HTML | **Confirmé, risque de robustesse.** `slide.innerHTML` interpole les légendes et chemins dérivés des noms de fichiers/dossiers sans échappement (`script.js:293`). | Moyen | Un guillemet dans un nom peut casser un attribut ; si les sources deviennent non fiables, cette construction peut aussi injecter du balisage. Aucune exploitation publique n’est démontrée. | Créer `img` et `span` avec `createElement`, puis affecter `src`, `alt` et `textContent`, comme cela est déjà fait pour le titre d’album. |
| GAL-16 — Gestes tactiles | **Risque à valider.** Un swipe change la slide, tandis qu’un clic délégué ouvre la visionneuse ; aucun drapeau ne neutralise un éventuel clic synthétique après geste. | Faible | Selon le navigateur, une ouverture involontaire peut suivre le balayage. | Tester swipe court/long, scroll vertical, geste annulé et multi-touch ; ignorer le clic après un déplacement horizontal effectivement consommé si le problème se reproduit. |
| GAL-17 — Transitions | **Confirmé.** `transition: transform 0.6s var(--transition)` développe une valeur invalide ; le passage immédiat en `display:none` empêche par ailleurs le fondu sortant attendu. | Faible | Effets moins cohérents que les règles ne le laissent penser ; maintenance confuse. | Définir une variable dédiée à la courbe d’accélération et choisir soit une transition d’opacité réelle, soit un changement instantané assumé. |

Le W3C prévoit un contrôle permettant de suspendre les mises à jour automatiques non essentielles. Un intervalle de quatre secondes ne dispense pas d’un contrôle de pause. [Référence : Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

Pour la visionneuse, le modèle de dialogue modal décrit notamment le focus à l’ouverture, la navigation contenue dans le dialogue et le retour au déclencheur. [Référence : Dialog Modal Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

## 9. Projet d’avenir

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| PRO-01 — Recherche de partenaires | **Confirmé.** La phrase finale demande des partenaires, mais aucun lien Contact, mail ou bouton n’est présent dans le contenu (`projets-d-avenir.html:58–60`). | Élevé | Le parcours le plus important de cette page s’interrompt au moment de l’intention. | Ajouter « Échanger sur ce projet » vers Contact ou un email prérempli ; garder l’adresse visible comme alternative. |
| PRO-02 — Fiche du projet | **Amélioration.** Un seul paragraphe présente l’ambition ; pas de stade, porteur identifié, calendrier, besoins, prochaine étape ni documents. | Élevé | Un partenaire ne peut pas déterminer ce qui est attendu ni évaluer la maturité du projet. | Structurer : objectif, public, stade actuel, besoins techniques/financiers, prochaine étape, contact. Afficher « calendrier à définir » si c’est le cas plutôt qu’inventer une échéance. |
| PRO-03 — Promesses et terminologie | **Amélioration.** « Clarté exceptionnelle », « unique dans la Région » sur l’accueil et « observatoire cosmique » sans éléments justificatifs. | Moyen | Vocabulaire peu concret et promesses difficiles à apprécier. | Employer « observatoire astronomique » si cela correspond au projet, séparer potentiel et étude validée ; documenter les affirmations d’unicité avant publication. |
| PRO-04 — Métadonnées et intitulés | **Confirmé.** H1/navigation au singulier, title et description au pluriel. | Faible | Identité de page incohérente entre onglet, recherche et contenu. | Exemple : « Projet d’observatoire astronomique — Association Tagmout ». |

## 10. Nos commissions

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| COM-01 — États des accordéons | **Confirmé.** Boutons natifs mais sans `aria-expanded`/`aria-controls` ; panneaux réduits à `max-height:0`, sans gestion de leur exposition accessible. | Élevé | L’état ouvert/fermé et la relation au panneau ne sont pas annoncés ; le texte replié peut rester disponible aux lecteurs d’écran sans correspondre à l’état visuel. | Utiliser `details/summary` ou synchroniser attributs, identifiants et visibilité réelle ; conserver Enter/Espace natifs. |
| COM-02 — Redimensionnement | **Confirmé, effet à valider.** Hauteur ouverte calculée une fois en pixels ; pas de recalcul après rotation ou changement de police/taille de texte (`script.js:81`). | Moyen | Le texte peut être coupé après réduction de largeur ou agrandissement. | Préférer une hauteur automatique avec composant natif ; sinon observer les dimensions et recalculer. |
| COM-03 — Actions et état d’avancement | **Confirmé / amélioration.** « Création d’un site web » figure comme action alors que le site est consulté ; aucune action n’a de statut, date, responsable ou possibilité de contribution. | Moyen | Confusion entre feuille de route et travail réalisé ; promesse de participation peu concrète. | Marquer « Réalisé », « En cours », « À lancer » après validation ; préciser un contact ou un besoin. Exemple : « Site web : publié — enrichissement des contenus en cours » si confirmé. |
| COM-04 — Présentation et comparaison | **Amélioration.** H1 et H2 répètent « Nos commissions » ; ouverture d’une rubrique ferme toutes les autres ; intitulé Femme et Enfant sans action explicitement dédiée aux enfants. | Faible | Répétition, comparaison moins pratique et attente partiellement satisfaite. | Transformer le H2 en « Missions et actions », autoriser plusieurs ouvertures si utile et expliciter les actions destinées aux enfants ou ajuster le titre après accord. |

## 11. Contact & Partenariats

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| CON-01 — Choix du destinataire | **Amélioration.** Trois responsables et quatre emails, sans indication de routage ; l’adresse associative est placée dans la carte du président. | Moyen | Le visiteur hésite entre adresse personnelle et collective. | Mettre l’adresse générale en premier, puis « Partenariats », « Vie associative », « Questions financières » selon les responsabilités confirmées. |
| CON-02 — Contact sans application email | **Confirmé / amélioration.** Liens `mailto:` et `tel:` uniquement ; aucun formulaire. Ce n’est pas un formulaire cassé. | Moyen | Sur un poste sans application email configurée, le clic peut ne pas aider ; aucune indication sur la suite. | Prévoir « Copier l’adresse » et un objet proposé ; un petit formulaire est optionnel, à condition de gérer réellement réception, erreurs, spam et confidentialité. Ne pas ajouter de faux formulaire statique. |
| CON-03 — Localisation | **Confirmé.** Carte Google seule, sans `title`, adresse textuelle complète accessible dans le contenu courant ni lien d’itinéraire autonome (`contact.html:89`). | Moyen | Dépendance à l’iframe ; lecteurs d’écran et visiteurs dont la carte est bloquée disposent de peu d’informations exploitables. | `title="Localisation de Tagmout n’Aït Oumzil"`, adresse en texte validée et « Ouvrir l’itinéraire ». Vérifier les coordonnées avec l’association, sans les déclarer erronées ici. |
| CON-04 — Cartes de visite | **Confirmé / amélioration.** Six images se répètent après les coordonnées ; elles ont un effet de survol sans agrandissement/téléchargement. Les versions arabes ne sont pas transcrites en texte. | Moyen | Page longue ; petits caractères et QR difficiles à exploiter sur le téléphone qui affiche la carte. | Les rendre secondaires et repliables, offrir agrandissement/téléchargement et contact enregistrable ; garder l’information essentielle en HTML, éventuellement bilingue. |
| CON-05 — Téléphones et titres | **Confirmé.** Liens au bon format international mais affichage local irrégulier ; fonctions en H4 après H2. | Faible | Lecture moins homogène pour la diaspora et hiérarchie sémantique discontinue. | Afficher par exemple « +212 661 94 24 17 », garder les bons `tel:`, utiliser H3 pour les contacts. |

## 12. Performances, SEO et maintenance

| ID / zone | Problème et preuve | Priorité | Conséquence | Modification recommandée / exemple |
|---|---|---|---|---|
| TEC-01 — Images hors galerie | **Confirmé.** Aucune dimension HTML sur les images statiques ; seuls les six visuels de cartes utilisent lazy loading. Le CSS réserve certains ratios, mais pas systématiquement la hauteur des bannières/cartes. | Moyen | Risque de déplacements au chargement et de téléchargements précoces hors écran. | Renseigner dimensions intrinsèques, `srcset/sizes` et chargement différé sous la ligne de flottaison ; garder le visuel principal prioritaire. Mesurer le CLS avant de chiffrer un gain. |
| TEC-02 — En-tête et décor | **Confirmé / amélioration.** Logo d’environ 98 ko pour 48–88 px, fond de 322 ko ; parallaxe fixe et blur sur en-tête. | Moyen | Octets et travail graphique évitables, notamment sur appareils modestes. | Version de logo adaptée, variante mobile du fond, suppression de la parallaxe si elle n’aide pas le contenu ; mesurer fluidité/LCP sur appareil. |
| TEC-03 — Polices et styles | **Confirmé.** Deux familles externes avec plusieurs graisses ; styles inline nombreux ; lecture de géométrie de tous les `.scroll-reveal` à chaque scroll. | Faible | Coût de rendu et maintenance supérieure au besoin du site. | Limiter les graisses, étudier l’auto-hébergement, extraire les styles inline et remplacer la boucle de scroll par un observateur qui se désabonne après révélation. Ne pas annoncer de ralentissement mesuré sans profilage. |
| TEC-04 — Génération des albums | **Confirmé.** Dépendances Python non figées, réécriture des WebP à chaque exécution, dates de repli instables, parcours des seuls sous-dossiers de premier niveau. | Moyen | Régénération coûteuse, résultats variables et nouveaux dossiers profonds ignorés. | Documenter le flux dans un README, fixer les dépendances, vérifier le schéma, conserver des dates éditoriales et régénérer seulement les sources modifiées. |
| TEC-05 — Périmètre de publication | **Risque à vérifier sur l’hébergement.** Originaux volumineux, DOCX, ZIP, extractions TXT et dossiers de travail cohabitent avec le site ; aucun répertoire public distinct. | Moyen | Si tout le dépôt est servi, documents de travail et originaux deviennent téléchargeables, même sans lien. Aucune exposition en production n’est affirmée. | Construire un dossier de publication contenant uniquement HTML/CSS/JS et visuels nécessaires ; vérifier les fichiers réellement servis. Ne pas supprimer les originaux du travail. |
| SEO-01 — Métadonnées de partage | **Confirmé.** Pas de canonical, Open Graph ni carte sociale dans les pages examinées. | Moyen | Contrôle limité des aperçus partagés et de l’URL de référence si plusieurs formes sont accessibles. | Définir les URL canoniques à partir du domaine réel et une image/titre/description de partage propres aux pages importantes. Leur absence n’interdit pas l’indexation. |
| SEO-02 — Découverte et erreur 404 | **Confirmé localement, production inconnue.** Aucun sitemap.xml, robots.txt ou 404.html dans le projet. | Faible | Moins de maîtrise de la découverte et du parcours d’erreur ; l’hébergeur peut toutefois fournir certains comportements. | Ajouter sitemap et page 404 utile, tester les vrais codes HTTP ; créer robots.txt seulement avec règles voulues. L’absence de robots.txt ne bloque pas les robots. |
| SEO-03 — Albums et contenu indexable | **Confirmé.** Toutes les photos et légendes de galerie sont générées en JS ; aucun lien HTML dédié à un album. | Moyen | Les albums n’ont pas d’entrée stable à partager ou indexer ; robots sans rendu JS voient peu de contenu. | Générer des pages ou sections HTML d’albums avec résumés, légendes et liens réels, tout en gardant les interactions comme amélioration. |
| SEO-04 — Identité locale et documentaire | **Amélioration.** Noms de lieux variables (Tizirt/Tizirte), appellation complète de l’association surtout dans des images, absence de fiche textuelle centrale détaillée. | Moyen | Recherche locale et compréhension des partenaires moins cohérentes. | Valider une graphie de référence, conserver les variantes utiles explicitement, publier nom complet et localisation en texte ; envisager des données structurées uniquement à partir d’informations vérifiées. |
| SEO-05 — Signes de finition | **Confirmé.** Aucun favicon déclaré ; titres parfois génériques et capitalisation irrégulière. | Faible | Repérage des onglets et identité des aperçus moins soignés. | Ajouter un favicon lisible, titres descriptifs et une règle éditoriale homogène. Ne pas promettre de gain de classement automatique. |

## 13. Comparaison transversale et cohérence éditoriale

| Éléments comparés | Constat | Recommandation |
|---|---|---|
| Navigation des sept pages | HTML identique : point positif. Page active seulement visuelle. | Conserver les libellés partagés, ajouter état accessible et génération commune. |
| Accueil / Projet / métadonnées | Pluriel « projets » contre page unique au singulier. | Choisir une promesse identique dans menu, CTA, H1 et title. |
| Accueil / Réalisations | Les réservoirs 750 et 100 m³ et les trois puits sont cohérents ; 34 foyers et 20+ familles manquent de contexte temporel détaillé. | Relier les chiffres à des fiches datées, sans prétendre que les nombres sont faux. |
| Réalisations / Galerie | Beaucoup de texte sans accès à l’album correspondant ; des thèmes utilisent des images génériques ou une bannière. | Organiser chaque preuve autour d’un projet et d’un album lié. |
| Accueil / Commissions | SVG sobres et cartes sur l’accueil, accordéons sur la page dédiée ; variations « Femme et enfant » / « La Femme & l’Enfant ». | Conserver des formats adaptés mais uniformiser titres, icônes et ancrages. |
| Présentation / Contact | Le bureau est annoncé mais ses personnes ne sont détaillées que partiellement sur Contact. | Une présentation de gouvernance et une page Contact complémentaires, avec liens réciproques. |
| Contact / menus | « Contact & Partenariat », « Contact & Partenariats », « Contact & Soutien ». | Fixer un nom de page ; les CTA peuvent varier s’ils décrivent clairement une action. |
| Français / arabe | Carte et nom d’album en arabe, interface française ; isolation bidirectionnelle partielle. | Définir le niveau bilingue voulu : au minimum libellés traduits, langue et direction correctes. Une traduction intégrale reste un chantier distinct. |
| CSS entre pages | Même code chargé avec versions de cache différentes. | Unifier le mécanisme de versionnement. |
| Microcopie globale | Mélange de capitales institutionnelles, esperluettes et « et », formulations longues, « Nos impacts » inhabituel. | Charte courte : casse de phrase, « et » dans le texte courant, « Notre impact en chiffres », noms propres validés. Respecter les préférences éditoriales déjà demandées avant harmonisation. |

## 14. Matrice des interactions et cas limites

Cette matrice décrit le niveau de vérification réel, sans simuler une recette manuelle.

| Fonction | Analyse effectuée | Résultat / contrôle restant |
|---|---|---|
| Sept liens du menu et logo | Chemins locaux et cohérence HTML | Valides ; clics et réponses HTTP publics non testés |
| Menu mobile | Lecture des handlers et media queries | Bouton/Échap/fermeture par lien prévus ; tester 320–1024 px, rotation, zoom, focus |
| CTA de l’accueil | Destinations locales contrôlées | Fichiers présents ; granularité des destinations à améliorer |
| Photos d’aperçu | Vérification du déclencheur et absence de modal sur l’accueil | Absence d’action confirmée malgré curseur de clic |
| Compteurs | Lecture du code et des valeurs initiales | Dépendants du JS ; pas de valeur statique de repli |
| Cinq accordéons | Ouverture, fermeture, fermeture des autres, hauteur | États accessibles manquants ; redimensionnement à tester |
| Filtres de thèmes et sous-projets | Reconstruction et sélection des données | Sélections et aria-pressed prévus ; toutes les catégories actuelles contiennent des images |
| Zéro photo | Branche du code inspectée | Message prévu ; manifeste absent indistinguable d’un inventaire vide |
| Une photo | Branche inspectée | Flèches et miniatures masquées, autoplay non lancé ; cohérent |
| Plusieurs photos | Modulo et sélection inspectés | Bouclage prévu ; pas de pause utilisateur |
| Miniatures | Source, index, aria-current et défilement inspectés | Réutilisation des images lourdes confirmée ; comportement de chargement à mesurer |
| Visionneuse précédente/suivante | Fonction réelle exécutée avec objets simulés | Source vide reproduite sur photo non initialisée ; pas un test navigateur |
| Échap / flèches de visionneuse | Handlers inspectés | Prévu dans le code ; focus et sémantique incomplets |
| Swipe | Seuil horizontal, annulation, écouteurs passifs inspectés | Test iOS/Android non effectué ; possible clic après geste à vérifier |
| Emails / appels | Attributs contrôlés | 4 mailto et 4 tel présents ; aucun email envoyé ni appel passé |
| Carte Google | Iframe et URL inspectées | Pas de title ni alternative textuelle suffisante ; chargement réel et destination à valider |
| Formulaires | Inventaire HTML et JS | Aucun formulaire : validation, erreurs et réception non applicables |
| Rechargement / partage d’album | Recherche de routage et d’état URL | Aucun mécanisme de restauration |
| JS désactivé / échec de script | Analyse de l’état initial HTML/CSS | Contenu masqué, galerie absente et accordéons fermés ; prévoir dégradation utile |
| Erreur d’image / données | Analyse des gestionnaires | Pas de reprise spécifique ; à ajouter et tester avec une ressource volontairement indisponible |
| Impression / mouvement réduit | Recherche des media queries | Aucun traitement dédié |

## 15. Plan de validation navigateur restant

Sur l’URL publique confirmée, parcourir les sept pages dans les conditions suivantes :

1. Largeurs 320, 360, 390, 768, 900, 901, 1024 et 1440 px ; orientations portrait/paysage ; zoom 200 % puis contrôle de reflow à 400 %.
2. Vérifier absence de coupure, espace utile sous l’en-tête, emails longs, cartes de visite, bandeau arabe, photos verticales et ordre du contenu.
3. Parcourir au clavier de l’arrivée à la sortie : menu, CTA, filtres, accordéons, miniatures, ouverture/fermeture de visionneuse ; vérifier focus visible et retour au déclencheur.
4. Tester avec lecteur d’écran le plan de titres, les états des boutons, le changement d’album et la visionneuse.
5. Tester immédiatement la visionneuse vers la dernière photo, puis plusieurs suivantes rapides ; pause et interactions pendant l’autoplay ; changement d’album et retour arrière.
6. Tester réseau ralenti, cache froid/chaud, image manquante, manifeste indisponible, police externe bloquée et JS désactivé.
7. Mesurer octets transférés, nombre de requêtes, LCP, CLS et réactivité ; distinguer médiane de laboratoire et données réelles de visiteurs si disponibles.
8. Vérifier HTTPS, redirections, page 404 et codes HTTP, métadonnées sociales, URL canoniques, accessibilité des documents de travail et indexabilité de la version déployée.
9. Contrôler visuellement chaque photo avant publication, droits d’usage et exactitude des légendes avec l’association ; les 144 contenus photographiques n’ont pas été individuellement qualifiés par cet audit.

## 16. Synthèse et ordre d’intervention

### Problèmes critiques et priorités immédiates

Aucun incident **critique** confirmé. Ne pas confondre ce résultat avec une certification de la production, qui n’a pas été parcourue.

Les priorités **élevées** sont :

1. Corriger les URL de photos dans la visionneuse (GAL-01).
2. Rendre l’ouverture, la fermeture et la modalité de la visionneuse accessibles (GAL-02/03).
3. Donner un contrôle de pause et synchroniser les deux modes d’affichage (GAL-04).
4. Corriger la grille sur petit écran et vérifier les coordonnées longues (UI-01/03).
5. Afficher le contenu de base même si le JavaScript échoue (GLO-01).
6. Corriger la sémantique des accordéons (COM-01).
7. Générer de vraies miniatures (GAL-05).
8. Rendre le partenariat actionnable et documenter les projets/réalisations (PRO-01/02, REA-01).

### Améliorations rapides

- Ajouter le CTA de contact sur le projet d’observatoire.
- Relier les aperçus de l’accueil à la galerie et ajouter un compteur de photo.
- Ajouter main, lien d’évitement, aria-current et title à la carte.
- Harmoniser singulier/pluriel, fonctions de titres et versions des ressources.
- Réduire les paddings mobiles, borner les minima des grilles et corriger la transition CSS invalide.
- Assombrir les petits textes terracotta, ajouter une préférence de mouvement réduit.
- Rendre les valeurs des compteurs correctes dans le HTML avant animation.
- Remplacer les faux contenus d’albums par des photos pertinentes ou une indication explicite.

### Chantiers plus importants

- **Galerie :** modèle unique de données partagé entre diaporama et visionneuse, miniatures dédiées, légendes éditoriales, URL partageables et pages d’albums.
- **Parcours de soutien :** fiches de projets avec stade, résultats, besoins et contacts ; relation directe entre réalisations et preuves photographiques.
- **Système de présentation :** consolidation du CSS responsive et des composants partagés, sans nécessité de changer entièrement l’identité visuelle.
- **Contenu :** validation des indicateurs, gouvernance, dates et nomenclature ; stratégie bilingue adaptée au public.
- **Publication :** dossier public séparé, génération reproductible et petite recette de non-régression avant mise en ligne.

### Recommandation générale

La base du site est exploitable : navigation homogène, identité visuelle définie, contenu associatif substantiel et fonds photographique riche. Le principal enjeu est de transformer ce contenu en parcours fiables et explicites. Commencer par la galerie et l’accès mobile, puis relier les preuves, les besoins et la prise de contact. Une refonte totale n’est pas nécessaire pour corriger les principaux problèmes ; une recette réelle dans le navigateur reste indispensable avant de considérer le site validé.
