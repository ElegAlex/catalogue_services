---
type: CHANGELOG
projet: catalogue de service IT
author: BERGE_ALEXANDRE
created: 2025-04-18
version: 1.1.0 # Mise à jour de la version
updated: 2025-04-24
---
# 📓 Journal des Modifications - Catalogue Services IT DRSM IDF

Le format de ce journal est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère à la [Gestion Sémantique de Version](https://semver.org/lang/fr/).

## [Unreleased] - Prochaines Modifications

### Added (Ajouté)
*   [Fonctionnalité à venir, ex: Implémentation de la recherche avancée]
*   [Ajout du contenu pour le Service X]

### Changed (Modifié)
*   [Modification prévue, ex: Mise à jour de la procédure Y dans le Service Z]

### Fixed (Corrigé)
*   [Correction de bug à venir]

---

## [1.1.0] - 2025-04-24 - Intégration Guide S@Mlocal et Améliorations Support N1

> Intégration des guides d'utilisation S@Mlocal, ajout de procédures sur la prise de contrôle et la communication, et amélioration des processus N1.

### Added (Ajouté)
*   **Service 1 (Assistance & Support IT) :**
    *   Nouvelle Fiche Activité 1.9 : Procédure de Prise de Contrôle à Distance Sécurisée (avec logigramme).
    *   Nouvelle Fiche Activité 1.10 : Bonnes Pratiques de Communication et d'Interaction Support Utilisateur (avec visualisation par liste d'icônes).
    *   Nouvelle Fiche Activité 1.11 : Choisir la Bonne Catégorie de Ticket (S@Mlocal) (intégrant le lexique via accordéon imbriqué).
    *   Nouvelle Fiche Activité 1.12 : Remplir Efficacement une Demande/Incident (S@Mlocal) (avec visualisation par liste d'icônes).
    *   Nouvelle Fiche Activité 1.13 : Suivre ou Relancer un Ticket Existant (S@Mlocal) (avec logigramme).
*   **CSS (`style.css`) :**
    *   Ajout des styles `.good-practices-list` et `.practice-icon` pour la Fiche Activité 1.10.
    *   Ajustements mineurs pour l'accordéon imbriqué de la Fiche Activité 1.11 si nécessaire (principalement géré par JS).

### Changed (Modifié)
*   **Service 1 (Assistance & Support IT) :**
    *   Modification Fiche Activité 1.1 (Réception) : Accent mis sur la collecte systématique d'un numéro de téléphone de contact direct.
    *   Modification Fiche Activité 1.8 (Clôture) : Renforcement de la procédure de validation explicite et complète par l'utilisateur avant clôture, et justification de la clôture dans le ticket.
    *   Modification Fiche Service 1 (Accès) : Ajout d'une référence aux nouvelles Fiches Activités 1.11, 1.12, 1.13 pour l'utilisation de S@Mlocal.
    *   Modification Fiche Service 1 (Fonctionnement) : Ajout d'une mention sur l'importance de la catégorisation pour le tri/priorisation N1.
    *   Modification Fiches Activités (1.2, 1.3, 1.4, 1.5, 1.6) : Ajout de références à la Fiche 1.9 (Prise Contrôle) et 1.10 (Bonnes Pratiques) lorsque pertinent.
*   **Service 3 (Messagerie & Outils Collaboratifs) :**
    *   Modification Fiche Service 3 (Description, Bénéficiaires, Accès, SLA, Fonctionnement, Contacts, Documentation) : Intégration explicite de la mention et du support de l'add-in **BlueFiles**.
*   **JavaScript (`script.js`) :**
    *   Mise à jour de la logique de l'accordéon pour gérer correctement les éléments imbriqués (nécessaire pour Fiche Activité 1.11).

### Removed (Retiré)
*   **Service 1 (Assistance & Support IT) :**
    *   Suppression de la référence à un lexique S@Mlocal externe dans la Fiche Activité 1.11 (maintenant intégré via accordéon).

---

## [1.0.0] - 2025-04-18 - Version Initiale Complète

> Version initiale du catalogue de services en ligne, incluant tous les services et fiches activités fournis, avec une interface structurée par onglets et des visualisations graphiques pour les processus.

### Added (Ajouté)
*   **Landing Page (`index.html`) :**
    *   Structure initiale avec section Hero, grille des services.
    *   Design professionnel "sexy" avec dégradé, effets de survol sur les cartes, icônes stylisées et flèches indicatives.
    *   Animation d'entrée subtile (`fade-in`).
    *   Barre de recherche (structure + style, fonctionnalité à implémenter).
    *   Footer avec liens pertinents (Toutenclic).
*   **Template Page Service (`service-template.html`) :**
    *   Structure HTML sémantique pour les pages de détail.
    *   Interface à onglets fonctionnelle (JS + CSS + ARIA) pour : Description, Bénéficiaires, Accès/Demandes, SLA, Fonctionnement, Contacts, Procédures.
    *   Structure pour fil d'Ariane.
    *   Structure pour accordéon destinée aux Fiches Activités.
*   **Structure de Projet :** Organisation claire des fichiers (HTML, CSS, JS, Assets).
*   **Contenu Initial :**
    *   Intégration complète du contenu texte pour les Services 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12.
    *   Intégration complète des Fiches Activités pour les Services 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12.
*   **Visualisation des Processus :**
    *   Implémentation de logigrammes verticaux simplifiés pour les processus dans l'onglet "Fonctionnement" (via accordéon).
    *   Implémentation de logigrammes pour les processus des Fiches Activités pertinentes (ex: 2.2, 2.3, 5.1, 6.1...).
    *   Amélioration visuelle des étapes de décision ("Oui"/"Non") dans les logigrammes.
    *   Utilisation de "cartes d'activité" ou de "steppers" pour visualiser certaines fiches activités non linéaires (ex: 6.6, 7.4, 8.5, 9.6, 10.5).
*   **Styles CSS (`style.css`) :**
    *   Feuille de style complète et consolidée pour toutes les pages.
    *   Utilisation de variables CSS pour la thématisation.
    *   Styles responsives pour l'adaptation multi-écrans.
    *   Styles spécifiques pour les onglets, accordéons, logigrammes, tableaux SLA, cartes d'activité, steppers, guide contact (7.5).
    *   Amélioration de l'accessibilité des états `:focus-visible`.
*   **JavaScript (`script.js`) :**
    *   Script consolidé pour les interactions communes.
    *   Logique pour l'initialisation des onglets (navigation clic + clavier).
    *   Logique pour l'initialisation des accordéons (multiples instances supportées).
    *   Logique pour l'animation d'entrée "fade-in".
    *   Mise à jour automatique de l'année dans le footer.
*   **Documentation Initiale :**
    *   `README.md` : Description du projet, fonctionnalités, structure, technologies, démarrage, maintenance, contribution, déploiement.
    *   `CONTENT_UPDATE_GUIDE.md` : Guide détaillé pour la mise à jour du contenu.
    *   `STYLE_GUIDE.md` : Conventions de style front-end.
    *   `DEPLOYMENT.md` : Procédure de déploiement manuel recommandée et alternatives.
    *   `CHANGELOG.md` : Ce fichier.

### Changed (Modifié)
*   Structure de l'onglet "Fonctionnement" modifiée pour utiliser un accordéon par processus.
*   Présentation visuelle des décisions ("Oui"/"Non") dans les logigrammes améliorée.
*   Présentation visuelle des fiches activités 6.6, 7.4, 7.5, 8.5, 9.6, 10.5 revue pour plus de clarté.
*   Contenu textuel initial transformé en HTML structuré.
*   Palettes de couleurs et espacements affinés pour un rendu professionnel.
*   En-tête simplifié (suppression titre/sous-titre redondants).
*   Footer simplifié (suppression lien Charte, ajout lien Toutenclic).

### Fixed (Corrigé)
*   Correction des noms d'icônes invalides (ex: `ink_cartridge` remplacé par `inventory`).
*   Correction de l'affichage du contenu Markdown (`**`) dans le HTML final.
*   Assurance que le premier item d'accordéon dans l'onglet "Fonctionnement" est bien fermé par défaut.
*   Retrait de la section "Accès Rapides" redondante sur la page d'accueil.