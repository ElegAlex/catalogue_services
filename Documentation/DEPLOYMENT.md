---
type: DEPLOYMENT
projet: catalogue de service IT
author: BERGE_ALEXANDRE
created: 2025-04-18
version: 1
updated:
---
# 🚀 Guide de Déploiement - Catalogue Services IT DRSM IDF

> [!NOTE] Objectif du Guide
> Ce document décrit les étapes nécessaires pour déployer (mettre en ligne ou mettre à jour) le site web statique du Catalogue des Services Informatique de la DRSM IDF sur le serveur de production (ou tout autre environnement cible).

---

## 🌍 Nature du Projet

Il s'agit d'un site web **statique**, composé uniquement de fichiers :
*   HTML (`.html`)
*   CSS (`.css`)
*   JavaScript (`.js`)
*   Images et autres ressources (`assets/`)

**Aucune base de données ni langage serveur back-end** (PHP, Node.js, Java, etc.) n'est requis pour son fonctionnement de base. Il nécessite simplement un serveur web capable de servir ces fichiers statiques.

---

## 🛠️ Prérequis

Avant de commencer le déploiement, assurez-vous d'avoir :

1.  **Accès au Serveur Cible :**
    *   Credentials (identifiants) valides pour vous connecter au serveur hébergeant le site (ex: via SSH, SFTP, FTP).
    *   Permissions suffisantes pour écrire dans le répertoire de destination.
