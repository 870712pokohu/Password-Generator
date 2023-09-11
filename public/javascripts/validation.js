const uppercaseCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseCharacter = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/'

function generatePassword(data){
  let characterSet = ''
  let passwordLength = parseInt(data.passwordLength)
  let randomPassword = ''
  console.log(data.lowercase)
  if(data.lowercase === 'on'){
    characterSet += lowercaseCharacter
  }
  if(data.uppercase === 'on'){
    characterSet += uppercaseCharacter
  }
  if(data.numbers === 'on'){
    characterSet += numbers
  }
  if(data.symbols === 'on'){
    characterSet += symbols
  }
  //console.log('this is the character set: ',characterSet)
  randomPassword = randomCharacter(characterSet, passwordLength)
  return randomPassword
}

function randomCharacter(characterSet, passwordLength){
  let randomPassword = ''
  for(let i = 0; i < passwordLength; i++){
    randomPassword += characterSet.charAt(Math.floor(Math.random()*characterSet.length))
  } 
  return randomPassword
}

module.exports = {generatePassword}