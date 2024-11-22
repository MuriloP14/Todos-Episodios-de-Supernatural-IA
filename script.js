document.addEventListener("DOMContentLoaded", () => {
    const temporadas = document.querySelectorAll(".temporada");
    const loadMoreBtn = document.getElementById("loadMore");
    let visibleCount = 3; // Exibe inicialmente 3 temporadas

    // Exibe apenas temporadas visíveis
    function updateVisibility() {
        temporadas.forEach((temporada, index) => {
            temporada.style.display = index < visibleCount ? "block" : "none";
        });
    }

    loadMoreBtn.addEventListener("click", () => {
        visibleCount += 3; // Mostra mais 3 temporadas por vez
        updateVisibility();

        if (visibleCount >= temporadas.length) {
            loadMoreBtn.style.display = "none"; // Esconde o botão se todas forem exibidas
        }
    });

    updateVisibility();
});