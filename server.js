// Servidor
const net = require('net');

const server = net.createServer((con) => { 
    //Informamos a nuestros clientes que el servidor esta iniciado correctamente
    con.write("Servidor iniciado correctamente");

    //En nuestro servidor escribimos que recibimos una conexion remota cada que un cliente se conecte
    console.log("Recibí una conexión remota");

    //Cada que recibamos datos de un cliente este lo vamos a escribir en nuestro servidor
    con.on('data', (data) => {
        console.log(`Mensaje nuevo: ${data}`);
        //Intento de escribir a los clientes la informacion que recibimos de los clientes
        //con.write("Mensaje desde servidor:"+data)
    });
});

server.listen(5000, '127.0.0.1', () => {
    /*Para mas informacion, cuando el servidor este escuchando desde el puerto 5000, en la ip 127.0.0.1,
     escribimos en pantalla un mensaje*/
    console.log('Servidor iniciado');
});