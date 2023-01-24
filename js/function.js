
async function obtenerDatos(){
    const persona = await fetch("http://127.0.0.1:5500//json/datos.json");
    const obj = await persona.json()
    console.log(obj);
    document.getElementById("Nombre").innerHTML = "Nombre y Apellido: "+obj.nombre;
    document.getElementById("Edad").innerHTML = "Edad: "+obj.edad;
    document.getElementById("Nacionalidad").innerHTML = "Nacionalidad: "+obj.nacionalidad;
    document.getElementById("Direccion").innerHTML = "Direccion: "+obj.direccion;
}
obtenerDatos();
        
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No valido');
    return;
  }
  var comentario = document.getElementById('comentario').value;
  if (comentario.length < 10) {
    alert('El comentario es corto');
    return;
  }
  document.getElementById('enviar').addEventListener('click', function() {
    alert("Su mensaje fue enviado!");
});
}