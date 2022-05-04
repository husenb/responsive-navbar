// const togglebutton=document.getElementsByClassName('toggle_button')[0]
// const navlinks=document.getElementsByClassName('nav_links')[0]
   
// togglebutton.addEventListener('click', () =>{
//     navlinks.classList.toggle('active')

// }); 
document.addEventListener('DOMContentLoaded', function(){
const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByClassName('nav_links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})})
