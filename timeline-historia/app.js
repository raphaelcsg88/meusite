// Timeline Histórica da Humanidade - JavaScript

class HistoricalTimeline {
    constructor() {
        this.timelineItems = document.querySelectorAll('.timeline-item');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.searchInput = document.getElementById('searchInput');
        this.backToTopButton = document.getElementById('backToTop');
        this.expandButtons = document.querySelectorAll('.expand-btn');
        
        this.currentFilter = 'all';
        this.searchTerm = '';
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.animateTimelineItems();
        this.updateBackToTopVisibility();
    }
    
    setupEventListeners() {
        // Filtros de período
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleFilterChange(e.target.dataset.period);
            });
        });
        
        // Sistema de busca
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        
        // Botões de expandir/colapsar
        this.expandButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.toggleExpand(e.target);
            });
        });
        
        // Botão voltar ao topo
        this.backToTopButton.addEventListener('click', () => {
            this.scrollToTop();
        });
        
        // Scroll para mostrar/ocultar botão voltar ao topo
        window.addEventListener('scroll', () => {
            this.updateBackToTopVisibility();
        });
        
        // Smooth scroll para links internos
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    this.smoothScrollTo(targetElement);
                }
            }
        });
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Adiciona um pequeno delay para cada item para criar efeito cascata
                    const index = Array.from(this.timelineItems).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                }
            });
        }, observerOptions);
        
        this.timelineItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    handleFilterChange(period) {
        this.currentFilter = period;
        
        // Atualizar botões ativos
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.period === period) {
                btn.classList.add('active');
            }
        });
        
        // Aplicar filtro
        this.applyFilters();
        
        // Anunciar mudança para leitores de tela
        this.announceFilterChange(period);
    }
    
    handleSearch(searchTerm) {
        this.searchTerm = searchTerm.toLowerCase().trim();
        this.applyFilters();
        
        // Anunciar resultados da busca
        this.announceSearchResults();
    }
    
    applyFilters() {
        let visibleCount = 0;
        
        this.timelineItems.forEach(item => {
            const period = item.dataset.period;
            const title = item.querySelector('.timeline-title').textContent.toLowerCase();
            const description = item.querySelector('.timeline-description').textContent.toLowerCase();
            
            // Verificar filtro de período
            const periodMatch = this.currentFilter === 'all' || period === this.currentFilter;
            
            // Verificar busca de texto
            const searchMatch = this.searchTerm === '' || 
                               title.includes(this.searchTerm) || 
                               description.includes(this.searchTerm) ||
                               period.toLowerCase().includes(this.searchTerm);
            
            if (periodMatch && searchMatch) {
                item.classList.remove('filtered-out', 'search-hidden');
                item.style.display = 'flex';
                visibleCount++;
                
                // Re-animar item se necessário
                setTimeout(() => {
                    item.classList.add('visible');
                }, 100);
            } else {
                item.classList.add(periodMatch ? 'search-hidden' : 'filtered-out');
                item.style.display = 'none';
                item.classList.remove('visible');
            }
        });
        
        // Mostrar mensagem se não houver resultados
        this.handleNoResults(visibleCount === 0);
    }
    
    handleNoResults(showNoResults) {
        let noResultsElement = document.querySelector('.no-results');
        
        if (showNoResults && !noResultsElement) {
            noResultsElement = this.createNoResultsMessage();
            document.querySelector('.timeline').appendChild(noResultsElement);
        } else if (!showNoResults && noResultsElement) {
            noResultsElement.remove();
        }
    }
    
    createNoResultsMessage() {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <h3>Nenhum resultado encontrado</h3>
            <p>Tente ajustar os filtros ou termo de busca para encontrar eventos históricos.</p>
        `;
        return noResults;
    }
    
    toggleExpand(button) {
        const timelineText = button.closest('.timeline-text');
        const expandable = timelineText.querySelector('.timeline-expandable');
        
        if (expandable.classList.contains('hidden')) {
            // Expandir
            expandable.classList.remove('hidden');
            expandable.style.maxHeight = expandable.scrollHeight + 'px';
            button.textContent = 'Ver menos';
            
            // Scroll suave para mostrar o conteúdo expandido
            setTimeout(() => {
                const rect = expandable.getBoundingClientRect();
                const isInView = rect.bottom <= window.innerHeight;
                if (!isInView) {
                    expandable.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }
            }, 300);
            
        } else {
            // Colapsar
            expandable.style.maxHeight = '0';
            expandable.classList.add('hidden');
            button.textContent = 'Ver mais';
        }
    }
    
    updateBackToTopVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 300) {
            this.backToTopButton.classList.add('visible');
        } else {
            this.backToTopButton.classList.remove('visible');
        }
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    smoothScrollTo(element) {
        const offsetTop = element.offsetTop - 100; // Offset para navbar fixa
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    animateTimelineItems() {
        // Animar itens que já estão visíveis na tela
        this.timelineItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 150);
            }
        });
    }
    
    announceFilterChange(period) {
        const announcement = period === 'all' 
            ? 'Mostrando todos os períodos históricos' 
            : `Filtrando por ${period}`;
            
        this.announceToScreenReader(announcement);
    }
    
    announceSearchResults() {
        const visibleItems = document.querySelectorAll('.timeline-item:not(.filtered-out):not(.search-hidden)');
        const count = visibleItems.length;
        
        let announcement;
        if (this.searchTerm === '') {
            announcement = 'Busca limpa, mostrando todos os resultados';
        } else if (count === 0) {
            announcement = 'Nenhum resultado encontrado para a busca';
        } else if (count === 1) {
            announcement = '1 resultado encontrado';
        } else {
            announcement = `${count} resultados encontrados`;
        }
        
        this.announceToScreenReader(announcement);
    }
    
    announceToScreenReader(message) {
        // Criar elemento para anúncio de acessibilidade
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        // Remover após o anúncio
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // Método para adicionar evento personalizado
    addCustomEvent(eventName, callback) {
        document.addEventListener(eventName, callback);
    }
    
    // Método para disparar eventos personalizados
    dispatchCustomEvent(eventName, detail = {}) {
        const event = new CustomEvent(eventName, { detail });
        document.dispatchEvent(event);
    }
}

// Classe para gerenciar funcionalidades adicionais
class TimelineEnhancements {
    constructor(timeline) {
        this.timeline = timeline;
        this.init();
    }
    
    init() {
        this.setupKeyboardNavigation();
        this.setupTouchGestures();
        this.setupResizeHandler();
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC para limpar busca
            if (e.key === 'Escape' && this.timeline.searchInput.value) {
                this.timeline.searchInput.value = '';
                this.timeline.handleSearch('');
                this.timeline.searchInput.blur();
            }
            
            // Enter para expandir/colapsar item focado
            if (e.key === 'Enter' && e.target.classList.contains('expand-btn')) {
                e.target.click();
            }
        });
    }
    
    setupTouchGestures() {
        let startY = 0;
        let startTime = 0;
        
        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startTime = Date.now();
        });
        
        document.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            const distance = startY - endY;
            const duration = endTime - startTime;
            
            // Gesto rápido para cima = scroll para o topo
            if (distance > 100 && duration < 300) {
                this.timeline.scrollToTop();
            }
        });
    }
    
    setupResizeHandler() {
        let resizeTimeout;
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Re-calcular posições após resize
                this.timeline.animateTimelineItems();
            }, 250);
        });
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar timeline principal
    const timeline = new HistoricalTimeline();
    
    // Inicializar melhorias
    const enhancements = new TimelineEnhancements(timeline);
    
    // Event listeners para interações avançadas
    timeline.addCustomEvent('timelineFilterChanged', (e) => {
        console.log('Filtro alterado para:', e.detail.period);
    });
    
    timeline.addCustomEvent('timelineSearchChanged', (e) => {
        console.log('Busca alterada para:', e.detail.searchTerm);
    });
    
    // Adicionar suporte para URL hash (navegação por âncoras)
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                timeline.smoothScrollTo(target);
            }
        }, 500);
    }
    
    // Preload de imagens para melhor performance
    const images = document.querySelectorAll('.timeline-image img');
    images.forEach(img => {
        const imageLoader = new Image();
        imageLoader.src = img.src;
    });
    
    console.log('Timeline Histórica da Humanidade inicializada com sucesso!');
});