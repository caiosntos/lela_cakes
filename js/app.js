 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var footerOffset = $('footer').offset().top - window.innerHeight;
    
    if (scroll > footerOffset) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

  function ordenarProdutos(ordem) {
    let container = document.getElementById("catalogo");
    let produtos = Array.from(container.getElementsByClassName("produto"));

    produtos.sort((a, b) => {
      let precoA = parseFloat(a.getAttribute("data-preco"));
      let precoB = parseFloat(b.getAttribute("data-preco"));
      return ordem === "asc" ? precoA - precoB : precoB - precoA;
    });
    produtos.forEach(produto => container.appendChild(produto));
}