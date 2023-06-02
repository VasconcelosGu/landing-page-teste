const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header-nav');


menuButton.addEventListener('click',()=>{
  menu.classList.toggle('ativo')
})


function closeWhenWindowClicked(){
  document.addEventListener('click',(event) =>{
    
    const divMenu = document.querySelector('.menu-button > div');

    const clickInsideMenu = menu.contains(event.target) || menuButton === event.target || divMenu.contains(event.target);

    if (!clickInsideMenu){
      menu.classList.remove('ativo')
    }
  })
}

closeWhenWindowClicked()