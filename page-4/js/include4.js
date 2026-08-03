async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

// id = topo4 (bate com seu HTML novo)
// file = components/topo.html (bate com o nome do arquivo na sua pasta)
loadComponent('topo4', 'components/topo.html');
loadComponent('footer', 'components/footer.html');