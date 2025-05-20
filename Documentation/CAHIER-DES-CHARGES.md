---
type: cahier des charges
projet: catalogue de service IT
auteur: BERGE_ALEXANDRE
created: 2025-03-12
updated: 2025-04-18
version: 2
---
## 1. Préambule et Contexte

### 1.1. Contexte Actuel
Actuellement, le catalogue des services informatiques de la Direction Régionale du Service Médical (DRSM) d'Île-de-France existe sous forme de document texte structuré. Bien que complet, ce format présente des limitations en termes d'accessibilité, de facilité de consultation, de mise à jour dynamique et d'attractivité pour les collaborateurs.

### 1.2. Besoin Exprimé
Le Responsable Informatique de la DRSM IDF souhaite valoriser ce catalogue en le rendant accessible via une plateforme web dédiée. Cette plateforme doit être **intuitive, attractive, dynamique** et refléter un **haut niveau d'exigence professionnelle** en termes de design web et d'ergonomie. L'objectif est de fournir aux collaborateurs un outil de référence unique, clair et facile à utiliser pour comprendre et accéder aux services IT.

### 1.3. Objectifs du Projet
*   **Centraliser l'Information :** Offrir un point d'accès unique et officiel à l'ensemble des services IT et procédures associées.
*   **Améliorer l'Accessibilité :** Rendre le catalogue consultable facilement depuis n'importe quel poste de travail connecté au réseau (voire appareils mobiles).
*   **Faciliter la Compréhension :** Présenter l'information de manière structurée, visuelle (logigrammes, icônes) et facilement digestible.
*   **Augmenter l'Autonomie Utilisateur :** Permettre aux collaborateurs de trouver rapidement les informations dont ils ont besoin (modalités d'accès, contacts, procédures simples), réduisant potentiellement les sollicitations de premier niveau.
*   **Valoriser l'Image du Service IT :** Présenter une image moderne, organisée et professionnelle du service informatique.
*   **Faciliter la Maintenance :** Mettre en place une structure permettant des mises à jour de contenu plus aisées que sur un document texte.

---

## 2. Périmètre du Projet

### 2.1. Fonctionnalités Incluses (Dans le Périmètre)
*   Affichage d'une page d'accueil présentant l'ensemble des services.
*   Consultation détaillée de chacun des 12 services IT identifiés.
*   Présentation structurée par onglets du contenu de chaque service :
    *   Description
    *   Bénéficiaires
    *   Modalités d'accès / Demandes
    *   Niveaux de Service (SLA indicatifs)
    *   Fonctionnement (Processus visualisés)
    *   Contacts & Support
    *   Procédures détaillées (Fiches Activités)
