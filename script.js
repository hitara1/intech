const searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            let text = card.textContent.toLowerCase();
            card.style.display = text.includes(filter) ? "block" : "none";
        });
    });
}


document.cookie = "visitor=AutoHubUser; max-age=86400; path=/";


const priceFilter = document.getElementById("priceFilter");

if (priceFilter) {
    priceFilter.addEventListener("change", function () {
        const selectedPrice = priceFilter.value;
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const carPrice = parseInt(card.getAttribute("data-price"));

            if (selectedPrice === "all" || carPrice <= selectedPrice) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}




