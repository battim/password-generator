const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}],|:;<>.?/",
  tx = document.getElementsByTagName("textarea")

let pass1El = document.getElementById("password")

function resizeTextarea() {
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;")
    tx[i].addEventListener("input", OnInput, false)
  }
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}

function setValue(pass1) {
  pass1El.textContent = pass1
}

const generatePassword = (length, charset = characters) => {
  length = Number(document.getElementById("length-output").innerHTML)
  let result = ""
  for (i = 0; i < length; i++){
    result += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  setValue(result)
  resizeTextarea()
}

const resetPassword = () => {
  pass1El.textContent = ""
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:40px;overflow-y:hidden;")
  }
}

const lightMode = () => {
  let element = document.querySelector(".main"),
    switcher = document.querySelector(".switch")
  if (element.classList.contains("light-mode")) {
    switcher.classList.add("bi-sun-fill")
  } else {
    switcher.classList.remove("bi-sun-fill")
  }
  element.classList.toggle("light-mode")
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(pass1El.textContent)
}

const changeIcon = (iconId) => {
  copyToClipboard()
  id = document.getElementById(iconId)
  if (pass1El.textContent == "") {
    id.classList.remove("bi-clipboard2", "bi-clipboard2-check")
    id.classList.add("bi-clipboard2-x")
    setTimeout(() => {
      id.classList.add("bi-clipboard2")
    }, 2000)
  } else {
    id.classList.add("bi-clipboard2-check")
    id.classList.remove("bi-clipboard2", "bi-clipboard2-x")
    setTimeout(() => {
      id.classList.add("bi-clipboard2")
    }, 2000)
  }
}
