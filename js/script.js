$('.imagem').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
	
new WOW().init();

document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
  
    openModalBtn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const openModal = document.getElementById("openModal");
    const modal = document.getElementById("meuModal");
    const closeBtn = document.getElementsByClassName("meuFechar")[0];
  
    openModal.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
  window.addEventListener('load', function() {
    // Adiciona a classe 'loaded' à div .loader-container após 2 segundos (2000 milissegundos)
    setTimeout(function() {
      document.querySelector('.loader-container').classList.add('loaded');
    }, 2000);
  
    // Adiciona a classe 'loaded' à seção #site-main após 2.5 segundos (2500 milissegundos)
    setTimeout(function() {
      document.querySelector('#site-main').classList.add('loaded');
    }, 2000);
  });