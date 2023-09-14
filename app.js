const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const validator = require('./public/javascripts/validation.js')
let display = "none"
let displayBlock = "inline-block"

// setting the app's view engine will make that value the default file extension used for looking up views
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'))

const port = 3000
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/',(req,res)=>{
  res.redirect('/passwordGenerator')
})

app.get('/passwordGenerator',(req,res)=>{
  display = "none"
  res.render('index',{display, displayBlock})
})

app.post('/passwordGenerator', urlencodedParser, (req,res)=>{
  let data = req.body
  let password = validator.generatePassword(data)
  display = "block"
  console.log('password: ', password)
  // check if the user has enter a password length
  if(password === ''){
    password = "There is no valid character in your selection."
    displayBlock = "none"
  }else{
    displayBlock = "inline-block"
  }
  res.render('index',{data, password, display, displayBlock})
})

app.listen(port,()=>{
  console.log(`The Express server is now running on http://localhost:${port}`)
})