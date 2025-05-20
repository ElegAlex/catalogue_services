---
type: CONTENT_UPDATE_GUIDE
projet: catalogue de service IT
author: BERGE_ALEXANDRE
created: 2025-04-18
version: 1
updated:
---
# 📝 Guide de Mise à Jour du Contenu - Catalogue Services IT DRSM IDF

> [!NOTE] Objectif du Guide
> Ce document explique comment mettre à jour le **contenu textuel**, les **processus (logigrammes)** et les **procédures (fiches activités)** du Catalogue des Services Informatique en ligne. Il est destiné aux personnes chargées de la maintenance du contenu, même avec une connaissance limitée du développement web.

---

## 🚨 Avant de Commencer : Principes Importants

*   **Sauvegarde :** Avant toute modification importante, faites une copie de sauvegarde du fichier que vous allez éditer ! En cas de problème, vous pourrez revenir en arrière.
*   **Prudence :** Modifiez uniquement le *contenu textuel* à l'intérieur des balises HTML existantes (`<p>`, `<li>`, `<td>`, `<h4>`, `<strong>`...). Évitez de supprimer ou modifier les balises elles-mêmes ou leurs attributs `class`, `id`, `role`, `aria-...`, sauf si vous suivez précisément les instructions de ce guide (par exemple, pour ajouter un nouvel item d'accordéon).
*   **Tester Localement :** Après chaque modification, ouvrez le fichier HTML modifié dans votre navigateur web pour vérifier que le rendu est correct et que rien n'est "cassé".
*   **Structure :** Respectez la structure des fichiers et des dossiers du projet.

---

## 🛠️ Prérequis

*   **Éditeur de texte/code :** Un simple éditeur de texte (comme Notepad++) ou un éditeur de code (comme VS Code - gratuit) est recommandé pour éditer les fichiers `.html`. Évitez les traitements de texte comme Word.
*   **Accès aux fichiers du projet :** Vous devez pouvoir accéder aux fichiers du site web (dossier `catalogue-it-drsm/` et ses sous-dossiers).
*   **Compréhension de base du HTML :** Savoir reconnaître les balises courantes (`<p>`, `<ul>`, `<li>`, `<strong>`, `<a>`, `<table>`, `<tr>`, `<td>`...) aide grandement.
*   **(Optionnel) Git :** Si le projet est versionné avec Git, savoir faire des commits/push est un plus pour suivre les modifications.

---

## 📂 Localiser le Fichier à Modifier

1.  **Page d'Accueil (`index.html`) :** Pour modifier le texte d'introduction (section Hero) ou les titres/textes des cartes de service sur la page principale.
2.  **Page de Détail d'un Service (`services/service-X.html`) :** Pour modifier le contenu d'un service spécifique (Description, Bénéficiaires, Accès, SLA, Fonctionnement, Contacts, Fiches Activités). **Remplacez `X` par le numéro du service concerné.**
3.  **Éléments Communs (Logo, Footer) :** Ces éléments sont présents dans *tous* les fichiers HTML (`index.html` et tous les `service-X.html`). Si vous devez les modifier (ex: changer le lien Toutenclic), **il faut le faire dans tous les fichiers concernés** ou, mieux, discuter avec le responsable technique pour une solution plus centralisée si possible.

---

## ✏️ Modifier le Contenu Textuel Courant

C'est l'opération la plus simple.

1.  Ouvrez le fichier HTML concerné (`index.html` ou `services/service-X.html`) dans votre éditeur.
2.  Repérez le texte que vous souhaitez modifier. Il se trouvera généralement entre des balises comme `<p>Texte ici</p>`, `<li>Texte ici</li>`, `<td>Texte ici</td>`, etc.
3.  Modifiez **uniquement le texte** entre les balises d'ouverture et de fermeture.
    *   Exemple : `<p>Ancienne description.</p>` devient `<p>Nouvelle description mise à jour.</p>`
