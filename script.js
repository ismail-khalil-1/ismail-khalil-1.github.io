document.addEventListener('DOMContentLoaded', function() {
    const showFirstButton = document.getElementById('showFirst');
    const showSecondButton = document.getElementById('showSecond');
    const showThirdButton = document.getElementById('showThird');
    const showForthdButton = document.getElementById('showFourth');
    const showFifthButton = document.getElementById('showFifth');


    const firstDiv = document.querySelector('.first');
    const secondDiv = document.querySelector('.second');
    const thirdDiv = document.querySelector('.third');
    const forthDiv = document.querySelector('.forth');
    const fifthDiv = document.querySelector('.fifth');

    showFirstButton.addEventListener('click', function() {
        firstDiv.style.display = 'block';
        secondDiv.style.display = 'none';
        thirdDiv.style.display = 'none';
        forthDiv.style.display = 'none';
        fifthDiv.style.display = 'none';
    });

    showSecondButton.addEventListener('click', function() {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'block';
        thirdDiv.style.display = 'none';
        forthDiv.style.display = 'none';
        fifthDiv.style.display = 'none';
    });


    showThirdButton.addEventListener('click', function() {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'none';
        thirdDiv.style.display = 'block';
        forthDiv.style.display = 'none';
        fifthDiv.style.display = 'none';
    });


    showForthdButton.addEventListener('click', function() {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'none';
        thirdDiv.style.display = 'none';
        forthDiv.style.display = 'block';
        fifthDiv.style.display = 'none';
    });


    showFifthButton.addEventListener('click', function() {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'none';
        thirdDiv.style.display = 'none';
        forthDiv.style.display = 'none';
        fifthDiv.style.display = 'block';
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav__item a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove the active class and aria-current attribute from all links
            links.forEach(l => {
                l.classList.remove('router-link-exact-active', 'router-link-active');
                l.removeAttribute('aria-current');
            });

            // Add the active class and aria-current attribute to the clicked link
            link.classList.add('router-link-exact-active', 'router-link-active');
            link.setAttribute('aria-current', 'page');
        });
    });
});