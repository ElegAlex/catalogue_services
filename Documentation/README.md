---
type: readme
projet: catalogue de service IT
created: 2025-04-18
author: BERGE_ALEXANDRE
updated: 
version: 1
---
# Catalogue des Services Informatique - DRSM Île-de-France 💻

## 📄 Description

Ce projet contient le code source front-end pour le catalogue des services informatiques en ligne de la Direction Régionale du Service Médical (DRSM) d'Île-de-France. L'objectif est de transformer le catalogue de services existant (basé sur un document) en une plateforme web **moderne, intuitive, accessible et dynamique**, offrant une réelle valeur ajoutée aux collaborateurs de la DRSM IDF.

Il vise à :
*   Présenter de manière claire et structurée l'ensemble des services IT proposés.
*   Faciliter l'accès aux informations clés : descriptions, bénéficiaires, modalités d'accès, SLA indicatifs, processus.
*   Intégrer les procédures détaillées (fiches activités) de manière contextuelle.
*   Offrir une expérience utilisateur agréable et professionnelle, reflétant la qualité des services IT.
*   Être une référence unique et facile à maintenir pour le catalogue de services.

## ✨ Fonctionnalités Clés

*   **Landing Page d'Accueil :** Présentation globale des services sous forme de cartes cliquables et accès rapide au support.
*   **Pages de Détail par Service :** Structure organisée par onglets pour une consultation aisée (Description, Accès, SLA, Fonctionnement, Contacts, Procédures).
*   **Intégration des Fiches Activités :** Affichage des procédures détaillées via un système d'accordéon directement dans la page du service concerné.
*   **Visualisation des Processus :** Représentation graphique (logigrammes simplifiés) des processus de fonctionnement pour une meilleure compréhension.
*   **Design Professionnel et Moderne :** Interface épurée, "sexy" professionnellement, utilisant une palette de couleurs cohérente et des icônes claires.
*   **Responsive Design :** Adaptation de l'affichage pour une consultation optimale sur différents appareils (PC, tablette).
*   **Accessibilité :** Conception visant le respect des bonnes pratiques et des standards (WCAG) pour une utilisation par tous.
*   **Recherche (Prévue) :** Fonctionnalité de recherche pour trouver rapidement un service ou une procédure (implémentation future ou basique).
*   **Code Maintenable :** Utilisation de HTML sémantique, CSS moderne (variables, Flexbox/Grid) et JavaScript léger.

## 📂 Structure du Projet

```
catalogue-it-drsm/
│
├── index.html             # Landing Page / Page d'accueil
│
├── services/              # Dossier pour les pages de détail des services
│   ├── service-1.html     # Page détaillée du Service 1
│   ├── service-2.html     # Page détaillée du Service 2
│   ├── ...                # ... autres services ...
│   └── service-12.html    # Page détaillée du Service 12
│
├── css/                   # Dossier pour les feuilles de style
│   └── style.css          # Feuille de style principale
│
├── js/                    # Dossier pour les fichiers JavaScript
│   └── script.js          # Script principal (interactions)
│
├── assets/                # Dossier pour les ressources statiques
│   ├── images/            # Dossier pour les images
│   │   └── logo-drsm.png  # Logo
│   │   └── ...
│   ├── fonts/             # (Optionnel) Polices auto-hébergées
│   └── icons/             # (Optionnel) Icônes SVG
│
├── service-template.html  # Modèle HTML pour créer de nouvelles pages service
│
└── README.md              # Ce fichier
```

## 🛠️ Technologies Utilisées

*   **HTML5 :** Structure sémantique du contenu.
*   **CSS3 :** Mise en forme et design responsive.
    *   Variables CSS (custom properties) pour la thématisation.
    *   Flexbox et Grid Layout pour la mise en page.
    *   Media Queries pour le design adaptatif.
    *   Transitions et animations CSS subtiles.
*   **JavaScript (ES6+) :** Interactivité côté client.
    *   Manipulation du DOM (onglets, accordéons).
    *   Intersection Observer pour les animations d'entrée.
    *   Gestionnaires d'événements.
*   **Google Fonts :** Police "Inter".
*   **Material Symbols (Google) :** Police d'icônes.

## 🚀 Démarrage Rapide (Visualisation Locale)

Ce projet est constitué de fichiers statiques HTML, CSS et JavaScript. Pour le visualiser en local :

1.  Clonez ou téléchargez le dépôt/dossier du projet sur votre machine.
2.  Ouvrez le fichier `index.html` directement dans votre navigateur web.
3.  Naviguez entre la page d'accueil et les pages de service via les liens des cartes.

*Note : Pour certaines fonctionnalités avancées (comme un routage SPA plus complexe avec l'API History ou des appels Fetch pour charger du contenu), il pourrait être nécessaire d'utiliser un serveur web local simple (ex: Live Server pour VS Code, `python -m http.server`, etc.) pour éviter les restrictions liées au protocole `file:///`.*

## ✍️ Gestion du Contenu & Maintenance

La mise à jour du contenu du catalogue se fait directement en éditant les fichiers HTML.

1.  **Ajouter un Nouveau Service :**
    *   Copier le fichier `service-template.html`.
    *   Renommer la copie en `service-N.html` (où N est le numéro du nouveau service) et placez-le dans le dossier `services/`.
    *   Éditer le nouveau fichier `service-N.html` :
        *   Mettre à jour le `<title>` et le fil d'Ariane.
        *   Remplacer les `[placeholders]` dans les sections H1, P.summary, et dans chaque panneau d'onglet (`panel-description`, `panel-beneficiaires`, etc.) avec le contenu réel du nouveau service.
        *   Remplir l'accordéon dans `panel-activities` avec les Fiches Activités correspondantes (en dupliquant/adaptant les `accordion-item`). Utiliser la structure `.process-flow` si pertinent.
    *   Éditer `index.html` pour ajouter une nouvelle carte pointant vers `services/service-N.html`.

2.  **Modifier un Service Existant :**
    *   Ouvrir le fichier `services/service-N.html` correspondant.
    *   Modifier directement le contenu textuel, les tableaux, les logigrammes ou les fiches activités dans l'accordéon.

3.  **Modifier les Styles ou les Scripts :**
    *   Les styles globaux sont dans `css/style.css`.
    *   Les scripts d'interaction sont dans `js/script.js`.

*(Piste d'amélioration future : Envisager un système de gestion de contenu (CMS) simplifié ou l'utilisation de fichiers Markdown/JSON pour séparer le contenu de la structure HTML si les mises à jour deviennent trop fréquentes ou complexes).*

## 🤝 Contribution

Ce projet étant interne à la DRSM IDF, les contributions se font en coordination avec le responsable informatique. Si vous avez des suggestions d'amélioration ou souhaitez corriger un bug :

1.  Contactez BERGE Alexandre.
2.  Discutez des modifications proposées.
3.  Si validé, vous pourrez procéder aux modifications du code.

## 🚀 Déploiement

Il s'agit d'un site web statique. Le déploiement consiste à copier l'ensemble des fichiers et dossiers (HTML, CSS, JS, assets) sur un serveur web configuré pour servir des fichiers statiques.
Assurez-vous que le serveur web est correctement configuré pour les types MIME (`.css`, `.js`, etc.) et gère correctement les chemins relatifs.

## 📞 Contact

Pour toute question ou problème concernant ce catalogue, veuillez contacter le **Pôle Support IT** via **S@Mlocal** ou les canaux définis dans le **Service 1**.
Pour des questions relatives au développement ou à la maintenance de cette application web, contactez : BERGE Alexandre.
