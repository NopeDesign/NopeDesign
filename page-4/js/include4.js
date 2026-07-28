async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

// Corrigido: Caminhos relativos ao page-1.html
loadComponent('topo4', 'components/topo4.html');
loadComponent('carrosel4', 'components/carrosel4.html');
