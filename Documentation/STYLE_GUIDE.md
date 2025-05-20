---
type: STYLE_GUIDE
projet: catalogue de service IT
author: BERGE_ALEXANDRE
created: 2025-04-18
version: 1
updated:
---
# 🎨 Guide de Style Front-End - Catalogue Services IT DRSM IDF

> [!NOTE] Objectif du Guide
> Ce document définit les conventions et les bonnes pratiques de style (HTML & CSS) à suivre pour maintenir la cohérence visuelle, l'accessibilité et la maintenabilité du Catalogue des Services Informatique en ligne de la DRSM IDF. Il s'adresse aux développeurs ou aux personnes amenées à modifier le code front-end.

---

## philosophiques Généraux

*   **Simplicité & Clarté :** Privilégier des solutions simples et compréhensibles. L'interface doit être intuitive.
*   **Cohérence :** Les éléments similaires doivent avoir une apparence et un comportement similaires sur l'ensemble du site.
*   **Performance :** Optimiser les ressources (CSS, JS, images, polices) pour un chargement rapide.
*   **Accessibilité (A11y) :** Concevoir pour tous les utilisateurs. Respecter les standards WCAG (AA minimum).
*   **Responsive Design :** Assurer une expérience optimale sur toutes les tailles d'écrans (Mobile First ou approche adaptative).
*   **Maintenabilité :** Écrire un code propre, bien structuré et commenté si nécessaire.

---

## 🌈 Palette de Couleurs

Les couleurs principales sont définies comme des variables CSS (Custom Properties) dans `css/style.css` sous la section `:root`. **Utiliser systématiquement ces variables** plutôt que des codes hexadécimaux en dur.

| Variable CSS                | Couleur (Exemple) | Usage Sémantique Principal                                    |
| :-------------------------- | :---------------- | :------------------------------------------------------------ |
| `--primary-color`           | `#00509e`         | Éléments interactifs principaux, titres importants, liens     |
| `--secondary-color`         | `#0077cc`         | Variations, hovers, fonds légers, accents secondaires        |
| `--accent-color`            | `#00a1e4`         | Éléments à mettre en évidence (flèches, bordures hover...)     |
| `--focus-ring-color`        | `#0d6efd`         | Outline visible lors de la navigation clavier (`:focus-visible`) |
| `--text-color`              | `#212529`         | Texte courant principal                                       |
| `--muted-text-color`        | `#6c757d`         | Texte secondaire, descriptions, labels discrets              |
| `--light-text-color`        | `#ffffff`         | Texte sur fonds sombres (ex: Hero, Footer, boutons primaires) |
| `--bg-color`                | `#f8f9fa`         | Couleur de fond générale de la page                           |
| `--card-bg`                 | `#ffffff`         | Couleur de fond des cartes, panneaux d'onglet, etc.          |
| `--border-color`            | `#dee2e6`         | Bordures standard (cartes, tableaux, séparateurs...)          |
| `--shadow-color`            | `rgba(0,80,158,0.1)` | Ombre portée standard                                        |
| `--soft-shadow-color`       | `rgba(0,80,158,0.05)`| Ombre portée très subtile                                    |
| `--icon-hardware-color`     | `#dc3545`         | Icônes/bordures liées aux pannes matérielles (Rouge)           |
| `--icon-user-action-color`  | `var(--secondary-color)` | Icônes/bordures liées aux actions utilisateur             |
| `--icon-it-action-color`    | `var(--primary-color)` | Icônes/bordures liées aux actions IT                     |
| `--icon-consumable-color`   | `#fd7e14`         | Icônes/bordures liées aux consommables (Orange)             |
| `--icon-info-color`         | `var(--muted-text-color)` | Icônes/bordures liées aux informations/questions (Gris)  |
| `--card-panne-bg`           | `color-mix(...)`  | Fond léger pour cartes "Panne"                              |
| `--card-urgence-bg`         | `color-mix(...)`  | Fond léger pour cartes "Urgence"                            |
| `--card-support-bg`         | `color-mix(...)`  | Fond léger pour cartes "Support"                             |
| `--card-demande-bg`         | `color-mix(...)`  | Fond léger pour cartes "Demande"                             |

