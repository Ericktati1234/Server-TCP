# Creacion de un servidor TCP

En esta pequeña practica observaremos el uso practico de un servidor del protocolo TCP, con ayuda de una libreria de javascript

## Vamos a comenzar

Si queremos seguir esta practica debemos de asegurarnos de tener correctamente instalado 2 herramientas para la ejecucion de codigo en javascript

npm (revisando la version)

```
npm --version
```
```
v12.22.9 (Nos debera de aparecer una version de este estilo)
```
node.js

```
node --version
```
```
8.5.1 (Nos debera de aparecer una version de este estilo)
```

### Prerequisitos

En caso de no aparecernos dichas versiones y no reconozca el comando favor de ejecutar el siguiente codigo en nuestra consola de linux
```
sudo apt-get update
sudo apt install npm
sudo apt-get update
```
Despues de ejecutado este comando, nos debera de mostrar la version al ejecutar el comando de version (*Vamos a comenzar*)

En caso de tener problemas podemos seguir la guia en el siguiente link
*https://www.hostinger.mx/tutoriales/instalar-node-js-ubuntu/*

### Vamos a descargar los archivos de nuestro repositorio

Para poder realizar esta practica necesitamos ejecutar 2 archivos de javascript que se encuentran en el siguiente repositorio, es tan facil como escribir el comando:

```
git clone git@github.com:Ericktati1234/Server-TCP.git
```

o dirigirnos a la liga:

*https://github.com/Ericktati1234/Server-TCP*

Y descargar los archivos necesarios (client.js y server.js)

### Realizando nuestra practica

Nos vamos a postrar en nuestra carpeta conteniente de nuestros archivos (client y server) y abriremos nuestra consola aqui

```
:~/Documentos/TCP ERICK$ ls
client.js  readme.md  server.js
```
Ejecutaremos primero nuestro archivo server.js, el cual estara escuchando desde el puerto 5000 en la direccion ip 127.0.0.1 

*NOTA: En caso de tener este puerto o esta ip ocupada para este proceso podemos modificar nuestro codigo en el archivo server.js modificando las siguientes lineas*

```
Modificamos ya sea el 5000 o la direccion 127.0.0.1
CUIDADO CON LAS COMAS Y COMILLAS
server.listen(5000, '127.0.0.1', () => ....
```
Ejecutamos nuestro archivo server.js con el siguiente comando y nos deberá de mostrar el siguiente mensaje en pantalla

```
~/Documentos/TCP ERICK$ node server.js 
Servidor iniciado
```
Despues de ejecutado este archivo, ejecutamos EN OTRA PESTAÑA (o ventana) de nuestra terminal ahora el archivo client.js (Para una mejor observacion del uso del programa podemos abrir 2 pestañas con el archivo client), lo ejecutamos de la siguiente manera:

```
:~/Documentos/TCP ERICK$ node client.js 
Conexión exitosa
Mensaje del servidor: Servidor iniciado correctamente
```

Cada que abrimos un archivo client.js, en nuestra pantalla de cliente se nos mostrará el mensaje anterior y en nuestro servidor se mostrará el siguiente mensaje

```
:~/Documentos/TCP ERICK$ node server.js 
Servidor iniciado
Recibí una conexión remota
Recibí una conexión remota
```
Por ultimo, juguemos un poco, desde nuestra pestaña de cliente vamos a escribir un mensaje y daremos enter, al dar enter, se nos escribira el mensaje escrito en nuestro servidor, asi podremos hacer desde cada cliente

Cliente 1

```
:~/Documentos/TCP ERICK$ node client.js 
Conexión exitosa
Mensaje del servidor: Servidor iniciado correctamente
Hola

```

Servidor

```
:~/Documentos/TCP ERICK$ node server.js 
Servidor iniciado
Recibí una conexión remota
Recibí una conexión remota
Mensaje nuevo: Hola
```

Cliente 2

```
:~/Documentos/TCP ERICK$ node client.js 
Conexión exitosa
Mensaje del servidor: Servidor iniciado correctamente
COmo estas?
```

Servidor

```
:~/Documentos/TCP ERICK$ node server.js 
Servidor iniciado
Recibí una conexión remota
Recibí una conexión remota
Mensaje nuevo: Hola
Mensaje nuevo: COmo estas?
```

Felicitaciones, nuestro servidor TCP ha funcionado correctamente

### Terminando tutorial

En el codigo de nuestro archivo server.js, existe cierto comando que esta comentado en la siguiente seccion:

```
con.on('data', (data) => {
        console.log(`Mensaje nuevo: ${data}`);
        //Intento de escribir a los clientes la informacion que recibimos de los clientes
        //con.write("Mensaje desde servidor:"+data)
    });
```
Este codigo suponia permitir que cada mensaje recibido por los otros usuarios, nuestro servidor pudiera propagarlo, pero simplemente lo propaga al usuario que envió la informacion

## Implementacion

Para mayor informacion sobre como funciona la libreria net de javascript y si queremos buscar solucion a mi problema de implementacion, seguir la siguiente liga:

*https://nodejs.org/api/net.html*

## Hecho con

* [VsCode](https://code.visualstudio.com) - Como editor de nuestro codigo fuente
* [GitHub](https://github.com) - Como repositorio remoto que contiene nuestros archivos tutorial

## Contribucion

Si desea contribuir y mejorar el siguiente documento, favor de contactarnos en el siguiente correo (ContactoBinBash@coolmail.com)

## Versionado

Para el versionado y consulta de documento hacemos el uso de [GitHub](https://github.com) en el cual actualizamos, verificamos y probamos 
cada mejora en los codigos y tutoriales realizados

## Authors

* **Erick Nevarez** - *Totalidad del trabajo* - [Ericktati1234](https://github.com/Ericktati1234)

Por el momento a la fecha 16/05/2024 no existen colaboradores que hayan participado en el proyecto

## License

Este proyecto es usado solamente para usos didacticos, no nos hacemos responsables ninguno de los autores por el mal uso del codigo anexado
Todos los documentos y links son una via para obtener mayor conocimiento, no se obtiene ningun beneficio personal por el compartir los links

## Reconocimientos

Un agradecimiento a cada usuario que este viendo este documento, gracias por permitirles mostrar un poco de mis trabajos de universidad

