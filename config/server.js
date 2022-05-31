var express    = require('express'); //biblioteca de requisicoes
var consign    = require('consign');//biblioteca de rotas
var bodyparser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');//indica que o ejs fara a parte de front end
app.set('views', './app/views');

app.use(bodyparser.urlencoded({extended:true}));

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);

module.exports = app;