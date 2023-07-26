let menu = document.querySelector('.menu');
let navlinks = document.querySelector('.navlinks');

menu.addEventListener('click', ()=>{
    // navlinks.style.left = "0%";
    navlinks.classList.toggle('left');
})