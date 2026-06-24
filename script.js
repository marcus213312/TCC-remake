// Lógica de Navegação das Abas
function showPage(pageId) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Remove 'active' de todos os botões
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostra a página selecionada
    document.getElementById(pageId).classList.add('active');
    
    // Marca o botão clicado como ativo
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Lógica do Carrossel de Destaques
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

if (slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // Muda a cada 5 segundos
}

// Lógica Simulada de Login (Para mostrar/esconder botões de ação)
function toggleLogin() {
    const body = document.body;
    const statusText = document.getElementById('auth-status');
    
    if (body.classList.contains('logged-in')) {
        body.classList.remove('logged-in');
        statusText.innerText = "Visitante (Apenas Leitura)";
    } else {
        body.classList.add('logged-in');
        statusText.innerText = "Logado (Pode postar)";
    }
}
