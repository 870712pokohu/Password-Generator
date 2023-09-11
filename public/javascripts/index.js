
const form = document.querySelector('#form')
const passwordLength = document.querySelector('#passwordLength')
const lowercaseCharacter = document.querySelector('#lowercaseCharacter')
const uppercaseCharacter = document.querySelector('#uppercaseCharacter')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')
const excludeCharacter = document.querySelector('#excludeCharacters')
const resetButton = document.querySelector('#reset-button')

form.addEventListener('click',(event)=>{
  console.log(event.target)
})

function resetForm(){
  passwordLength.value = ''
  lowercaseCharacter.checked = false
  uppercaseCharacter.checked = false
  numbers.checked = false
  symbols.checked = false
  excludeCharacter.value = ''
  form.resetForm()
}
