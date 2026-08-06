async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

// id = topo4 (bate com seu HTML novo)
// file = ./components/topo.html (caminho relativo ajustado para o GitHub Pages)
loadComponent('topo4', './components/topo.html');
loadComponent('footer', './components/footer.html');