4.  Pour mettre du texte en **gras**, utilisez les balises `<strong>Texte en gras</strong>`.
5.  Pour créer un **lien cliquable**, utilisez la balise `<a>` : `<a href="URL_DE_DESTINATION">Texte du lien</a>`. Pour un lien externe, ajoutez `target="_blank" rel="noopener noreferrer"`.
6.  Pour créer une **liste à puces**, utilisez `<ul>` (pour la liste globale) et `<li>` (pour chaque élément).
7.  Pour créer une **liste numérotée**, utilisez `<ol>` (pour la liste globale) et `<li>` (pour chaque élément).
8.  **Sauvegardez** le fichier.
9.  **Testez** en ouvrant le fichier dans votre navigateur.

> [!WARNING] Attention
> Ne supprimez pas les chevrons `<` et `>` ni les noms des balises (comme `p`, `li`, `strong`...). Ne modifiez pas non plus les attributs comme `class="..."` ou `id="..."`, car ils sont utilisés par le CSS pour le style et le JS pour les interactions.

---

## 📊 Modifier les Tableaux (Ex: SLA)

Les tableaux sont utilisés principalement pour les SLA.

1.  Ouvrez le fichier `services/service-X.html` concerné.
2.  Repérez la section `<div role="tabpanel" id="panel-sla"...>`.
3.  À l'intérieur, trouvez la balise `<table>`.
4.  Le tableau est structuré en :
    *   `<thead>` : En-têtes de colonnes (dans `<tr><th>...</th></tr>`). Ne pas modifier sauf si les titres des colonnes changent.
    *   `<tbody>` : Corps du tableau contenant les données.
    *   `<tr>` : Définit une ligne du tableau.
    *   `<td>` : Définit une cellule de données dans une ligne.
5.  **Pour modifier une donnée :** Trouvez la bonne ligne `<tr>` et la bonne cellule `<td>` et changez le texte à l'intérieur.
6.  **Pour ajouter une ligne :** Copiez une ligne existante (tout le bloc de `<tr>` à `</tr>`), collez-la à la suite dans le `<tbody>`, puis modifiez le contenu des cellules `<td>` de la nouvelle ligne.
7.  **Pour supprimer une ligne :** Supprimez tout le bloc de `<tr>` à `</tr>` correspondant à la ligne.
8.  **Sauvegardez** et **Testez**.

---

## ⚙️ Modifier l'Accordéon (Processus ou Fiches Activités)

Les onglets "Fonctionnement" et "Procédures" utilisent un accordéon.

1.  Ouvrez le fichier `services/service-X.html` concerné.
2.  Repérez la section `<div role="tabpanel" id="panel-processus"...>` (pour les processus) ou `<div role="tabpanel" id="panel-activities"...>` (pour les fiches).
3.  À l'intérieur, trouvez `<div class="accordion">`.
4.  Chaque élément de l'accordéon est un bloc `<div class="accordion-item">`.

**Pour modifier le contenu d'un item existant :**

1.  Trouvez le bon `<div class="accordion-item">` en vous basant sur le titre dans le `<button class="accordion-trigger">`.
2.  Modifiez le contenu à l'intérieur de `<div id="CONTENU_ID" ...><div wrapper...> ... </div></div>`.
3.  Vous pouvez modifier le texte, les listes, ou même la structure du logigramme (voir section suivante).

**Pour ajouter un nouvel item (ex: une nouvelle Fiche Activité) :**

1.  **Copiez** l'intégralité d'un bloc `<div class="accordion-item">...</div >` existant.
2.  **Collez**-le à la suite du dernier item, *à l'intérieur* de `<div class="accordion">`.
3.  **Modifiez impérativement et de manière unique** les `id` et `aria-controls` du nouvel item :
    *   `id="activity-trigger-X-Y"` devient `id="activity-trigger-X-Z"` (où Z est le nouveau numéro).
    *   `aria-controls="activity-content-X-Y"` devient `aria-controls="activity-content-X-Z"`.
    *   `id="activity-content-X-Y"` devient `id="activity-content-X-Z"`.
    *   `aria-labelledby="activity-trigger-X-Y"` devient `aria-labelledby="activity-trigger-X-Z"`.
