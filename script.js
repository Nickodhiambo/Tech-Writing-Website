const filterButtons = document.querySelectorAll(".filter-btns");
const filterableCards = document.querySelectorAll(".card");

const filterArticles = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.style.display = "none";

        if (e.target.dataset.name === card.dataset.name || e.target.dataset.name === "all"){
            card.style.display = "block";
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", filterArticles);
})