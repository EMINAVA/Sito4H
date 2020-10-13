const darkModeButon = document.querySelector("#dark-mode-btn");
const body = document.querySelector("body");
// const searchBar = document.querySelector("#new-search-bar")
const header = document.querySelector("#top");


function loadCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var res = cookies[i].split("=");
        if (res[0].trim() == "darkMode") {
            if (res[1].trim() == "true") {
                attivaDarkMode();
            }
        }
    }
}

function disattivaDarkMode() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.dark_mode = false;
    document.cookie = `darkMode=false; expires=${getDate()};`;
}

function getDate() {
    var date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date.toUTCString();
}

function attivaDarkMode() {
    /*
    body.style.backgroundColor = "#2D2D2D";
    searchBar.style.backgroundColor = "#2D2D2D";
    searchBar.style.color = "#CFD2D6";
    header.style.backgroundColor = "#393939";
    body.style.color = "#E7E8E5";
    body.dark_mode = true;*/
    var classes = searchBar.className.split(" ");
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].endsWith("-light")) {
            classes[i] = classes[i].replace("-light", "-dark")
        }
    }
    console.log(classes.join(" "));
    searchBar.className = classes.join(" ");
    
    document.cookie = `darkMode=true; expires=${getDate()};`;
}

darkModeButon.addEventListener("click", function() {
    if (body.dark_mode) { 
        disattivaDarkMode();
    } else { 
        attivaDarkMode();
    }
})

loadCookies();
