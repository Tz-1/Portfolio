function toggleLanguage(language) {
// Get all elements with the class 'en' and 'es'
var elementsEn = document.getElementsByClassName('en');
var elementsEs = document.getElementsByClassName('es');
var elementsSkEn = document.getElementsByClassName('sk-en');
var elementsSkEs = document.getElementsByClassName('sk-es');

if (language === 'english') {
    // Set the display style for elements with class 'en' to 'block'
    for (var i = 0; i < elementsEn.length; i++) {
    elementsEn[i].style.display = 'block';
    }
    // Set the display style for elements with class 'es' to 'none'
    for (var i = 0; i < elementsEs.length; i++) {
    elementsEs[i].style.display = 'none';
    }
} 
else if (language === 'spanish') {
    // Set the display style for elements with class 'en' to 'none'
    for (var i = 0; i < elementsEn.length; i++) {
    elementsEn[i].style.display = 'none';
    }
    // Set the display style for elements with class 'es' to 'block'
    for (var i = 0; i < elementsEs.length; i++) {
    elementsEs[i].style.display = 'block';
    }
}

//for Skills list items
if (language === 'english') {
    for (var i = 0; i < elementsSkEn.length; i++) {
    elementsSkEn[i].style.display = 'list-item';
    }
    for (var i = 0; i < elementsSkEs.length; i++) {
    elementsSkEs[i].style.display = 'none';
    }
} 
else if (language === 'spanish') {
    for (var i = 0; i < elementsSkEn.length; i++) {
    elementsSkEn[i].style.display = 'none';
    }
    for (var i = 0; i < elementsSkEs.length; i++) {
    elementsSkEs[i].style.display = 'list-item';
    }
}

if (language === 'english'){
    document.getElementById('cv-en').style.display = 'inline-block';
    document.getElementById('cv-es').style.display = 'none'
}
else if (language === 'spanish') {
    document.getElementById('cv-es').style.display = 'inline-block';
    document.getElementById('cv-en').style.display = 'none'
}
}

//Carousel 
var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
        );
    }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
        );
    }
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}

$(document).ready(function () {
    function fillProgressBar(barId, targetValue) {
        var progressBar = document.getElementById(barId);
        var currentValue = 0;
        var increment = 1;

    var interval = setInterval(function () {
        if (currentValue < targetValue) {
            progressBar.value = currentValue;
            currentValue += increment;
        } else {
            progressBar.value = targetValue;
            clearInterval(interval);
        }
      }, 20); // Velocidad de la animación en milisegundos
    }

    // Esta función verifica si el elemento está en el viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var htmlProgressBar = document.getElementById("html-progress");
        var jsProgressBar = document.getElementById("js-progress");
        var sqlProgressBar = document.getElementById("sql-progress");
        var pyProgressBar = document.getElementById("py-progress");
        var njsProgressBar = document.getElementById("n.js-progress");
        var excProgressBar = document.getElementById("exc-progress");

    if (isElementInViewport(htmlProgressBar) && htmlProgressBar.value === 0) {
        fillProgressBar("html-progress", 95);
    }

    if (isElementInViewport(jsProgressBar) && jsProgressBar.value === 0) {
        fillProgressBar("js-progress", 70);
    }

    if (isElementInViewport(sqlProgressBar) && sqlProgressBar.value === 0) {
        fillProgressBar("sql-progress", 85);
    }

    if (isElementInViewport(pyProgressBar) && pyProgressBar.value === 0) {
        fillProgressBar("py-progress", 80);
    }

    if (isElementInViewport(njsProgressBar) && njsProgressBar.value === 0) {
        fillProgressBar("n.js-progress", 20);
    }

    if (isElementInViewport(excProgressBar) && excProgressBar.value === 0) {
        fillProgressBar("exc-progress", 92);
    }
    }

    // Agregar un listener para el evento scroll
    window.addEventListener("scroll", handleScroll);

    // Llama a handleScroll al cargar la página para verificar si las barras de progreso están en el viewport
    handleScroll();
});

