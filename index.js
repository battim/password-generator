const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}],|:;<>.?/",
  tx = document.getElementsByTagName("textarea")

let pass1El = document.getElementById("password1"),
  pass2El = document.getElementById("password2")

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

function setValue(pass1, pass2) {
  pass1El.textContent = pass1
  pass2El.textContent = pass2
}

const generatePasswords = (length, charset = characters) => {
  length = Number(document.getElementById("length-output").innerHTML)
  let result = "",
    result2 = ""
  for (i = 0; i < length; i++){
    result += charset.charAt(Math.floor(Math.random() * charset.length))
    result2 += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  setValue(result, result2)
  resizeTextarea()
}

const emptyPasswords = () => {
  pass1El.textContent = ""
  pass2El.textContent = ""
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:40px;overflow-y:hidden;")
  }
}

const lightMode = () => {
  let element = document.querySelector(".container"),
    switcher = document.querySelector(".switcher")
  if (element.classList.contains("light-mode")) {
    switcher.classList.add("bi-sun-fill")
  } else {
    switcher.classList.remove("bi-sun-fill")
  }
  element.classList.toggle("light-mode")
}


const copyToClipboard = (copyText) => {
    navigator.clipboard.writeText(copyText)
}