> [!IMPORTANT] Contraste
> Lors de l'ajout de nouvelles combinaisons de couleurs (texte sur fond), **toujours vérifier** le ratio de contraste avec un outil comme [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) pour atteindre au minimum le niveau WCAG AA.

---

## ✒️ Typographie

*   **Police Principale :** 'Inter', chargée via Google Fonts (avec `display=swap`). Envisager l'auto-hébergement pour la production.
*   **Graisses Utilisées :**
    *   `400` (Regular) : Texte courant.
    *   `500` (Medium) : Titres de cartes (h4), boutons, éléments légèrement accentués.
    *   `700` (Bold) : Titres principaux (h1, h2, h3), texte important (`<strong>`).
*   **Tailles de Base (Desktop) :**
    *   Texte courant (`body`, `p`, `li`) : `1rem` (~16px).
    *   Titres : Voir la hiérarchie définie dans `style.css` (H1, H2, H3, H4).
    *   Texte secondaire/muted : `0.9rem` ou `0.85rem`.
*   **Hauteur de Ligne (`line-height`) :** `1.6` par défaut pour une bonne lisibilité des paragraphes. Peut être ajustée pour les titres.
*   **Unités :** Utiliser `rem` pour les `font-size` pour une meilleure accessibilité et `em` pour les paddings/marges relatifs à la police si pertinent. Utiliser `px` pour les bordures fines.

---

## 📐 Mise en Page (Layout)

*   **Conteneur Principal :** Classe `.container` avec `max-width: var(--container-width)` et centrage automatique (`margin: auto`). Padding latéral défini par `var(--spacing-unit)`.
*   **Grilles :** Utilisation de CSS Grid (`display: grid`) pour les listes de cartes (`.card-grid`, `.activity-cards-container`, `.incident-card-row`). `grid-template-columns: repeat(auto-fit, minmax(..., 1fr));` est privilégié pour le responsive.
*   **Flexbox :** Utilisé pour l'alignement interne des composants (header, footer, intérieur des cartes, boutons avec icônes, etc.).
*   **Espacement :** Utiliser la variable `--spacing-unit` (et ses multiples/divisions via `calc()`) pour les `padding`, `margin` et `gap` afin d'assurer une cohérence rythmique.
*   **Responsive :** Les Media Queries sont définies dans `style.css` pour ajuster la mise en page sur différentes tailles d'écran (points de rupture typiques : 992px, 768px, 576px). L'approche doit permettre une consultation confortable sur mobile.

---

## 🧩 Composants UI Principaux

*   **Cartes (`.card`, `.activity-card`, `.incident-card`) :** Fond blanc (`--card-bg`), bordure légère, ombre douce, `border-radius` défini, effet de survol subtil (translation/scale/ombre). Doivent être entièrement cliquables si ce sont des liens (`<a>`).
*   **Boutons (`.btn`, `.btn-primary`, `.btn-secondary`) :** Style clair et distinctif, `border-radius` cohérent, icône optionnelle alignée avec le texte via `gap`. Effets `:hover` et `:focus-visible` clairs.
*   **Onglets (`.tabs-container`) :** Style défini dans `style.css`. Doit être accessible au clavier (navigation fléchée, Home/End). L'onglet actif est clairement indiqué (`aria-selected="true"`, style visuel).
*   **Accordéon (`.accordion`) :** Style défini dans `style.css`. Doit être accessible. Le trigger (`<button>`) indique l'état ouvert/fermé (`aria-expanded`). Transition douce à l'ouverture/fermeture.
*   **Logigrammes (`.process-flow`) :** Structure verticale avec icônes, numéros, titres, descriptions et connecteurs stylisés via CSS. Les décisions sont visuellement distinctes.
*   **Tableaux (`.sla-table`) :** Lisibles, avec en-têtes clairs et potentiellement des lignes alternées pour faciliter la lecture. `table-responsive` wrapper pour la gestion sur mobile.

