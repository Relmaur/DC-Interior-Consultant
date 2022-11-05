let hamburguer_menu = document.querySelector("#hamburguer-menu");

hamburguer_menu.addEventListener("click", function () {

  let disappear_bar = document.querySelectorAll(".disappear-bar");
  let menu_classes = this.classList;
  let mobile_menu = document.querySelector(".navbar__menu--mobile");
  let mobile_menu_classes = mobile_menu.classList;

  /*===== Animation =====*/
  menu_classes.toggle('forwards')
  menu_classes.toggle('backwards')

  disappear_bar.forEach(bar => {
    
    let bar_classes = bar.classList
    
    bar_classes.toggle('disappear')
    bar_classes.toggle('appear')
      
  })

  /*===== ...Animation =====*/

  /*===== Open/Close Functionality =====*/
  mobile_menu_classes.toggle('closed')


});
