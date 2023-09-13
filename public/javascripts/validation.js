const uppercaseCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseCharacter = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/'

function generatePassword(data){
  let characterSet = ''
  console.log(characterSet)
  let excludeCharacter = data.excludeCharacters.trim()
  let randomNumber = ''
  let passwordLength = parseInt(data.passwordLength)
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
  if(excludeCharacter !== ''){
    characterSet = exclusion(characterSet,excludeCharacter)
  }
  console.log(characterSet)
  // the characterSet is an empty string or the user does not specify the password length 
  if(characterSet !== NaN || passwordLength !== ''){
    randomNumber = randomCharacter(characterSet, passwordLength)
  }
  return randomNumber

}

function exclusion(characterSet, excludeCharacter){
  let index
  // iterate the excludeCharacter string
  for(let i = 0; i < excludeCharacter.length; i++){
    // find the matching character at a certain index of the characterSet string
    index = characterSet.indexOf(excludeCharacter.charAt(i))
    // remove the certain character
    characterSet = characterSet.substring(0,index) + characterSet.substr(index+1,characterSet.length)
  }
  return characterSet
}


function randomCharacter(characterSet, passwordLength){
  let randomPassword = ''
  for(let i = 0; i < passwordLength; i++){
    randomPassword += characterSet.charAt(Math.floor(Math.random()*characterSet.length))
  } 
  return randomPassword
}

module.exports = {generatePassword}