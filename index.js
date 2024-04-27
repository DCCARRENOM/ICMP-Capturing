var Cap = require("cap").Cap;
var decoders = require("cap").decoders;
const pingus = require('pingus');
var PROTOCOL = decoders.PROTOCOL;


var c = new Cap();
var device = Cap.findDevice("192.168.2.17");// Se coloca la dirección IP del dispositivo local dentro de la red
var filter = "ICMP"; //Se filtra los protocolos que se desean capturar, para este caso el protocolo ICMP
var bufSize = 10 * 1024 * 1024;
var buffer = Buffer.alloc(65535);

var linkType = c.open(device, filter, bufSize, buffer);
console.log(linkType);

c.setMinBytes && c.setMinBytes(0);

console.dir(Cap.deviceList());//Se buscan todos los dispositvios y direcciones IP identificadas como permitidas

  setInterval(()=> {new pingus.PingICMP({ host: 'youtube.com' })
  .on('result', (result) => {
    console.log(result);
  })
  .on('error', (err, result) => {
    throw err;
  })
  .send();}, 1000);
