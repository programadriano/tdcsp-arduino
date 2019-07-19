var restify = require('restify');
var builder = require('botbuilder');
var five = require("johnny-five");

/* configurando led*/
var led;
var board = new five.Board();
board.on("ready", function () {
    led = new five.Led(13);
});
/* configurando led*/


var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());
var bot = new builder.UniversalBot(connector, function (session) {

    if (session.message.text == "ligar") {
        led.on();
    } else if (session.message.text == "desligar") {
        led.off();
    }

});
