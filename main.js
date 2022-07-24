// Slider 
var imgSlide = [
    "./assest/img/Slider1.jpg",
    "./assest/img/Slider2.jpg",
    "./assest/img/Slider3.jpg"
]
var textHeadingSilder = [
    "SAI GON",
    "DA NANG", 
    "QUY NHON"
]
var subTextHeadingSilder = [
    "Trap, Asian trap, Cloud rap, Melodic hip-hop, Mumble rap,…",
    "Sol làm nên điều mà chính bản thân mỗi người muốn làm để tạo nên một cái gì đó tuyệt vời ", 
    "Nghe playlist nhạc Sol thì vào link này nhen"
]
const sliderE = document.querySelector('.slider');
const textHeadingSilderE = document.querySelector('.text-heading');
const textDescriptionSilderE = document.querySelector('.text-decription');

// Buy ticket

function closeModal() {
    overlayE.className = 'overlay';
}

const overlayE = document.querySelector('.overlay')
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalContatiner = document.querySelector('.js-modal-container');

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function() {
        overlayE.className= 'overlay open';
        const closeBtn = document.querySelector('.js-close-btn');

        closeBtn.addEventListener('click', closeModal);
        overlayE.addEventListener('click', closeModal);
        // Su kien noi bot
        modalContatiner.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    })   
}

// HEADER NAV

const menuListE = document.querySelector('.js-menu-icon');
menuListE.addEventListener('click', function() {
    const headerE = document.querySelector('.header');
    const headerHeight = headerE.clientHeight;
    const navItem = document.querySelectorAll('.nav-items-link');
    
    menuListE.classList.add = 'hover';
    
    // Dong menu
    function handleHeaderNav() {
        headerE.style.height = '46px'
        menuListE.className = 'ti-menu menu-icon js-menu-icon'
    }

    if (headerHeight === 46) {
        headerE.style.height = 'auto';
        menuListE.className = 'ti-menu menu-icon js-menu-icon hover'
    } else {
        handleHeaderNav();
    }

    // SUBNAV HANDLE
    for (let i = 0; i < navItem.length; i++) {
        var count = 0;
        navItem[i].addEventListener('click', function(e) {
            console.log(this.nextElementSibling);
            var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if (isParent) {
                e.preventDefault();
                count++;
                const subnavE = document.querySelector('.nav-items-pos:hover .subnav');
                if (count%2 == 0) {
                    subnavE.style.display = 'none';
                } else subnavE.style.display = 'block';
            } else handleHeaderNav();
        });
    }
})


function main() {
    // Slider auto change
    let i = 1;
    setInterval(function() {
        if (i == 3) {
            i = 0;
        }
        sliderE.style.background = `url(${imgSlide[i]}) no-repeat top center`;
        sliderE.style.backgroundSize = 'cover';
        textHeadingSilderE.innerText = `${textHeadingSilder[i]}`;
        textDescriptionSilderE.innerText = `${subTextHeadingSilder[i]}`;
        ++i;

    }, 3000)
}
main() 


// BUY TICKET HANDLE

function showSuccessToast() {
    toast({
    title: 'Thành Công!',
    message: 'Bạn đã đăng kí thành công vé tham dự!',
    type: 'success',
    duration: 3000
    });
}
function showDangerToast() {
    toast({
    title: 'Thất bại!',
    message: 'Vui lòng kiểm tra lại thông tin bạn đã điền',
    type: 'danger',
    duration: 3000
    });
}

import toast from './toast/showToast.js';
console.log(toast)

const payBtn = document.querySelector('.js-buy-ticket-confirm');
payBtn.onclick = function() {
    const labelInput = document.querySelectorAll('.js-modal-input');
    var countValueInput = 0;
    for (let i = 0; i < labelInput.length; i++) {
        if (labelInput[i].value) {countValueInput++;}
    }
    if (countValueInput == 2 ) {
        showSuccessToast();
        closeModal();
    } else {
        showDangerToast();
    }
}