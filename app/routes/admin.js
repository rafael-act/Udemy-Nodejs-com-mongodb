module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (request, response) {
        response.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function (request, response) {
        var noticia = request.body;

        var connection = application.config.dbConnection();
        var noticiasModel=application.app.models.noticiasModel;
        
        noticiasModel.salvarNoticia(noticia,connection,function (erro, result) {
            response.redirect('/noticias');
        });
    });
}