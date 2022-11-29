var tamanio_password				=	9;  //cantidad de caracteres que tendra la contraseña
var caracteres_conseguidos			=	0;
var caracter_temporal				=	'';			
var array_caracteres				=	new Array();

for(var i = 0; i < tamanio_password; i++){
	array_caracteres[i]	=	null;
}
 
var password_definitivo				=	'';

//definición de cuántos caracteres de cada tipo como mínimo, queremos en la contraseña
var numero_minimo_letras_minusculas	=	1;
var numero_minimo_letras_mayusculas	=	1; 
var numero_minimo_numeros			=	1;
var numero_minimo_simbolos			=	1;

//variables para cargar a medida que se crean
var letras_minusculas_conseguidas 	=	0;
var	letras_mayusculas_conseguidas	=	0;
var	numeros_conseguidos				=	0;
var	simbolos_conseguidos			=	0;
 
 
//retorna un número aleatorio entre límites superior e inferior
function genera_aleatorio(i_numero_inferior, i_numero_superior) {
    var     i_aleatorio  =   Math.floor((Math.random() * (i_numero_superior - i_numero_inferior + 1)) + i_numero_inferior);
    return  i_aleatorio;
}
 
 
// retorna un caracter en base al tipo que se le pasa por parámetro (mayúscula, minúscula, número, símbolo o aleatorio)
function genera_caracter(tipo_de_caracter){
// se utiliza una lista de caracteres que no tiene algunos caracteres como la "i" mayúscula ni la "l" minúscula para evitar errores de transcripción
	var lista_de_caracteres	=	'$+=?@_23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';
	var caracter_generado	=	'';
	var valor_inferior		=	0;
	var valor_superior		=	0;
 
	switch (tipo_de_caracter){
		case 'minúscula':
			valor_inferior	=	38;
			valor_superior	=	61;
			break;
		case 'mayúscula':
			valor_inferior	=	14;
			valor_superior	=	37;
			break;
		case 'número':
			valor_inferior	=	6;
			valor_superior	=	13;
			break;
		case 'símbolo':	
			valor_inferior	=	0;
			valor_superior	=	5;
			break;
		case 'aleatorio':
			valor_inferior	=	0;
			valor_superior	=	61;
 	}
 
	caracter_generado	=	lista_de_caracteres.charAt(genera_aleatorio(valor_inferior, valor_superior));
	return caracter_generado;
}
 
 
//se guarda en una posición vacía aleatoria el caracter recibido
function guarda_caracter_en_posicion_aleatoria(caracter_pasado_por_parametro){
	var guardado_en_posicion_vacia	=	false;
	var posicion_en_array			=	0;
	
	while(guardado_en_posicion_vacia	!=	true){
		posicion_en_array	=	genera_aleatorio(0, tamanio_password-1);

		//si la posición esta vacía, guardamos el caracter
		if(array_caracteres[posicion_en_array] == null){
			array_caracteres[posicion_en_array]	=	caracter_pasado_por_parametro;
			guardado_en_posicion_vacia			=	true;
		}
	}
}
 
//carga aleatoreamente los caracteres hasta completar la contraseña
function generar_contrasenya(){
	while (letras_minusculas_conseguidas < numero_minimo_letras_minusculas){
		caracter_temporal	=	genera_caracter('minúscula');
		guarda_caracter_en_posicion_aleatoria(caracter_temporal);
		letras_minusculas_conseguidas++;
		caracteres_conseguidos++;
	}
 
	while (letras_mayusculas_conseguidas < numero_minimo_letras_mayusculas){
		caracter_temporal	=	genera_caracter('mayúscula');
		guarda_caracter_en_posicion_aleatoria(caracter_temporal);
		letras_mayusculas_conseguidas++;
		caracteres_conseguidos++;
	}
 
	while (numeros_conseguidos < numero_minimo_numeros){
		caracter_temporal	=	genera_caracter('número');
		guarda_caracter_en_posicion_aleatoria(caracter_temporal);
		numeros_conseguidos++;
		caracteres_conseguidos++;
	}
 
	while (simbolos_conseguidos < numero_minimo_simbolos){
		caracter_temporal	=	genera_caracter('símbolo');
		guarda_caracter_en_posicion_aleatoria(caracter_temporal);
		simbolos_conseguidos++;
		caracteres_conseguidos++;
	}
 
	// si no hemos generado todos los caracteres que necesitamos, de forma aleatoria añadimos los que nos falten
	while (caracteres_conseguidos < tamanio_password){
		caracter_temporal	=	genera_caracter('aleatorio');
		guarda_caracter_en_posicion_aleatoria(caracter_temporal);
		caracteres_conseguidos++;
	}
 
//pasa el contenido del array a la variable password_definitivo
	for(var i=0; i < array_caracteres.length; i++){
		password_definitivo	=	password_definitivo + array_caracteres[i];
	}
 

// indicamos los parámetros con los que hemos generado la contraseña
	document.write('<strong>Parámetros de la contraseña: </strong>' + '<br>');
	document.write('Tamaño total: ' + tamanio_password + '<br>');
	document.write('Cantidad de letras minúsculas: ' + numero_minimo_letras_minusculas + '<br>');
	document.write('Cantidad de letras mayúsculas: ' + numero_minimo_letras_mayusculas + '<br>');
	document.write('Cantidad de números: ' + numero_minimo_numeros + '<br>');
	document.write('Cantidad de símbolos: ' + numero_minimo_simbolos + '<br>');
	document.write('El resto de caracteres hasta llegar al tamaño de la contraseña se completa con caracteres aleatorios.<br>');
	document.write('<br>' + '<center>----------------- </center>' + '<br>');
	document.write('<center>Contraseña generada con exito: <strong>' + password_definitivo + '</center></strong><br>');
	document.write('<center>----------------- </center>' + '<br>');
	document.write('' + '<br>');

	document.write('<br>' + '<br>' + '<center>Para generar una nueva contraseña, actualice la página y vuelva a presionar el botón</center>')
}