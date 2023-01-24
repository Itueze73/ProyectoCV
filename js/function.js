


const persona = '{"nombre":"Ezequiel", "edad":"34", "nacionalidad":"argentino"}';
                const obj = JSON.parse(persona);
                console.log(obj);
                document.getElementById("demo").innerHTML = 
                "nombre: "+obj.nombre+
                "Edad: "+obj.edad+
                "Nacionalidad: "+obj.nacionalidad;


            
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