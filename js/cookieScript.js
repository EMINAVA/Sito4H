const cookieButton = document.querySelector(".cookie-popup-button");
const cookiePopup = document.querySelector(".cookie-popup");
const showCookie = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
    hide(); 
    localStorage.cookieAccepted = "true";
});

function hide() {
    if (cookiePopup.style.bottom == "-4em") return;
    cookiePopup.style.animationName = "hide";
    cookiePopup.style.bottom = "-4em";
}
function show() {
    if (cookiePopup.style.bottom == "0.5em") return;
    cookiePopup.style.animationName = "show";
    cookiePopup.style.bottom = "0.5em";
}
showCookie.addEventListener("click", show);

function load() {
    if (localStorage.cookieAccepted == "true") return;
    else show();
}

load();