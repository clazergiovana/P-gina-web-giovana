const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");
    
    // Altera o emoji do botão conforme o tema
    if (document.body.classList.contains("tema-escuro")) {
        btnTemaEscuro.textContent = "☀️";
    } else {
        btnTemaEscuro.textContent = "🌙";
    }
});

const botoes = document.querySelectorAll(".btn-acao");

botoes.forEach(function (botao) {
    let curtiu = false;
    
    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        
        if (!curtiu) {
            texto.textContent = Number(texto.textContent) + 1;
            curtiu = true;
            botao.style.borderColor = "var(--cor-acento)";
        } else {
            texto.textContent = Number(texto.textContent) - 1;
            curtiu = false;
            botao.style.borderColor = "var(--cor-borda)";
        }
    });
});