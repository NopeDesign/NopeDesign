window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    const bar = document.getElementById('bar');
    const percentTxt = document.getElementById('percent');
    const statusTxt = document.getElementById('status-text');

    let currentPercent = 0;
    
    // Sorteia um tempo aleatório para dar sensação de carregamento real
    const interval = setInterval(() => {
        // Aumenta a porcentagem gradativamente
        currentPercent += Math.floor(Math.random() * 15) + 5; 
        
        if (currentPercent >= 100) {
            currentPercent = 100;
            clearInterval(interval);
            
            // Finaliza a barra e os textos
            bar.style.width = "100%";
            percentTxt.innerHTML = "100%";
            statusTxt.innerHTML = "Acesso Liberado.";
            statusTxt.style.color = "white";

            // Inicia o fade-out após concluir o 100%
            setTimeout(() => {
                loader.classList.add('fade-out');
                
                // Redireciona EXATAMENTE 1 segundo depois (sincronizado com o CSS)
                setTimeout(() => {
                    // CORREÇÃO: Caminho relativo ajustado para o GitHub Pages com o ./
                    window.location.href = "./page-1/page-1.html"; 
                }, 1000);

            }, 600); 
        } else {
            // Atualiza a barra durante o carregamento
            bar.style.width = currentPercent + "%";
            percentTxt.innerHTML = currentPercent + "%";
            
            // Muda a frase na metade do caminho pra dar um charme extra
            if(currentPercent > 50 && currentPercent < 80) {
                statusTxt.innerHTML = "Carregando assets...";
            }
        }
    }, 150); 
});