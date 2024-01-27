function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image

  const img = document.querySelector("#profile img")

  // depois pegar tag substiituir image

  if(html.classList.contains('light')){
    //se tiver light mode, adicionar image light
    img.setAttribute("src", "./assets/avatar-light.png")
  }else{
  // se tiver sem light mode, manter image normal
  img.setAttribute('src', './assets/avatar.png')
  }
}