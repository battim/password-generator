const options = {
  uppercase: false,
  lowercase: true,
  numbers: false,
  symbols: false,
  length: 14
}

const selectors = {
  copy: "copy",
  checkbox: "checkbox",
  slider: "slider",
  button: "button",
  sliderValue: document.querySelector("#length-output"),
  password: document.querySelector("#password")
}

const copyIcon = document.getElementById("copy")

document.querySelector(".main").addEventListener("click", event => {
  switch (event.target.dataset.jsSelector) {
    // listen for copy
    case selectors.copy:
      const textarea = document.createElement("textarea")
      document.body.appendChild(textarea)
      textarea.value = selectors.password.textContent
      textarea.select()
      navigator.clipboard.writeText(selectors.password.textContent)
      document.body.removeChild(textarea)
    break;
    // listen for checkboxes
    case selectors.checkbox:
      options[event.target.control.id] = !event.target.control.checked
    break;
    // listen for slider
    case selectors.slider:
      const value = event.target.valueAsNumber
      selectors.sliderValue.innerText = value
      options.length = value
    break;
    // listen for button
    case selectors.button:
      selectors.password.textContent = generatePassword()
    break;
  }
})

const generatePassword = () => {
  copyIcon.classList.remove("d-none")
  const chars = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "~`!@#$%^&*()_-+={[}],|:;<>.?/",
  }

  const charList = [
    ...options.lowercase ? chars.lowercase : [],
    ...options.uppercase ? chars.uppercase : [],
    ...options.numbers ? chars.numbers : [],
    ...options.symbols ? chars.symbols : []
  ].join("")

  return Array.from({ length: options.length }, () => Math.floor(Math.random() * charList.length))
    .map(number => charList[number])
    .join("")

}

// function setValue(pass1) {
//   selectors.password.innerHTML = pass1
// }

// const generatePassword = (length, charset = options.charUpper) => {
//   length = Number(document.getElementById("length-output").innerHTML)
//   let result = ""
//   for (i = 0; i < length; i++){
//     result += charset.charAt(Math.floor(Math.random() * charset.length))
//   }
//   setValue(result)
//   // resizeTextarea()
// }

// const resetPassword = () => {
//   selectors.password.textContent = ""
//   // for (let i = 0; i < tx.length; i++) {
//   //   tx[i].setAttribute("style", "height:40px;overflow-y:hidden;")
//   // }
// }

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

const changeIcon = (iconId) => {
  // copyToClipboard()
  id = document.getElementById(iconId)
  if (selectors.password.textContent == "") {
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
