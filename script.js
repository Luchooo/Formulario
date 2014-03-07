
///Funcion para saber que la pagina a cargado completamente....
window.onload=function () {
	 inicio()
}



var txt; //Variable para guardar los elementos solicitados  al usuario
var contadorID; //Variable para igualar el campo de identificacion o cedula
var elementos = ["identificacion","nombre","apellido","email","edad"]
var valores=[""];



/////////////////FUNCIONES////////////////////////////////////////////////////////////

function inicio () {
		
		boton();

}

//___________________________________________________________________________________





function boton(){

//Se creo un Listenner al boton guardar con un evento click
guardar.addEventListener('click', function(event) 
{
 
 	validar();

});


}



function validar () {

	persona()

	}		
								





////Funcion para imprimir los datos del usuario

function guardar_imprimir () {

  		

  		if (faltan_campos()!=true) {

  			if(validar_cedula()!=true){


		////<br> dar un espacio al final 
		txt= "Cedula: "+elementos[0]+" , "
		+"Nombre: "+elementos[1]+ " , "
		+"Apellido: "+elementos[2]+" , "
		+"Email: "+elementos[3]+" , "
		+"Edad: "+elementos[4]+" . <br> "

		obtener_datos ("pantalla").innerHTML += txt 
		borrar_campos();
		};
	}
		

}


//Funcion que me ayuda a limpiar loscampos de texto
function borrar_campos(){

     obtener_datos('id').value=""
     obtener_datos('nom').value=""
     obtener_datos('ape').value=""
     obtener_datos('mail').value=""
     obtener_datos('date').value=""
 	 obtener_datos('id').focus()
}




//Funcion que me ayuda a obtener los datos escritos en el formulario

function persona () {

	for (var i = 0; i < elementos.length; i++) {
		
		contadorID=elementos[0]=obtener_datos('id').value
		elementos[1]=obtener_datos('nom').value
		elementos[2]=obtener_datos('ape').value
		elementos[3]=obtener_datos('mail').value
		elementos[4]=obtener_datos('date').value


	};//Fin del For__________________________________________

	guardar_imprimir();

}




//Funcion que valida los campos que no se han escrito y pone el foco en estos campos

function faltan_campos () {
		
		if (elementos[0]=="") {

			alert("Falta el campo de la cedula")
			obtener_datos('id').focus()
			return true

		};


		if (elementos[1]=="") {

			alert("Falta el campo del nombre")
			obtener_datos('nom').focus()
			return true

		};


		if (elementos[2]=="") {

			alert("Falta el campo del apellido")
			obtener_datos('ape').focus()
			return true

		};

		if (elementos[3]=="") {

			alert("Falta el campo del email")
			obtener_datos('mail').focus()
			return true

		};

		if (elementos[4]=="") {

			alert("Falta el campo de la fecha de nacimiento")
			obtener_datos('date').focus()
			return true

		};


}







/////////VALIDAR ID//////////////////
function validar_cedula () {



//Si el el valor que el usuario fue encontrado en el arreglo debe ser mayor a 0 si no este sera -1
			if (valores.indexOf(contadorID)>0) {
			

			alert('Cedula ya registrada')//Usuario ya registrado con esa cedula Impresion por pantalla	
			obtener_datos('id').focus(); // Poner foco en el text con el id="id"

			return true
			}

			else{
				valores=valores.concat(contadorID) //Concatenar los arrays para formar uno prioncipal que sera el que se podra acomparar
				return false


			};



}



//Funcion que me facilita obtener los datos que son escritos en el formulario

function obtener_datos (div) {
	return document.getElementById(div)	
}
