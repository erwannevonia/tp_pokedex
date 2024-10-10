//Importer le module http
//Il contient toutes les méthodes necessaires
//pour la création d'un serveur ainsi que des requêtes HTTP
const http = require('http');
const url = require('url');
const querystring = require('querystring');

//Création du serveur
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    const params = querystring.parse(url.parse(req.url).query);
    if("name" in params) {
        if("age" in params) {
            res.end("Bonjour " +params.name +" ! Vous avez " +params.age+ " ans !");
        }
        else {
            res.end("Bonjour " +params.name+ " ! Votre age est inconnu.");
        }
    }else {
        if("age" in params) {
            res.end("Bonjour inconnu ! Vous avez " +params.age+ " ans !");
        }
        else {
            res.end("Bonjour inconnu. Votre age est inconnu.");
        }
    }
});

//Démarrage du serveur sur le port 8085
server.listen(8080);