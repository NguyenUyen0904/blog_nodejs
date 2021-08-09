const express = require('express')
const path = require('path')// khai bap thu vien path-luu duong dan
const app = express()
const handlebars = require('express-handlebars');
const port = 3000
//HTTP logger
const morgan = require('morgan');
const { extname } = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
//template engine 
app.engine('hbs', handlebars(
  {extname: '.hbs'}
));//su dung template engine la handlebars, khai baos bien thu vien handlebars()
app.set('view engine', 'hbs');// khai  bao set su dung truc tiesp cais engine ben tren
app.set('views', path.join(__dirname, 'resources/views'));
 


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



