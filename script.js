let buttonForMenu = document.getElementById('buttonForMenu')

console.log(buttonForMenu)


buttonForMenu.addEventListener('click', ()=>{
  let hiddenMenu = document.getElementById('hiddenMenu');
  if(hiddenMenu.classList.contains('invisibleMenu')){
    hiddenMenu.classList.remove('invisibleMenu');
    hiddenMenu.classList.add('visibleMenu');
  } else if (hiddenMenu.classList.contains('visibleMenu')){
    hiddenMenu.classList.remove('visibleMenu')
    hiddenMenu.classList.add('invisibleMenu');
  }
})
