const rightpart =document.querySelector('.right_part')
const openMenu=document.querySelector('.fa-bars')
const closeMenu=document.querySelector('.fa-times')

openMenu.addEventListener('click',()=>{
    rightpart.style.display='block';
    closeMenu.style.display='inline-block';
    openMenu.style.display='none';
})
closeMenu.addEventListener('click',()=>{
    rightpart.style.display='none';
    closeMenu.style.display='none';
    openMenu.style.display='inline-block';
})
//code to toggle the menu
const home=document.getElementById('home');
const names=document.querySelector('.name');

home.addEventListener('click',()=>{
    names.classList.toggle('active');
})