*   Affichage des Fiches Activités associées à chaque service via un système d'accordéon.
*   Visualisation graphique (logigrammes verticaux, cartes d'activité, steppers) pour les processus de fonctionnement et les fiches activités pertinentes.
*   Navigation principale claire (Header, Footer, Fil d'Ariane).
*   Fonctionnalité de recherche basique (au minimum sur les titres, idéalement sur le contenu).
*   Design responsive pour consultation sur PC et tablette principalement.
*   Respect des principes d'accessibilité web (WCAG 2.1 AA visé).

### 2.2. Fonctionnalités Exclues (Hors Périmètre - Version 1.0)
*   **Intégration fonctionnelle** avec l'outil de ticketing S@Mlocal (au-delà de simples liens hypertextes). La création de ticket se fera toujours via le portail S@Mlocal lui-même.
*   **Authentification des utilisateurs** pour un affichage personnalisé du catalogue.
*   Fonctionnalités de **demande de service en ligne** directement via le catalogue.
*   **Système de gestion de contenu (CMS)** pour la mise à jour des informations (les mises à jour se font via modification directe des fichiers HTML pour cette version).
*   **Statistiques d'utilisation** avancées (au-delà des logs serveur web basiques).
*   **Système de feedback/notation** des services par les utilisateurs.
*   **Versionnement** avancé ou historique des modifications du catalogue visible par l'utilisateur final.

---

## 3. Utilisateurs Cibles

*   **Utilisateurs Primaires :** L'ensemble des **collaborateurs de la DRSM Île-de-France** (Praticiens-conseils, personnel administratif, managers, fonctions support, nouveaux arrivants...). Le niveau de connaissance technique est hétérogène, l'interface doit donc être **claire pour un public potentiellement néophyte**.
*   **Utilisateurs Secondaires :**
    *   **Membres du Service Informatique :** Pour référence rapide, support aux utilisateurs, maintenance du contenu.
    *   **Service RH / Managers :** Pour comprendre les processus liés à l'IT lors de l'onboarding/offboarding.

---

## 4. Exigences Fonctionnelles Détaillées

### 4.1. Page d'Accueil (`index.html`)
*   **EF-01 :** Afficher un en-tête (Header) constant contenant le logo DRSM IDF et la barre de recherche.
*   **EF-02 :** Afficher une section "Hero" avec le titre principal "Catalogue des Services Informatique", le sous-titre "DRSM Île-de-France" et un bouton d'action principal pointant vers les modalités de contact du Service 1 (ou S@Mlocal).
*   **EF-03 :** Présenter une grille (`.card-grid`) affichant une carte (`.card`) pour chacun des 12 services IT.
*   **EF-04 :** Chaque carte de service doit afficher : une icône représentative, le numéro et le titre du service, une courte description (1 phrase).
*   **EF-05 :** Chaque carte de service doit être un lien hypertexte pointant vers la page de détail du service correspondant (ex: `services/service-X.html`).
*   **EF-06 :** Afficher un pied de page (Footer) constant avec le copyright et les liens utiles définis (Toutenclic).
*   **EF-07 :** Mettre en œuvre une animation d'entrée subtile (`fade-in`) pour les sections principales.

### 4.2. Page de Détail d'un Service (`services/service-X.html`)
*   **EF-08 :** Chaque service doit avoir sa propre page HTML accessible via une URL distincte.
*   **EF-09 :** Afficher l'en-tête et le pied de page communs à toutes les pages.
*   **EF-10 :** Afficher un fil d'Ariane indiquant la position actuelle : `Accueil > Service X : Nom du Service`. Le lien "Accueil" doit pointer vers `index.html`.
*   **EF-11 :** Afficher le titre complet du service (Numéro + Nom) comme titre principal (`<h1>`).
*   **EF-12 :** Afficher un court résumé du service sous le titre principal.
*   **EF-13 :** Implémenter une interface à **onglets (tabs)** fonctionnelle et accessible pour organiser le contenu détaillé du service.
*   **EF-14 :** Les onglets doivent être : "Description", "Bénéficiaires", "Accès & Demandes" (ou "Utilisation & Incidents" si plus pertinent pour le service), "Niveaux de Service", "Fonctionnement", "Contacts", "Procédures". L'onglet "Description" doit être actif par défaut au chargement.
*   **EF-15 :** Le contenu correspondant à l'onglet actif doit être affiché, les autres contenus doivent être masqués. Le changement d'onglet doit être fluide (via JS).
*   **EF-16 :** Le contenu de chaque onglet doit être correctement formaté (paragraphes, listes `<ul>/<ol>`, tableaux `<table>`, mise en évidence `<strong>`, liens `<a>`).
*   **EF-17 :** Le tableau des SLA (onglet "Niveaux de Service") doit être lisible et présenter clairement les indicateurs, objectifs et précisions. Une note sur le caractère indicatif des SLA doit être visible.
*   **EF-18 :** L'onglet "Fonctionnement" doit présenter les processus sous forme d'**accordéon**, où chaque item correspond à un processus majeur (ex: Gestion des Incidents, Gestion des Demandes).
*   **EF-19 :** Le contenu de chaque item d'accordéon de processus doit utiliser la structure de **logigramme vertical** (`.process-flow`) définie, incluant étapes numérotées, icônes, titres, descriptions, et visualisations claires des décisions/branches.
*   **EF-20 :** L'onglet "Procédures" doit présenter les Fiches Activités associées sous forme d'**accordéon**.
*   **EF-21 :** Chaque item d'accordéon de Fiche Activité doit afficher le numéro et le titre de la fiche. Le contenu détaillé (Objectif, Déclencheurs, Processus, Outils, Points Clés...) doit s'afficher au dépliage.
*   **EF-22 :** Pour les Fiches Activités décrivant un processus séquentiel, la structure **logigramme vertical** (`.process-flow`) doit être utilisée dans l'accordéon.
*   **EF-23 :** Pour les Fiches Activités décrivant des activités moins séquentielles (ex: Suivi/Reporting), une présentation visuelle alternative (ex: `.activity-cards-container`, `.stepper`, liste structurée avec icônes) doit être utilisée.

### 4.3. Recherche (Fonctionnalité Prévue/Basique)
*   **EF-24 :** Une barre de recherche doit être présente dans l'en-tête de toutes les pages.
*   **EF-25 :** La recherche doit permettre à l'utilisateur de trouver des services ou des procédures en saisissant des mots-clés.
*   **EF-26 (Minimum V1.0) :** La recherche doit au minimum filtrer les titres et descriptions des services affichés sur la page d'accueil (`index.html`).
*   **EF-27 (Cible) :** La recherche devrait idéalement interroger un index couvrant les titres, descriptions des services, et le contenu (notamment titres et objectifs) des Fiches Activités, et présenter les résultats de manière pertinente.

---

## 5. Exigences Non Fonctionnelles

### 5.1. Performance
*   **ENF-01 :** Le temps de chargement initial de la page d'accueil et des pages services doit être rapide sur une connexion réseau d'entreprise standard.
*   **ENF-02 :** Les interactions utilisateur (changement d'onglet, ouverture/fermeture accordéon) doivent être fluides et sans latence perceptible.
*   **ENF-03 :** Les ressources (images, CSS, JS) doivent être optimisées (compression, minification si possible en production).
*   **ENF-04 :** L'utilisation de `font-display: swap` pour les polices web est requise.

### 5.2. Accessibilité (A11y)
*   **ENF-05 :** Le site doit viser la conformité avec les **WCAG 2.1 niveau AA**.
*   **ENF-06 :** Le HTML doit être sémantique et bien structuré.
*   **ENF-07 :** Tous les contenus et fonctionnalités doivent être accessibles via la **navigation au clavier** uniquement.
*   **ENF-08 :** Un **état de focus visible** clair et distinct doit être présent sur tous les éléments interactifs.
*   **ENF-09 :** Les **contrastes de couleurs** entre le texte et l'arrière-plan doivent être suffisants (ratio minimum 4.5:1 pour texte normal, 3:1 pour grand texte).
*   **ENF-10 :** Les images porteuses d'information doivent avoir des alternatives textuelles (`alt`) pertinentes. Les images décoratives doivent avoir un `alt` vide ou être intégrées via CSS. Les icônes utilisées avec du texte doivent avoir `aria-hidden="true"`.
*   **ENF-11 :** Les composants interactifs (onglets, accordéons) doivent utiliser les **attributs ARIA** appropriés (`role`, `aria-selected`, `aria-controls`, `aria-expanded`, etc.) pour être compréhensibles par les technologies d'assistance.

### 5.3. Responsive Design
*   **ENF-12 :** L'interface doit s'adapter de manière fluide et lisible aux différentes tailles d'écran (minimum : Desktop large, Desktop standard, Tablette portrait/paysage, Mobile paysage/portrait).
*   **ENF-13 :** Aucun contenu ne doit être tronqué ou masqué sur les petits écrans. Le défilement horizontal doit être évité.
*   **ENF-14 :** La navigation doit rester aisée sur écrans tactiles (zones cliquables suffisantes).

### 5.4. Maintenabilité
*   **ENF-15 :** Le code source (HTML, CSS, JS) doit être propre, lisible, indenté et commenté aux endroits stratégiques.
*   **ENF-16 :** Le CSS doit utiliser des variables pour les éléments récurrents (couleurs, polices, espacements) et être organisé logiquement.
*   **ENF-17 :** Le JavaScript doit être modulaire et éviter les manipulations globales excessives.
*   **ENF-18 :** La documentation fournie (README, Guides...) doit être claire et maintenue à jour.

### 5.5. Sécurité (Front-end)
*   **ENF-19 :** Aucune information sensible (identifiants, clés API...) ne doit être stockée en dur dans le code front-end.
*   **ENF-20 :** Les liens externes doivent utiliser `rel="noopener noreferrer"`.
*   **ENF-21 :** (Si recherche serveur) Les entrées utilisateur doivent être considérées comme non fiables et validées/échappées côté serveur (non applicable si recherche 100% côté client).

### 5.6. Compatibilité Navigateurs
*   **ENF-22 :** Le site doit fonctionner correctement sur les deux dernières versions majeures des navigateurs suivants : Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari.

---

## 6. Exigences de Contenu

*   **EC-01 :** Le contenu textuel intégral des **12 services** et de leurs **fiches activités associées**, tel que fourni par le Responsable Informatique, doit être intégré.
*   **EC-02 :** La **validation finale du contenu intégré** relève de la responsabilité du Responsable Informatique ou des experts métier désignés.
*   **EC-03 :** Les **icônes Material Symbols** utilisées doivent être sémantiquement pertinentes pour chaque service/étape/action.
*   **EC-04 :** Le **logo officiel** de la DRSM IDF / Assurance Maladie doit être fourni et intégré.
*   **EC-05 :** Les **URL exactes** pour les liens externes (S@Mlocal, Toutenclic...) doivent être fournies et intégrées.
*   **EC-06 :** Les **numéros de téléphone** et adresses email de contact doivent être exacts.

---

## 7. Exigences Techniques

*   **ET-01 :** Architecture de **site statique** (fichiers HTML, CSS, JS).
*   **ET-02 :** Utilisation de **HTML5**, **CSS3** (variables, Flexbox, Grid), et **JavaScript ES6+** (Vanilla JS a priori suffisant).
*   **ET-03 :** Utilisation de **Google Fonts** pour la police "Inter".
*   **ET-04 :** Utilisation de **Material Symbols** pour les icônes.
*   **ET-05 :** Le code doit être versionné via **Git** (recommandé).
*   **ET-06 :** L'hébergement doit se faire sur un **serveur web standard** capable de servir des fichiers statiques.

---

## 8. Exigences de Design et d'Ergonomie (UX/UI)

*   **EDE-01 :** Intégrer subtilement l'**identité visuelle** DRSM IDF / Assurance Maladie (logo, couleurs primaires/secondaires issues de la charte).
*   **EDE-02 :** Adopter un **design professionnel, moderne, épuré et "sexy"** (au sens d'élégant, fluide et raffiné), en utilisant l'espace blanc de manière efficace.
*   **EDE-03 :** Assurer une **hiérarchie visuelle claire** de l'information (tailles et graisses de police, couleurs, espacements).
*   **EDE-04 :** Utiliser une **iconographie cohérente** et significative.
*   **EDE-05 :** Proposer une **navigation intuitive** (Header clair, Fil d'Ariane, Onglets logiques, Accordéons pour le détail).
*   **EDE-06 :** Optimiser la **lisibilité** (contraste, taille de police, hauteur de ligne).
*   **EDE-07 :** Réduire la charge cognitive via la **segmentation de l'information** (onglets, accordéons).
*   **EDE-08 :** Utiliser des **micro-interactions et transitions CSS subtiles** pour améliorer la fluidité et le feedback utilisateur (états hover/focus, ouverture accordéon...).

---

## 9. Livrables Attendus

1.  Code source complet et fonctionnel du catalogue en ligne (HTML, CSS, JS).
2.  Fichiers d'assets (images/logo optimisés).
3.  Documentation projet :
    *   `README.md`
    *   `CONTENT_UPDATE_GUIDE.md`
    *   `STYLE_GUIDE.md`
    *   `DEPLOYMENT.md`
    *   `CHANGELOG.md` (initialisé)
4.  Site web déployé sur l'environnement cible défini.

---

## 10. Contraintes

*   **Budget / Délai :** 1 mois
*   **Ressources :**
	* Web Développement : BERGE ALEXANDRE
	* Hébergement : pôle expert
*   **Technologie :** Doit rester un site statique pour un hébergement simple sur l'infrastructure existante. Pas de base de données ni de back-end complexe pour la V1.0.
*   **Contenu :** Le projet dépend de la fourniture et de la validation du contenu par les référents IT/métier.
*   **Maintenance :** La mise à jour du contenu se fera manuellement via édition des fichiers HTML dans cette version.

---

## 11. Évolutions Possibles (Post V1.0)

*   Implémentation d'une recherche full-text avancée (ex: Lunr.js ou solution serveur).
*   Intégration avec un mini-CMS ou utilisation de Markdown/JSON pour faciliter la gestion du contenu.
*   Ajout d'une section "Actualités IT".
*   Mécanisme de feedback utilisateur simple.
*   Suivi statistique de la consultation.
*   (Plus complexe) Authentification pour personnalisation légère.

---

## 12. Validation et Recette

*   La validation fonctionnelle sera effectuée par le Responsable Informatique et potentiellement un panel d'utilisateurs pilotes, en se basant sur les exigences définies dans ce document.
*   Une recette technique (qualité du code, respect des standards, accessibilité, performance) sera réalisée par [Référent technique si différent du développeur].
*   Un Procès-Verbal (PV) de recette sera signé avant la mise en production finale.