
let flagBorder = false

function changeBorder(element){
  if(flagBorder === false){
    element.style.border = "2px solid red"
    flagBorder=true
  }else{
    element.style.border = "none"
    flagBorder=false
  }
}

function verifyStickers(){
  let octodex
  let slack
  let git
  let messageStickers
  let total=0
  octodex = document.querySelector("#octodex").value
  slack = document.querySelector("#slack").value
  git = document.querySelector("#git").value
  messageStickers = document.querySelector("#messageStickers")
  total = Number(git) + Number(slack) + Number(octodex)
  if(total > 10){
    messageStickers.innerHTML="Llevas demasiados stickers"
  }else{
    messageStickers.innerHTML="Llevas " + total + " stickers"
  }
}

function verifyPassword(){
  let one
  let two
  let three
  let messagePassword
  let password = ""
  one = document.querySelector("#one").value
  two = document.querySelector("#two").value
  three = document.querySelector("#three").value
  messagePassword = document.querySelector("#messagePassword")
  password = one + two + three
  if(password === "911"){
    messagePassword.innerHTML="Password 1 es correcto"
  }else if(password === "714"){
    messagePassword.innerHTML="Password 2 es correcto"
  }else{
    messagePassword.innerHTML="Password incorrecto"
  }
}
