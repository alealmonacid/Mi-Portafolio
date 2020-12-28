
//scroll
$(function(){
    $("a").click(function(event){
       if (this.hash !== "") {
           event.preventDefault();

           var car = this.hash;

           $("html, body").animate({
               scrollTop: $(car).offset().top
           }, 800, function(){
               window.location.hash = car;
           });
       }
   });
   

//Cambio de imagen Hover

//mps

$("#mps").mouseover(function()
{this.src="assets/img/mpscolor.png"
})
.mouseout(function()
{this.src="assets/img/mps.png"
});

//tibox

$("#tibox").mouseover(function()
{this.src="assets/img/tiboxcolor.png"
})
.mouseout(function()
{this.src="assets/img/tibox.png"
});

  

//arroja alerta al momento de hacer clic en btn enviar correo
$("#enviarCorreo").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El proyecto Meet&Cofee ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $("#enviarCorreo1").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El proyecto IguanaPage ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $("#enviarCorreo2").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El proyecto Suricata ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $("#enviarCorreo3").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El proyecto Cuppon ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $("#enviarCorreo4").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El proyecto Ricomida ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $("#enviarCorreo5").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El proyecto Revolucion en la granja ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $("#enviarCorreo6").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El Logotipo ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $("#enviarCorreo7").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El Logotipo ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $("#enviarCorreo8").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("El Sitio web ha sido enviado al siguiente correo " + mail + ".");
   }
   );
   $('[data-toggle="tooltip"]').tooltip();
});
