const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navList = document.querySelector('.nav_list')
const rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
$( document ).ready(function() {
   
    $('.drop').click(function(){
     $('.navbar').removeClass('show');
  });
 
   });