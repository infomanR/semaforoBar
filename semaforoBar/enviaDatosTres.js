/*var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);*/

var serialport = require('serialport');
var Serialport = serialport.SerialPort;

var myPort = new Serialport("COM4", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n"),
  dataBits: 8,
	parity: 'none',
  stopBits: 1,
	flowControl: false
});

myPort.on('open', onOpen);
myPort.on('data', onData);

function onData(data){
	console.log(data);
  //console.log(typeof data);
	//io.sockets.emit('lectura',  data);
}

function onOpen(){
	console.log("Arduino conectado");
}

process.stdin.on('data', writeData);
function writeData(data) {
    //myPort.write(toByte(data+''));
    myPort.write(data);
    //console.log(data);
}

function toByte(str){
  var str = "Hello竜";
  var bytes = []; // char codes
  var bytesv2 = []; // char codes

  for (var i = 0; i < str.length; ++i) {
    var code = str.charCodeAt(i);

    bytes = bytes.concat([code]);

    bytesv2 = bytesv2.concat([code & 0xff, code / 256 >>> 0]);
  }
  // 72, 101, 108, 108, 111, 31452
  //console.log('bytes', bytes.join(', '));

  // 72, 0, 101, 0, 108, 0, 108, 0, 111, 0, 220, 122
  //console.log('bytesv2', bytesv2.join(', '));
  return bytes;
}



/*app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('Usuario esta conectado');
  socket.on('chat message', function(msg){
    //console.log('message: ' + msg);
    switch(msg) {
          case 0:
              writeData('0');
              break;
          case 1:
              writeData('1');
              break;
          case 2:
              writeData('2');
              break;
          case 3:
              writeData('3');
              break;
          case 4:
              writeData('4');
              break;
          case 5:
              writeData('5');
              break;
      default:
          console.log("Error");
    }
  });
  socket.on('disconnect', function(){
    console.log('Usuario desconectado');
  });
});

server.listen(8000, '192.168.0.104', function(){
  console.log("el servidor esta corriendo");
})*/
