const botoesTenis = document.querySelectorAll(".botaoTenis");
const slides = document.querySelectorAll(".slide");
const coresBg = ["vermelho", "cinza", "verde", "marrom"];

botoesTenis.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        // Remove a classe active do slide e botão atual
        document.querySelector(".slide.active")?.classList.remove("active");
        document.querySelector(".botaoTenis.active")?.classList.remove("active");

        // Ativa o slide e botão clicado
        slides[index].classList.add("active");
        botao.classList.add("active");

        // Limpa as cores de todos os slides
        slides.forEach(slide => coresBg.forEach(cor => slide.classList.remove(cor)));

        // Adiciona a cor correta no slide ativo
        slides[index].classList.add(coresBg[index]);
    });
});
