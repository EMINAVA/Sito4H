const searchbar = document.querySelector(".searchbar");
const searchbarWrapper = document.querySelector(".top-searchbar-wrapper");

searchbarWrapper.addEventListener("mouseenter", () => {
    if ((document.activeElement === searchbar)) return;
    searchbarWrapper.style.transform = "scale(1.1)"
    searchbarWrapper.style.zIndex = "1";
});

function reduce() {
    searchbarWrapper.style.transform = "scale(1)"
    searchbarWrapper.style.zIndex = "0";
}
searchbarWrapper.addEventListener("mouseleave", reduce);
searchbar.addEventListener("click", reduce);