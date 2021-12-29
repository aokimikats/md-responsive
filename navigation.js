//Dynamic collections
const navigationList = document.getElementsByClassName("navigation__list")[0];
const navigationItems = document.getElementsByClassName("navigation__item");

//Static collections
const navigationListQuery = document.querySelector(".navigation__list");
const navigationItemsQuery = document.querySelectorAll(".navigation__item");

navigationListQuery.addEventListener("click", onNavigationListClick);

function onNavigationListClick(event) {
    if (event.target == navigationListQuery) return;
    for (let i = 0; i < navigationItemsQuery.length; i++) {
        navigationItemsQuery[i].style.background = "none";
    }
    event.target.style.background = "#c9c9c9";
    console.log(event.target.innerText);
}

(function () {
    console.log(navigationItemsQuery[0].style.background = "#c9c9c9");
}());