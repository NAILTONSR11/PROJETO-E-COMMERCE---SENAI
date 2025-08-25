export default function initCarousel() {
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".promo-produtos");

    // Criar botões de navegação
    const btnPrev = document.createElement("button");
    const btnNext = document.createElement("button");

    btnPrev.textContent = "◀";
    btnNext.textContent = "▶";

    // Estilo básico (pode mover isso para o CSS)
    btnPrev.style.position = btnNext.style.position = "absolute";
    btnPrev.style.top = btnNext.style.top = "50%";
    btnPrev.style.transform = btnNext.style.transform = "translateY(-50%)";
    btnPrev.style.left = "10px";
    btnNext.style.right = "10px";
    btnPrev.style.zIndex = btnNext.style.zIndex = "10";

    // Inserir botões no container pai
    container.parentElement.style.position = "relative";
    container.parentElement.appendChild(btnPrev);
    container.parentElement.appendChild(btnNext);

    // Lógica de navegação
    const scrollAmount = 250; // ajuste conforme largura do produto

    btnPrev.addEventListener("click", () => {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnNext.addEventListener("click", () => {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
}
