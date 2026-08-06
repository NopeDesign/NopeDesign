/**
 * =========================================
 *  SISTEMA DE PORTFÓLIO E PAGINAÇÃO
 * =========================================
 */

// 1. Dados dos Projetos
const projetosData = [
    { 
        titulo: "DC Theodoro", 
        desc: "Identidade Visual e Social Media", 
        // Caminho ajustado com ./
        img: "./src/DC-Theodoro.png",
        link: "https://www.instagram.com/dcteodoroseguros?igsh=eG1laXkzZDh0OGJz"
    },
    { 
        titulo: "BV Pinho", 
        desc: "Identidade Visual, Triagem de Leads, Captação de Leads e Social Media", 
        // Caminho ajustado com ./
        img: "./src/BV-PINHO.png",
        link: "https://www.instagram.com/bv_pinho?igsh=MWZkOXVoZm1tdnFxbw%3D%3D"
    },
    { 
        titulo: "Aguiar Corretora", 
        desc: "Captação de Leads", 
        // Não tem img nem link, o código agora vai ignorar essas partes sem quebrar!
    },
      { 
        titulo: "Corretora Caslu", 
        desc: "Captação de Leads", 
        // Caminho ajustado com ./
        img: "./src/Caslu.png",
        link: "https://www.instagram.com/corretoracasluseguros?igsh=N3g0enRqMXM3bzJn"
    },
    { 
        titulo: "Brand Seguros", 
        desc: "Identidade Visual, Triagem de Leads, Captação de Leads e Social Media", 
        // Caminho ajustado com ./
        img: "./src/BRAND.png",
        link: "https://www.instagram.com/brand.seguros?igsh=MWVhdjAyNDl5bzFmZg%3D%3D"
    },
    { 
        titulo: "Templo Ventos de Oya", 
        desc: "Social media",
        // Caminho ajustado com ./
        img: "./src/temploventosdeoya.png",
        link: "https://www.instagram.com/templo_ventos_de_oya?igsh=MWh1dmxxZWZ2d2NsNQ=="
    },
    { 
        titulo: "Black Rose Mindset", 
        desc: "Gerenciamento de Tiktok",
        // Caminho ajustado com ./
        img: "./src/BlackroseMindset.png",  
        link: "https://www.tiktok.com/@blackrose.mindset"
    },
    // Adicione mais projetos aqui...
];

// 2. Classe de Gerenciamento do Portfólio
class PortfolioManager {
    constructor(projetos, itensPorPagina = 8) {
        this.projetos = projetos;
        this.itensPorPagina = itensPorPagina;
        this.paginaAtual = 1;
        this.totalPaginas = Math.ceil(projetos.length / itensPorPagina);

        this.grid = document.getElementById('portfolio-grid');
        this.pageNumbersContainer = document.getElementById('page-numbers');
        this.btnPrev = document.getElementById('prev');
        this.btnNext = document.getElementById('next');
    }

    init() {
        if (!this.grid) {
            console.warn("Aviso: Container do portfólio não encontrado na página.");
            return;
        }

        this.setupEventListeners();
        this.displayPage(this.paginaAtual);
    }

    displayPage(pagina) {
        this.grid.innerHTML = ""; 
        const start = this.itensPorPagina * (pagina - 1);
        const end = start + this.itensPorPagina;
        const itensExibidos = this.projetos.slice(start, end);

        const fragment = document.createDocumentFragment();

        itensExibidos.forEach(p => {
            const card = document.createElement('article');
            card.className = 'card';
            
            // VERIFICAÇÃO INTELIGENTE (Renderização Condicional)
            // Se p.img existir, cria a tag <img>. Se não, devolve vazio ('').
            const htmlImagem = p.img 
                ? `<img src="${p.img}" alt="Preview do projeto: ${p.titulo}" loading="lazy">` 
                : ``;

            // Se p.link existir, cria o botão <a>. Se não, devolve vazio ('').
            const htmlBotao = p.link 
                ? `<a href="${p.link}" class="btn-projeto" aria-label="Ver detalhes de ${p.titulo}" target="_blank" rel="noopener noreferrer">Ver Projeto</a>` 
                : ``;

            // Monta o card apenas com o que existe
            card.innerHTML = `
                ${htmlImagem}
                <h3>${p.titulo}</h3>
                <p>${p.desc}</p>
                ${htmlBotao}
            `;
            
            fragment.appendChild(card);
        });

        this.grid.appendChild(fragment);
        this.updatePagination();
    }

    updatePagination() {
        if (!this.pageNumbersContainer) return;
        
        this.pageNumbersContainer.innerHTML = "";

        for (let i = 1; i <= this.totalPaginas; i++) {
            const btn = document.createElement('button');
            btn.innerText = i;
            btn.setAttribute('aria-label', `Ir para a página ${i}`);

            if (i === this.paginaAtual) {
                btn.classList.add('active');
                btn.setAttribute('aria-current', 'page');
            }

            btn.addEventListener('click', () => {
                this.paginaAtual = i;
                this.displayPage(this.paginaAtual);
                this.grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });

            this.pageNumbersContainer.appendChild(btn);
        }

        if (this.btnPrev) this.btnPrev.disabled = (this.paginaAtual === 1);
        if (this.btnNext) this.btnNext.disabled = (this.paginaAtual === this.totalPaginas);
    }

    setupEventListeners() {
        if (this.btnPrev) {
            this.btnPrev.addEventListener('click', () => {
                if (this.paginaAtual > 1) { 
                    this.paginaAtual--; 
                    this.displayPage(this.paginaAtual); 
                }
            });
        }

        if (this.btnNext) {
            this.btnNext.addEventListener('click', () => {
                if (this.paginaAtual < this.totalPaginas) { 
                    this.paginaAtual++; 
                    this.displayPage(this.paginaAtual); 
                }
            });
        }
    }
}

// 3. Inicialização
document.addEventListener('DOMContentLoaded', () => {
    if (projetosData.length > 0) {
        const portfolio = new PortfolioManager(projetosData, 8);
        portfolio.init();
    }
});