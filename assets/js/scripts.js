let botao = document.getElementsByClassName('.btn-fixed');

window.addEventListener("scroll", function(event) {
    if (window.scrollY == 0) {
        botao.classList.remove('.visible');
    } else {
        botao.classList.add('.visible');
    }
})