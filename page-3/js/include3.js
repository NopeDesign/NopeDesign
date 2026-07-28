async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

// Corrigido: Caminhos relativos ao page-1.html
loadComponent('topo3', 'components/topo3.html');
loadComponent('primeirocard3', 'components/primeirocard3.html');
loadComponent('segundocard3', 'components/segundocard3.html');
loadComponent('meio3', 'components/meio3.html');
loadComponent('footer3', 'components/footer3.html');