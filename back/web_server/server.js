const http = require('http');
const port = 1337;
const host = 'localhost';

const server = http.createServer(function (req, res) {
    const url = req.url;
    if (url === '/'){
        res.end('Bienvenue')
    }
});

server.listen(port, host, function () {
    console.log('le serveur écoute sur le port 1337');
});