//Animacion de texto
var typed = new Typed('#title2', {
    strings: ["Full Stack Python developer Jr."],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true,
});

// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento con la clase "animated-text"
    var animatedTextElement = document.querySelector(".animated-text");

    // Función para verificar si el elemento está en el área visible
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para activar la animación cuando el elemento está en el área visible
    function activateAnimation() {
        var typed;
        if (isElementInViewport(animatedTextElement)) {
            typed = new Typed('#acerca-text-es', {
                strings: [
                    "Soy Tomás y disfruto de la programación y las fascinantes áreas tecnológicas. Recientemente terminé un taller de bootcamp de Talento Digital Chile, lo que me ha brindado conocimientos útiles en HTML, CSS, JavaScript, SQL, Python y otros lenguajes que estoy aprendiendo por mi cuenta.<br><br>" +
                    "Además, desde pequeño he mostrado un gran manejo del inglés de manera fluida, lo que me permite comunicarme y trabajar en entornos internacionales de manera efectiva. Debido a mi experiencia previa en química y farmacología, he desarrollado una gran habilidad por el manejo de datos.<br><br>" +
                    "Mi enfoque ahora se centra en el mundo de la tecnología de la información, donde puedo combinar mi curiosidad y mi pasión por la tecnología y la resolución de problemas.<br><br>" +
                    "Estoy ansioso por lidiar con nuevos retos y oportunidades para aprender y desarrollarme profesionalmente. Siempre tengo la intención de ampliar mi conocimiento y mejorar en varios aspectos de mi vida."
                ],
                typeSpeed: 6,
                backSpeed: 0,
                showCursor: false,
                loop: false,
                onComplete: function(self) {
                    self.stop();
                }
            });
            // Una vez que se active la animación, quita el evento de desplazamiento para no volver a activarla.
            window.removeEventListener("scroll", activateAnimation);
        }
    }

    // Agrega un evento de desplazamiento para verificar cuando el elemento esté en el área visible
    window.addEventListener("scroll", activateAnimation);

    // Activa la animación si el elemento ya está en el área visible cuando se carga la página
    activateAnimation();
});

// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento con la clase "animated-text"
    var animatedTextElement = document.querySelector(".animated-text2");

    // Función para verificar si el elemento está en el área visible
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para activar la animación cuando el elemento está en el área visible
    function activateAnimation() {
        var typed;
        if (isElementInViewport(animatedTextElement)) {
            typed = new Typed('#acerca-text-en', {
                strings: [
                    "I'm Tomás and I enjoy programming and the fascinating technological areas. I recently finished 'Talento Digital Chile' bootcamp, which has given me useful knowledge in HTML, CSS, JavaScript, SQL, Python and other programming languages that I am learning on my own.<br><br>" +
                    "Besides, since I was a child I have shown a great ability to speak and understand English fluently, which allows me to communicate and work in international environments in an effective way.<br><br>" +
                    "Due to my previous experience in chemistry and pharmacology, I have developed a great ability for data management. My focus now is on the IT world, where I can combine my curiosity and passion for technology and problem solving.<br><br>" +
                    "I am eager to deal with new challenges and opportunities to learn and develop professionally. I always intend to expand my knowledge and improve in various aspects of my life."
                ],
                typeSpeed: 6,
                backSpeed: 0,
                showCursor: false,
                loop: false,
                onComplete: function(self) {
                    self.stop();
                }
            });
            // Una vez que se active la animación, quita el evento de desplazamiento para no volver a activarla.
            window.removeEventListener("scroll", activateAnimation);
        }
    }

    // Agrega un evento de desplazamiento para verificar cuando el elemento esté en el área visible
    window.addEventListener("scroll", activateAnimation);

    // Activa la animación si el elemento ya está en el área visible cuando se carga la página
    activateAnimation();
});
