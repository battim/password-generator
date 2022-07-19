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
  selectors.password.classList.remove("border-0")
  
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
