var app = require('./config/server.js');

//var rotaNoticias = require('./app/routes/noticias')(app);

//var rotaHome = require('./app/routes/home')(app);

//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function () {
	console.log('Servidor ON');
});//passa a porta e uma funcao de callback 