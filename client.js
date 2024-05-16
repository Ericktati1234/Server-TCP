// Cliente

const net = require('net');
const readline = require('readline');

const client = new net.Socket();

/*Conectamos nuestro nuevo cliente al puerto 5000 en la direccion 
ip 127.0.0.1 y hacemos saber al cliente esto con el mensaje en consol.log*/
client.connect(5000, '127.0.0.1', () => {
    console.log("Conexión exitosa");
});

//En caso de que el servidor sea cerrado informamos al cliente
client.on('close', () => {
    console.log("Conexión terminada");
});

//Cualquier mensaje que recibamos del servidor sera escrito en la pantalla de nuestro cliente
client.on('data', (data) => {
    console.log(`Mensaje del servidor: ${data}`);
});

//Codigo el cual nos permite escribir mensajes los cuales nuestro servidor podra recibir
readline.createInterface({ input: process.stdin, output: process.stdout }).on('line', (input) => client.write(input));

