const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database')
const regjs=require('./reg')

app.use(express.static('webcontent'))
app.use('/css',express.static(__dirname + 'webcontent/css'))
app.use('/js',express.static(__dirname + 'webcontent/js'))
app.use('/img',express.static(__dirname + 'webcontent/img'))

app.set('views','')
app.set('view engine','ejs')

app.use('/myaction' , regjs);

app.get('/',(req,res) => {
   res.render("index")
});

   app.get('/registration',function (req, res) {
           res.render("registration");
       });
       app.get('/sample',function (req, res) {
         res.render("sample");
     });

 
app.listen(3000,() => console.info('Listening'));