4.  Modifiez le **titre** dans le `<button>`.
5.  Remplacez le **contenu** à l'intérieur de `<div id="activity-content-X-Z" ...><div>...</div></div>` par le contenu de votre nouvelle fiche.
6.  Assurez-vous que `aria-expanded="false"` est bien défini pour le nouveau bouton trigger pour qu'il soit fermé par défaut.

**Pour supprimer un item :**

1.  Supprimez l'intégralité du bloc `<div class="accordion-item">...</div >` correspondant.

**Sauvegardez** et **Testez** (vérifiez que l'accordéon s'ouvre/ferme correctement).

---

## 📊➡️ Modifier les Logigrammes (Processus / Fiches Activités)

> [!WARNING] Attention: Zone Technique
> Modifier les logigrammes demande plus d'attention car la structure HTML (`.process-flow`, `.process-step`, `.decision-step`...) est directement liée au rendu visuel CSS. Une erreur de structure peut casser l'affichage.

**Structure d'une Étape Simple :**

```html
<div class="process-step [user-step OU it-step]">
    <div class="step-icon-container">
        <span class="step-number">[Numéro]</span>
        <span class="material-symbols-outlined step-icon" aria-hidden="true">[nom_icone]</span>
    </div>
    <div class="step-content">
        <h4 class="step-title">[Titre Étape]</h4>
        <p class="step-description">[Description Étape...]</p>
    </div>
</div>
<div class="step-connector"></div> <!-- Connecteur VERS l'étape suivante -->
```

*   `[user-step/it-step]` : Choisissez la classe selon l'acteur (pour la couleur).
*   `[Numéro]` : Mettez à jour la numérotation si vous ajoutez/supprimez des étapes.
*   `[nom_icone]` : Trouvez un nom d'icône pertinent sur [Google Fonts Material Symbols](https://fonts.google.com/icons).
*   Le `.step-connector` relie cette étape à la suivante. **Ne pas en mettre après la toute dernière étape du flux.**

**Structure d'une Étape de Décision :**

```html
<!-- Connecteur AVANT la décision -->
<div class="step-connector decision"></div>

<div class="process-step decision-step">
    <div class="step-icon-container">
        <span class="step-number">[Numéro]</span>
        <span class="material-symbols-outlined step-icon" aria-hidden="true">help_center</span> <!-- Ou autre icône -->
    </div>
    <div class="step-content decision-question">
        <h4 class="step-title">[Question de la Décision ?]</h4>
    </div>
    <div class="decision-branches-container">
        <!-- Branche OUI -->
        <div class="decision-branch branch-yes">
            <div class="branch-path">
                <span class="branch-label">Oui</span>
                <!-- Insérer ici les étapes .process-step.nested pour la branche Oui -->
                <!-- Exemple: -->
                <div class="process-step it-step nested">...</div>
                <div class="step-connector-branch"></div> <!-- Si plusieurs étapes dans la branche -->
                <div class="process-step it-step nested">...</div>
            </div>
        </div>
         <!-- Branche NON -->
        <div class="decision-branch branch-no">
            <div class="branch-path">
                 <span class="branch-label">Non</span>
                 <!-- Insérer ici les étapes .process-step.nested pour la branche Non -->
            </div>
        </div>
    </div>
</div>
<!-- Connecteur APRÈS la décision (pour rejoindre le flux principal) -->
<div class="step-connector after-decision"></div>
```

*   Utilisez `.process-step.nested` pour les étapes à l'intérieur des branches.
*   Utilisez `.step-connector-branch` pour relier les étapes *à l'intérieur* d'une branche.
*   Le `.step-connector.after-decision` relie la fin de la structure de décision à la première étape qui suit *après* la convergence des branches.