---

## 🖋️ HTML Sémantique & Conventions

*   Utiliser les balises HTML5 appropriées : `<header>`, `<footer>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`.
*   Respecter la hiérarchie des titres : un seul `<h1>` par page (généralement le titre principal du service ou de la page d'accueil), suivi de `<h2>`, `<h3>`, etc., sans sauter de niveaux.
*   Utiliser `<strong>` pour l'emphase sémantique (important) et `<em>` pour l'accentuation. Ne pas utiliser `<b>` ou `<i>` pour le style seul.
*   Utiliser les listes (`<ul>`, `<ol>`, `<dl>`) lorsque le contenu s'y prête sémantiquement.
*   Fournir des attributs `alt` descriptifs pour toutes les images significatives. Pour les images purement décoratives, utiliser `alt=""`.

---

## ♿ Accessibilité (A11y)

*   **Contraste :** Vérifier systématiquement les ratios de contraste (WCAG AA min).
*   **Focus Visible :** Tous les éléments interactifs doivent avoir un état `:focus-visible` clair et distinct.
*   **Navigation Clavier :** Le site doit être entièrement navigable et utilisable au clavier seul (ordre logique de tabulation, gestion du focus dans les composants JS).
*   **ARIA :** Utiliser les attributs ARIA (`role`, `aria-label`, `aria-controls`, `aria-labelledby`, `aria-selected`, `aria-expanded`, `aria-current`...) de manière appropriée sur les composants interactifs (onglets, accordéons, formulaires) pour améliorer l'expérience avec les lecteurs d'écran.
*   **Icônes :** Les icônes utilisées avec du texte doivent avoir `aria-hidden="true"`. Si une icône est utilisée seule comme contrôle, elle doit avoir une alternative textuelle (ex: via `aria-label` sur le bouton parent).
*   **HTML Sémantique :** Utiliser les balises appropriées aide l'accessibilité.

---

## 🖼️ Images & Icônes

*   **Images :**
    *   Optimiser systématiquement les images pour le web (poids, dimensions).
    *   Utiliser des formats modernes si possible (WebP) avec fallback.
    *   Préciser `width` et `height` pour éviter les sauts de mise en page (CLS).
    *   Fournir des `alt` pertinents.
*   **Icônes :**
    *   Utiliser une source unique et cohérente (actuellement Material Symbols via Google Fonts).
    *   Assurer la bonne implémentation HTML (`<span class="material-symbols-outlined" aria-hidden="true">nom_icone</span>`).
    *   Ne pas utiliser d'icônes seules pour transmettre une information cruciale sans alternative textuelle.

---

## 🍦 CSS & Conventions

*   **Variables CSS :** Utiliser les variables définies dans `:root` pour les couleurs, polices, espacements, etc.
*   **Unités :** Préférer `rem` et `em` pour la flexibilité, `px` pour les bordures.
*   **Organisation :** Le fichier `style.css` est organisé en sections logiques (Global, Header/Footer, Landing Page, Détail Service, Composants...). Maintenir cette organisation.
*   **Nommage :** Utiliser des noms de classes clairs et descriptifs. Une approche type BEM (Bloc__Element--Modifier) peut être utile si le projet grandit, mais n'est pas strictement appliquée actuellement.
*   **Commentaires :** Ajouter des commentaires pour expliquer les sections complexes ou les choix non évidents.
*   **Préfixes Vendeurs :** Ne sont généralement plus nécessaires pour les propriétés CSS modernes bien supportées. Utiliser Autoprefixer si un build process est mis en place plus tard.

---

> [!SUCCESS] En résumé
> L'objectif est de produire un code et un design cohérents, accessibles, performants et faciles à maintenir. En suivant ces directives, les futures évolutions du catalogue pourront s'intégrer harmonieusement.

