async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

// Corrigido: Caminhos relativos ao page-1.html
loadComponent('topo', 'components/topo-site.html');
loadComponent('meio', 'components/meio-site.html');
loadComponent('cards', 'components/cards-site.html');
loadComponent('footer', 'components/footer-site.html');