2.  **Connaissance du Répertoire Cible :** L'emplacement exact sur le serveur où les fichiers du site doivent être copiés (la "racine web" du catalogue, ex: `/var/www/html/catalogue-it/`, `C:\inetpub\wwwroot\catalogue-it\`, ou un chemin spécifique défini dans la configuration du serveur web).
3.  **Logiciel Serveur Web :** Un serveur web (comme Apache, Nginx, IIS...) doit être installé et configuré sur le serveur cible pour servir les fichiers statiques depuis le répertoire cible.
4.  **Outils de Transfert :** Un client SFTP/SCP (ex: WinSCP, FileZilla, commande `scp` en ligne de commande) ou un client FTP (moins sécurisé, préférer SFTP/SCP si possible). Si Git est utilisé pour le déploiement, l'accès Git au dépôt est nécessaire.
5.  **Code Source Finalisé :** Accès à la version la plus récente et testée du code source du projet (soit un dossier local contenant l'arborescence complète, soit un checkout de la branche/tag Git approprié).

---

## ⚙️ Méthodes de Déploiement Possibles

Plusieurs méthodes peuvent être utilisées. La plus simple pour un site statique est la copie manuelle.

1.  **Copie Manuelle (SFTP/SCP/FTP) :**
    *   **Description :** Connexion directe au serveur et copie manuelle des fichiers du projet.
    *   **Avantages :** Simple, contrôle direct.
    *   **Inconvénients :** Manuel (risque d'erreur/oubli), pas de versioning intégré au déploiement, peut être lent si beaucoup de petits fichiers.
    *   **Quand l'utiliser :** Pour des mises à jour ponctuelles, si pas d'infrastructure Git/CI/CD. **C'est la méthode décrite dans la procédure recommandée ci-dessous.**
2.  **Déploiement Basé sur Git :**
    *   **Description :** Utiliser `git pull` ou `git clone` directement sur le serveur, ou via des hooks Git (ex: `post-receive`) pour automatiser la mise à jour après un `push` sur une branche spécifique.
    *   **Avantages :** Intègre le versioning, facilite les rollbacks vers des versions précédentes.
    *   **Inconvénients :** Nécessite Git installé sur le serveur et une configuration initiale.
3.  **Pipeline CI/CD (Intégration et Déploiement Continus) :**
    *   **Description :** Utilisation d'outils comme GitLab CI/CD, Jenkins, GitHub Actions pour automatiser les tests et le déploiement après chaque modification validée sur le dépôt Git.
    *   **Avantages :** Entièrement automatisé, fiable, rapide, intègre potentiellement des tests.
    *   **Inconvénients :** Configuration plus complexe à mettre en place initialement.
    *   **Recommandation :** C'est la **méthode idéale à terme** pour la robustesse et l'efficacité, mais peut être surdimensionnée pour des mises à jour très rares.

---

## ✅ Procédure Recommandée (Copie Manuelle via SFTP/SCP)

Cette procédure décrit les étapes pour une mise à jour manuelle sécurisée.

1.  **Préparation : Obtenir le Code Final**
    *   Assurez-vous d'avoir la **dernière version validée et testée** du code source complet du projet dans un dossier sur votre machine locale. Vérifiez que tous les fichiers nécessaires sont présents (HTML, CSS, JS, `assets/`).

2.  **Connexion au Serveur Cible**
    *   Utilisez votre client SFTP/SCP (ex: WinSCP, FileZilla en mode SFTP, ou la commande `scp` / `sftp` en ligne de commande).
    *   Connectez-vous au serveur en utilisant les identifiants fournis.

3.  **Navigation vers le Répertoire Cible**
    *   Naviguez jusqu'au répertoire racine où le site du catalogue est hébergé sur le serveur (ex: `/var/www/html/catalogue-it/`). **Vérifiez bien que vous êtes au bon endroit !**

4.  **🚨 SAUVEGARDE (Étape Cruciale !) 🚨**
    *   **Avant** de copier les nouveaux fichiers, faites une sauvegarde de la version actuellement en ligne.
    *   **Méthode simple :** Copiez le répertoire entier du site actuel vers un emplacement de sauvegarde ou renommez-le avec la date du jour.
        *   Exemple (commande Linux) : `cp -a /var/www/html/catalogue-it /var/www/html/catalogue-it_backup_YYYYMMDD`
        *   Ou via l'interface graphique de votre client SFTP/FTP.
    *   **Ne sautez JAMAIS cette étape !** Elle permet un retour arrière rapide en cas de problème.

5.  **Transfert des Nouveaux Fichiers**
    *   Depuis votre dossier local contenant le code finalisé, **transférez l'ensemble de l'arborescence** (`index.html`, `services/`, `css/`, `js/`, `assets/`...) vers le répertoire cible sur le serveur.
    *   Assurez-vous que le transfert **écrase** les fichiers existants sur le serveur avec les nouvelles versions.
    *   Vérifiez que le transfert s'est terminé sans erreur.

6.  **(Optionnel) Vérification des Permissions**
    *   Dans la plupart des cas, les permissions héritées sont suffisantes. Vérifiez cependant que les fichiers et dossiers sont lisibles par l'utilisateur sous lequel tourne le serveur web (ex: `www-data`, `apache`, `nginx`...).
    *   Les permissions typiques sont `644` pour les fichiers et `755` pour les dossiers. Utilisez `chmod` si nécessaire (avec prudence).

7.  **Déconnexion**
    *   Fermez la connexion SFTP/SCP.

---

## 🧪 Vérifications Post-Déploiement

Il est **essentiel** de vérifier que le déploiement s'est bien passé :

1.  **Accéder au Site :** Ouvrez l'URL du catalogue de services dans votre navigateur web.
2.  **Forcer le Rafraîchissement :** Videz le cache de votre navigateur (Ctrl+Shift+R ou Cmd+Shift+R) pour être sûr de voir la dernière version.
3.  **Tests de Base :**
    *   Vérifiez que la page d'accueil (`index.html`) s'affiche correctement.
    *   Cliquez sur plusieurs cartes de service pour accéder aux pages de détail (`services/service-X.html`) et vérifiez leur affichage.
    *   Naviguez entre les différents onglets d'une page de service.
    *   Ouvrez et fermez quelques éléments de l'accordéon (processus, fiches activités).
    *   Vérifiez que les logigrammes s'affichent correctement.
    *   Testez la réactivité de l'affichage en redimensionnant la fenêtre de votre navigateur ou en utilisant les outils de développement pour simuler des appareils mobiles.
4.  **Vérifier la Console Développeur :** Ouvrez les outils de développement (F12) et vérifiez l'onglet "Console" pour d'éventuelles erreurs JavaScript (en rouge). Vérifiez aussi l'onglet "Réseau" (Network) pour des erreurs 404 (fichiers non trouvés).
5.  **(Optionnel) Vider les Caches Serveur :** Si le serveur web utilise des mécanismes de cache (ex: Varnish, cache Nginx, OPcache pour PHP - bien que non applicable ici), videz ces caches si nécessaire pour que les modifications soient prises en compte immédiatement par tous.

---

## ⏪ Procédure de Retour Arrière (Rollback)

Si un problème majeur est détecté après le déploiement :

1.  **Reconnectez-vous** au serveur cible (SFTP/SCP).
2.  **Naviguez** jusqu'au répertoire *parent* du répertoire cible (ex: `/var/www/html/`).
3.  **Supprimez** (ou renommez) le répertoire du déploiement défectueux (ex: `rm -rf catalogue-it` ou `mv catalogue-it catalogue-it_bug`).
4.  **Restaurez** la sauvegarde effectuée à l'étape 4 de la procédure de déploiement :
    *   Exemple : `mv catalogue-it_backup_YYYYMMDD catalogue-it`
5.  **Vérifiez** à nouveau l'accès au site pour confirmer que la version précédente est restaurée.
6.  **Analysez** la cause du problème avant de retenter un déploiement.

*(Si un déploiement basé sur Git est utilisé, le rollback consisterait généralement à faire un `git checkout` sur la version précédente fonctionnelle).*

---

## 🌐 Environnements

*   **Production :** L'environnement accessible aux utilisateurs finaux. Appliquer la procédure de déploiement avec la plus grande prudence.
*   **Test / Pré-production (si existant) :** Il est **fortement recommandé** d'avoir un environnement de test (idéalement identique à la production) pour valider les modifications *avant* de déployer en production. Le déploiement sur cet environnement suit la même procédure.

---

## 🔒 Considérations de Sécurité

*   **Transfert Sécurisé :** Utilisez **SFTP** ou **SCP** plutôt que FTP simple (qui transmet les mots de passe en clair).
*   **Permissions Fichiers :** Assurez-vous que les permissions des fichiers sur le serveur ne sont pas trop ouvertes (éviter `777`). Les fichiers doivent être lisibles par le serveur web, mais l'écriture ne doit être accordée qu'aux utilisateurs/processus légitimes.
*   **Credentials :** Ne stockez pas les mots de passe en clair. Utilisez des clés SSH pour la connexion si possible.

---

## 📞 Contact en Cas de Problème

En cas de difficulté lors du déploiement, contactez [Nom de l'équipe Infrastructure / Référent Déploiement].