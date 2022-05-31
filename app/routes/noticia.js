//var dbConnection = require('../../config/dbConnection')
module.exports = function (application) {

   
    application.get('/noticia', function (request, response) {

        var connection = application.config.dbConnection();
        var noticiasModel=application.application.models.noticiasModel;

       noticiasModel.getNoticias(connection, function (erro, result) {
            response.render("noticias/noticia", { noticia: result });
        });
    });
}