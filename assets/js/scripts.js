const botao = document.querySelector(".btn-fixed");

botao.addEventListener ("click", function () {
    window.scrollTo(0,0);
});

window.addEventListener ("scroll", function () {
    if (window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});