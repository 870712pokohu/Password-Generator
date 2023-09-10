const express = require('express')
const {engine} = require('express-handlebars')
const app = express()

// setting the app's view engine will make that value the default file extension used for looking up views
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'))

const port = 3000


app.get('/',(req,res)=>{
  res.redirect('/passwordGenerator')
})

app.get('/passwordGenerator',(req,res)=>{
  res.send('test')
})

app.listen(port,()=>{
  console.log(`The Express server is now running on http://localhost:${port}`)
})