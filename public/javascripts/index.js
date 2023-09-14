
const form = document.querySelector('#form')
const passwordLength = document.querySelector('#passwordLength')
const lowercaseCharacter = document.querySelector('#lowercaseCharacter')
const uppercaseCharacter = document.querySelector('#uppercaseCharacter')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')
const excludeCharacter = document.querySelector('#excludeCharacters')
const resetButton = document.querySelector('#reset-button')
const submitButton = document.querySelector('#submit-button')
const passwordResult = document.getElementById('password-result')
const copyButton = document.querySelector('#copy-button')
const password = document.getElementById('password')
const copyImage = document.getElementById('copyImage')

function resetForm(){
  passwordLength.value = ''
  lowercaseCharacter.checked = false
  uppercaseCharacter.checked = false
  numbers.checked = false
  symbols.checked = false
  excludeCharacter.value = ''
  passwordResult.style.display = "none"
}

submitButton.addEventListener('click',(event)=>{
  form.classList.add('was-validated')
})


form.addEventListener('submit',(event)=>{
  // validates the input of password length 
  if((!passwordLength.checkValidity())||passwordLength.value === ''){
      event.preventDefault()
      event.stopPropagation()
      passwordResult.style.display = "none"
    }
})

// allow user to copy the generated password to the clipboard
const copy = async()=>{
  try{
    if(!(copyImage.style.display === "none")){
      await navigator.clipboard.writeText(password.innerText)
      alert('the password is copied to the clipboard')
    }
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
