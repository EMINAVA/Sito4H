const productList = document.querySelector(".product-list-container");
const productListHide = document.querySelector(".product-list-container-hide");
const hideImg = productList.querySelector("img");

productListHide.addEventListener("click", () => {
    // productList.style.animationName = "hide-product-list"
    console.log(productList.style.width);
    if (productList.style.width == "0px")
        productList.style.width = "20%"
    else
        productList.style.width = "0"
});