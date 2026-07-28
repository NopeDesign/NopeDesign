// 1. Sua lista de projetos
const projetos = [
    { titulo: "Uptech", desc: "Identidade Visual", img: "https://via.placeholder.com/300x200" },
    { titulo: "Prime Fitness", desc: "Social Media", img: "https://via.placeholder.com/300x200" },
    { titulo: "Casa da Música", desc: "Website", img: "https://via.placeholder.com/300x200" },
    { titulo: "Alphadot Tech", desc: "Design", img: "https://via.placeholder.com/300x200" },
    { titulo: "Nexi Finance", desc: "Branding", img: "https://via.placeholder.com/300x200" },
    { titulo: "Fusion Burger", desc: "Marketing", img: "https://via.placeholder.com/300x200" },
    { titulo: "Projeto 7", desc: "App", img: "https://via.placeholder.com/300x200" },
    { titulo: "Projeto 8", desc: "UI/UX", img: "https://via.placeholder.com/300x200" },
    { titulo: "Projeto 9", desc: "Web", img: "https://via.placeholder.com/300x200" }
];

const itensPorPagina = 8;
let paginaAtual = 1;

function displayPage(pagina) {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return; // Segurança extra

    grid.innerHTML = ""; 
    let start = itensPorPagina * (pagina - 1);
    let end = start + itensPorPagina;
    let itensExibidos = projetos.slice(start, end);

    itensExibidos.forEach(p => {
        // Criando o elemento via JS para garantir que o navegador aceite
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.titulo}">
            <h3>${p.titulo}</h3>
            <p>${p.desc}</p>
            <a href="#" class="btn-projeto">Ver Projeto</a>
        `;
        grid.appendChild(card);
    });

    setupPagination();
}

function setupPagination() {
    const pageNumbers = document.getElementById('page-numbers');
    if (!pageNumbers) return;
    
    pageNumbers.innerHTML = "";
    let totalPaginas = Math.ceil(projetos.length / itensPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        let btn = document.createElement('button');
        btn.innerText = i;
        if (i === paginaAtual) btn.classList.add('active');
        btn.onclick = () => {
            paginaAtual = i;
            displayPage(paginaAtual);
        };
        pageNumbers.appendChild(btn);
    }

    document.getElementById('prev').onclick = () => {
        if (paginaAtual > 1) { paginaAtual--; displayPage(paginaAtual); }
    };
    document.getElementById('next').onclick = () => {
        let totalPaginas = Math.ceil(projetos.length / itensPorPagina);
        if (paginaAtual < totalPaginas) { paginaAtual++; displayPage(paginaAtual); }
    };
}

// O SEGREDO: Só roda quando o documento estiver totalmente pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de portfólio iniciado!");
    displayPage(1);
});

// No final do seu js/scripts.js
function iniciarPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (grid) {
        displayPage(1);
    } else {
        // Se a div ainda não existe (porque o include é lento), tenta de novo em 100ms
        setTimeout(iniciarPortfolio, 100);
    }
}

iniciarPortfolio();