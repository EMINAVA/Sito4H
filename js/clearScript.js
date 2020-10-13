const searchBar = document.querySelector(".searchbar");
const clearImg = document.querySelector("#clear-icon");

searchBar.addEventListener("keyup", function() {
    if (!searchBar.value) {
        clearImg.style.visibility = "hidden";
    } else {
        clearImg.style.visibility = "visible";
    }
})


clearImg.addEventListener("click", function() {
    searchBar.value = "";
    clearImg.style.visibility = "hidden";
    searchBar.focus();
})