**Pour ajouter/supprimer une étape simple :** Copiez/collez/supprimez un bloc `process-step` + son `step-connector` (sauf pour la dernière étape) et mettez à jour la numérotation.

**Pour ajouter/supprimer une décision :** C'est plus complexe. Il faut insérer/supprimer toute la structure `decision-step` et ajuster les connecteurs avant (`.decision`) et après (`.after-decision`).

**Sauvegardez** et **Testez** très attentivement après modification d'un logigramme.

---

## ✨ Ajouter un Nouveau Service Complet

1.  **Copiez** le fichier `service-template.html`.
2.  **Renommez** la copie en `service-N.html` (ex: `service-13.html`) et placez-la dans le dossier `services/`.
3.  **Éditez** `service-N.html` :
    *   Modifiez la balise `<title>`.
    *   Modifiez le **Fil d'Ariane**.
    *   Modifiez le **Titre (H1)** et le **Résumé (P)**.
    *   Remplissez le contenu de **chaque onglet** (Description, Bénéficiaires, Accès, SLA, Fonctionnement, Contacts).
    *   Remplissez/Créez l'accordéon des **Fiches Activités**.
4.  **Éditez** le fichier `index.html` (page d'accueil).
5.  Repérez la section `<div class="card-grid">` sous "Tous les Services IT".
6.  **Copiez** le bloc HTML d'une carte existante (de `<a>` à `</a>`).
7.  **Collez** ce bloc à la fin de la grille.
8.  **Modifiez** le contenu de la nouvelle carte :
    *   Lien `href="services/service-N.html"`.
    *   Icône (`<span class="material-symbols-outlined">...</span>`).
    *   Titre `<h4>`.
    *   Description `<p>`.
9.  **Sauvegardez** les deux fichiers (`service-N.html` et `index.html`).
10. **Testez** en cliquant sur la nouvelle carte depuis la page d'accueil et en vérifiant le contenu de la nouvelle page service.

---

## 🖼️ Modifier le Logo ou les Liens du Footer

*   **Logo :** L'image du logo est définie dans le `<header>` de **chaque fichier HTML** (`index.html`, `service-1.html`, etc.). Modifiez la balise `<img src="../assets/images/logo-drsm.png" ...>` dans *tous* les fichiers.
*   **Liens Footer :** Les liens du footer (`Toutenclic`) sont définis dans le `<footer>` de **chaque fichier HTML**. Modifiez la balise `<a>` dans *tous* les fichiers.

> [!TIP] Astuce
> Si vous utilisez un éditeur de code avancé (comme VS Code), vous pouvez utiliser la fonction "Rechercher et Remplacer dans les fichiers" pour modifier le header ou le footer dans tous les fichiers d'un coup. Soyez prudent avec cette fonction.

---

## ✅ Tester les Modifications

*   **Ouvrez le fichier HTML modifié** directement dans votre navigateur (Chrome, Firefox, Edge...).
*   **Naviguez** dans les onglets, ouvrez/fermez les accordéons.
*   **Vérifiez** que le texte est correct, que les liens fonctionnent.
*   **Inspectez l'affichage** sur différentes tailles d'écran (utilisez les outils de développement du navigateur - F12 - pour simuler des appareils mobiles/tablettes).
*   **Si vous avez modifié un logigramme,** vérifiez attentivement que les lignes et les étapes s'affichent comme prévu.

---

## 🚀 Déployer les Modifications

Une fois les modifications testées et validées en local, suivez la procédure de déploiement définie pour mettre à jour le site en ligne (copie des fichiers modifiés sur le serveur web). Référez-vous au `DEPLOYMENT.md` si disponible.

---

## ❓ Aide Supplémentaire

Si vous rencontrez des difficultés ou si vous cassez quelque chose :
1.  Revenez à votre sauvegarde du fichier.
2.  Relisez attentivement les instructions de ce guide.
3.  Si le problème persiste, contactez BERGE Alexandre.
