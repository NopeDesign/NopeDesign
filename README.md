# 🚀 NOPE Design - Site Oficial

Bem-vindo ao repositório oficial do site da **NOPE Design**! 
Este projeto é a vitrine digital de uma agência inovadora, especializada em unir tecnologia, marketing, design de experiência e estratégia de vendas para escalar negócios.

🔗 **Acesse o site ao vivo:** [Insira o link do seu GitHub Pages aqui]

---

## 📌 Sobre o Projeto

O site foi desenvolvido com foco em **performance, responsividade e componentização**. Uma das características técnicas mais interessantes deste projeto é o uso de JavaScript Vanilla (puro) para carregar componentes HTML dinamicamente (como Navbar e Footer), simulando o comportamento de frameworks modernos (como React ou Vue), mas mantendo a leveza de um site estático.

### 🌟 Principais Funcionalidades
- **Loading Screen Customizada:** Tela de carregamento imersiva com simulação de progresso e transição suave (fade-out).
- **Arquitetura Baseada em Componentes:** Injeção de trechos HTML via `fetch API`, facilitando a manutenção do código.
- **Portfólio Dinâmico com Paginação:** Galeria de projetos gerada via JavaScript, com renderização condicional inteligente e botões de paginação.
- **Integração Direta com WhatsApp:** Links de serviços parametrizados que já abrem o WhatsApp da agência com mensagens pré-definidas.
- **Design Responsivo:** Adaptado para funcionar perfeitamente em desktops, tablets e smartphones (Mobile First).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Semântico e acessível (uso de tags como `<main>`, `<section>`, `aria-labels`).
- **CSS3:** Estilização modularizada, Flexbox, Grid e animações customizadas.
- **JavaScript (Vanilla):** Lógica de paginação, carregamento de componentes assíncronos (`async/await`) e controle de DOM.
- **Google Fonts:** Tipografia 'Inter' para um visual limpo e moderno.

---

## 📂 Estrutura do Projeto

O projeto está dividido em pastas para cada página, separando claramente os estilos, scripts e componentes de cada seção:

```text
📦 nope-design
 ┣ 📜 index.html              # Tela inicial (Loading Screen)
 ┣ 📂 page-1                  # Início (Página Principal)
 ┣ 📂 page-2                  # Quem Somos (História, Fundadora Luara)
 ┣ 📂 page-3                  # Serviços (Artes, Vídeos, Gestão, Leads)
 ┣ 📂 page-4                  # Portfólio (Galeria de Projetos)
 ┣ 📂 components              # Fragmentos HTML (topo, footer, cards) reutilizáveis
 ┣ 📂 css                     # Folhas de estilo modularizadas
 ┣ 📂 js                      # Scripts (include.js, scripts.js, loading.js)
 ┗ 📂 src                     # Assets (Imagens, logos, vídeos e mockups)