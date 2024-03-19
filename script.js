const projectTitle = document.querySelectorAll('.img-wrapper .project-title');
const projectImg = document.querySelectorAll('.img-wrapper img');
const projectContainers = document.querySelectorAll('.img-wrapper');
const burgerMenu = document.getElementById('burger-icon');
const navItems = document.getElementById('nav-items');

burgerMenu.addEventListener("click", function(){
    if(navItems.classList.contains('display-menu')){
        navItems.classList.remove('display-menu');
        navItems.classList.add('initial-state');
        console.log('No display');
    } else {
        navItems.classList.add('display-menu');
        navItems.classList.remove('initial-state');
    }
});

navItems.addEventListener("click", function(){
    if(navItems.classList.contains('display-menu')){
        navItems.classList.remove('display-menu');
        navItems.classList.add('initial-state');
        console.log('No display');
    } else {
        navItems.classList.add('display-menu');
        navItems.classList.remove('initial-state');
    }
});

projectContainers.forEach(function(container) {
    const img = container.querySelector('img');
    const title = container.querySelector('.project-title');
    const titleText = img.getAttribute('data-title');

    title.textContent = titleText;
});

projectTitle.forEach(function(img) {
    img.addEventListener('click', function() {
        this.classList.toggle("active");
        const panel = this.parentNode.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

projectImg.forEach(function(img) {
    img.addEventListener('click', function() {
        this.classList.toggle("active");
        const panel = this.parentNode.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

window.addEventListener('scroll', onSectionScroll);

function onSectionScroll(){
    const navMenu = document.getElementById('nav-menu');
    const navMenuLinks = document.querySelectorAll('a');
    const logo = document.getElementById('logo').querySelector('a');
    const aboutSection = document.getElementById('about');
    const projectSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    if(window.scrollY >= aboutSection.offsetTop - 100 && window.scrollY <= projectSection.offsetTop - 100 
        || window.scrollY >= contactSection.offsetTop - 100){
        logo.classList.remove('dark-header');
        logo.classList.add('light-header');
        burgerMenu.style.color = "white";
        navMenuLinks.forEach(function(link){
            link.classList.remove('dark-header');
            link.classList.add('light-header');
        });
    } else {
        logo.classList.remove('light-header');
        logo.classList.add('dark-header');
        burgerMenu.style.color = "black";
        navMenuLinks.forEach(function(link){
            link.classList.remove('light-header');
            link.classList.add('dark-header');
        });
    }
}
