class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Nuværende indeks af ord
      const current = this.wordIndex % this.words.length;
      // Hent den fulde tekst af det nuværende ord
      const fullTxt = this.words[current];
  
      // Tjek for om ordet bliver slettet
      if(this.isDeleting) {
        // Fjern char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Tilføj char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt ind i elementet
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Sæt hastighed på ord
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // Hvis ordet er færdig skrevet
      if(!this.isDeleting && this.txt === fullTxt) {
        // Hold pause i slutningen
        typeSpeed = this.wait;
        // Sæt delete til ture
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Kør med næste ord
        this.wordIndex++;
        // Hold pause inden næste ord
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init på DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

  var slideIndex = 1;
showSlides(slideIndex);

//Næste/slidet før controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail billeder controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Slide show funktion
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}