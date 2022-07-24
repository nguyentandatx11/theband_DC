const menuE = document.querySelector('.menu');

menuE.addEventListener('click', function(e) {
    const navMobileE = document.querySelector('.nav-moble');
    navMobileE.style.transform = 'translateX(0)';
    const closeNavMobileE = document.querySelector('.ti-close');

    closeNavMobileE.onclick = function() {
        navMobileE.style.transform = 'translateX(100%)';
        overlayE.style.display = 'none';
    }

    const overlayE = document.querySelector('.overlay');
    overlayE.style.display = 'block';

    overlayE.onclick = function() {
        navMobileE.style.transform = 'translateX(100%)';
        overlayE.style.display = 'none  ';

    }
})