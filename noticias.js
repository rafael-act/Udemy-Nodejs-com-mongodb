

var server = http.createServer(function(request,response){
	var categoria = request.url;
	
	if (categoria=="/tecnologia") {
		response.end("<html><body>Portal de noticias de tecnologia</body></html>");
	} else if (categoria=="/moda") {
	    response.end("<html><body>Portal de noticias de moda</body></html>");
    }else if (categoria == "/beleza") {
	    response.end("<html><body>Portal de noticias de beleza</body></html>");
    }else{
    	response.end("<html><body>Portal de noticias</body></html>");
     }
});

server.listen(3000);


