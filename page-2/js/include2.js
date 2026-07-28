async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

// Corrigido: Caminhos relativos ao page-1.html
loadComponent('topo2', 'components/topo2.html');
loadComponent('meio2', 'components/meio2.html');
loadComponent('cards2', 'components/cards2.html');
loadComponent('cardstriplo2', 'components/cardstriplo2.html');
loadComponent('footer2', 'components/footer2.html');