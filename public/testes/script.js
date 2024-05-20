document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var slides = document.querySelectorAll('.slide');
    var modalContent = document.getElementById('modal-slide-content');
    var controls = document.querySelectorAll('.control');
  
    slides.forEach(function(slide) {
      slide.addEventListener('click', function() {
        var slideId = this.getAttribute('data-slide-id');
        modalContent.textContent = 'Conteúdo do Slide ' + slideId;
        modal.style.display = 'block';
      });
    });
  
    var closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    var slideIndex = 0;
    showSlides();
  
    function showSlides() {
      var i;
      var slides = document.querySelectorAll('.slide');
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = 'block';  
  
      // Atualiza o indicador de controle
      updateControls(slideIndex);
  
      setTimeout(showSlides, 3000); // Tempo em milissegundos para cada slide
    }
  
    // Função para mudar para um slide específico
    window.currentSlide = function(n) {
      slideIndex = n;
      showSlides();
    }
  
    // Função para atualizar os indicadores de controle
    function updateControls(n) {
      controls.forEach(function(control, index) {
        if (index === (n - 1)) {
          control.classList.add('active');
        } else {
          control.classList.remove('active');
        }
      });
    }
  });