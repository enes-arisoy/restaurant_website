
const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navBar = document.querySelector(".navbar");


// Button //

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (!(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm))) {
            debugger;
        } else {
            searchForm.classList.remove("active");
        }
    });
});

cartBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(cartItem)        
        ) {
            cartItem.classList.remove("active");
        }
    });
});

menuBtn.addEventListener("click", function () {
    navBar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navBar)        
        ) {
            navBar.classList.remove("active");
        }
    });
});