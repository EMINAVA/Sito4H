const darkModeButton = document.querySelector(".dark-mode-btn");

function loadCookies() {
    if (getDarkMode())
        activate("-light", "-dark");
}

function getDarkMode() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var res = cookies[i].split("=");
        if (res[0].trim() == "darkMode") {
            if (res[1].trim() == "true") {
                return true;
            }
            return false;
        }
    }
    return false;
}

function getDate() {
    var date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date.toUTCString();
}

function getClasses(element, from, to) {
    var classes = element.className.split(" ");
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].endsWith(from)) {
            classes[i] = classes[i].replace(from, to);
        }
    }
    return classes.join(" ");
}

function changeImages(images, from, to) {
    if (images == null) return;
    images.forEach(image => {
        if (image.src.endsWith(from + ".png"))
            image.src = image.src.replace(from, to);
    });
}

function darkMode() {
    /*
    body.style.backgroundColor = "#2D2D2D";
    searchBar.style.backgroundColor = "#2D2D2D";
    searchBar.style.color = "#CFD2D6";
    header.style.backgroundColor = "#393939";
    body.style.color = "#E7E8E5";
    body.dark_mode = true;*/
    var from = arguments[0];
    var to = arguments[1];
    changeImages(arguments[2], from, to);
    for (var i = 3; i < arguments.length; i++) {
        var element = arguments[i];
        if (NodeList.prototype.isPrototypeOf(element)) {
            element.forEach(element2 => {
                element2.className = getClasses(element2, from, to);
            });
        } else {
            element.className = getClasses(element, from, to);
        }
    };
}

function activate(from, to) {
    darkMode(from, to, 
    document.querySelectorAll(".social-logo"),
    document.querySelectorAll(".input" + from),
    document.querySelector(".footer" + from),
    document.querySelectorAll(".button" + from),
    document.querySelector(".footer-section-central" + from),
    document.querySelectorAll(".footer-section" + from),
    document.querySelector(".top" + from),
    document.querySelector(".main" + from),
);
}
darkModeButton.addEventListener("click", function() {
    if (!getDarkMode()) {
        activate("-light", "-dark");
        document.cookie = `darkMode=true; expires=${getDate()};`;
    } else {
        activate("-dark", "-light");
        document.cookie = `darkMode=false; expires=${getDate()};`;

    }
})
loadCookies();