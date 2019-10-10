var socket = io();

//escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function () {
    console.log('Perdimos coneccion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola mundo'
}, function (res) {
    //console.log('Se disparo el callback');
    console.log('Respuesta server: ', res);
});

//escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});