// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Catalogue IT DRSM IDF - Initialisation JS Globale.");
	
    // --- Mise à jour automatique de l'année dans le footer ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Logique pour la Barre de Recherche ---
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('main-search');
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                console.log(`Lancement de la recherche pour : "${query}"`);
                // Logique de recherche à implémenter (redirection, AJAX...)
                // Exemple: window.location.href = `/recherche?q=${encodeURIComponent(query)}`;
            }
        });
         // Potentiellement ajouter ici la logique pour l'autocomplete/suggestions
        // searchInput.addEventListener('input', handleAutocomplete);
    }

    // --- Logique pour l'Animation d'Entrée ---
    const fadeElements = document.querySelectorAll('.fade-in-element');
    if ("IntersectionObserver" in window) {
        const elementObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px", threshold: 0.1 });
        fadeElements.forEach(el => elementObserver.observe(el));
    } else {
        fadeElements.forEach(el => el.classList.add('is-visible')); // Fallback
    }


    // --- Logique pour le Système d'Onglets (Tabs) ---
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
        const tabList = tabsContainer.querySelector('.tab-list');
        const tabButtons = tabList.querySelectorAll('.tab-button[role="tab"]');
        const tabPanels = tabsContainer.querySelectorAll('.tab-panel[role="tabpanel"]');

        // Fonction pour changer d'onglet
        const switchTab = (newTab) => {
            if (!newTab) return; // Sécurité
            const targetPanelId = newTab.getAttribute('aria-controls');
            const targetPanel = tabsContainer.querySelector(`#${targetPanelId}`);

            // Désactiver tous les autres
            tabButtons.forEach(tab => {
                tab.setAttribute('aria-selected', 'false');
                tab.tabIndex = -1;
            });
            tabPanels.forEach(panel => {
                panel.classList.remove('is-active');
            });

            // Activer le nouveau
            newTab.setAttribute('aria-selected', 'true');
            newTab.tabIndex = 0;
            if (targetPanel) {
                targetPanel.classList.add('is-active');
            }
        };

        // Écouteur sur la liste (délégation)
        tabList.addEventListener('click', (e) => {
            const clickedTab = e.target.closest('.tab-button[role="tab"]');
            if (clickedTab) {
                e.preventDefault();
                switchTab(clickedTab);
                const targetPanelId = clickedTab.getAttribute('aria-controls');
                const targetPanel = tabsContainer.querySelector(`#${targetPanelId}`);
                if(targetPanel) {
                    // Optionnel: Mettre le focus sur le panel pour l'accessibilité
                    // targetPanel.setAttribute('tabindex', '-1');
                    // targetPanel.focus({ preventScroll: true });
                }
            }
        });

        // Gestion clavier
        tabList.addEventListener('keydown', (e) => {
            let currentTab = document.activeElement.closest('.tab-button[role="tab"]');
            if (!currentTab) return;

            let newIndex;
            const tabsArray = Array.from(tabButtons);
            const currentIndex = tabsArray.indexOf(currentTab);
            let newTab = null;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                newIndex = (currentIndex + 1) % tabsArray.length;
                newTab = tabsArray[newIndex];
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                newIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
                newTab = tabsArray[newIndex];
            } else if (e.key === 'Home') {
                e.preventDefault();
                newTab = tabsArray[0];
            } else if (e.key === 'End') {
                 e.preventDefault();
                 newTab = tabsArray[tabsArray.length - 1];
            }

            if (newTab) {
                switchTab(newTab);
                newTab.focus();
            }
        });

        // Initialisation tabindex
        tabButtons.forEach((tab, index) => {
            if (tab.getAttribute('aria-selected') !== 'true') {
                 tab.tabIndex = -1;
            }
        });
    }


    // --- Logique pour l'Accordéon (Gère maintenant l'imbrication) ---
    const allAccordionTriggers = document.querySelectorAll('.accordion-trigger');

    allAccordionTriggers.forEach(trigger => {
        const content = document.getElementById(trigger.getAttribute('aria-controls'));
        if (!content) return;

        // Initialiser l'état basé sur aria-expanded
        const isInitiallyExpanded = trigger.getAttribute('aria-expanded') === 'true';
        if (isInitiallyExpanded) {
             content.classList.add('is-open');
        } else {
             content.classList.remove('is-open');
             // Assurez-vous que l'attribut est bien 'false' si pas 'true'
             trigger.setAttribute('aria-expanded', 'false');
        }

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTrigger = e.currentTarget; // Utiliser currentTarget
            const targetContent = document.getElementById(currentTrigger.getAttribute('aria-controls'));
            if (!targetContent) return;

            const isCurrentlyExpanded = currentTrigger.getAttribute('aria-expanded') === 'true';

            // Toggle l'état de l'élément cliqué
            currentTrigger.setAttribute('aria-expanded', !isCurrentlyExpanded);
            targetContent.classList.toggle('is-open');

            // ---- Logique pour fermer les autres au MEME NIVEAU ----
            // 1. Trouver le conteneur direct de l'item cliqué (son parent .accordion-item)
            const parentItem = currentTrigger.closest('.accordion-item');
            if (!parentItem) return; // Sécurité

            // 2. Trouver le conteneur accordéon parent de cet item
            const parentAccordion = parentItem.closest('.accordion');
            if (!parentAccordion) return; // Sécurité

            // 3. Sélectionner UNIQUEMENT les triggers qui sont des enfants directs d'items
            //    eux-mêmes enfants directs de ce parentAccordion (pour éviter de sélectionner trop profond)
            const siblingItems = Array.from(parentAccordion.children).filter(el => el.classList.contains('accordion-item'));

             // 4. Si on VIENT D'OUVRIR l'élément cliqué, fermer les autres frères
            if (!isCurrentlyExpanded) { // On vérifie si on vient d'ouvrir (était false -> devient true)
                siblingItems.forEach(item => {
                    // Ne pas fermer l'élément qu'on vient d'ouvrir
                    if (item === parentItem) return;

                    const otherTrigger = item.querySelector('.accordion-trigger');
                    const otherContent = item.querySelector('.accordion-content');

                    if (otherTrigger && otherContent) {
                        otherTrigger.setAttribute('aria-expanded', 'false');
                        otherContent.classList.remove('is-open');
                    }
                });
            }
        });
    });

}); // Fin DOMContentLoaded

