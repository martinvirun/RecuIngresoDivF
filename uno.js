
function mostrar()
{   let nombre ;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let seguir ;
	let acumsueldoprom =0;
	let contsueldoprom = 0;
	let acumsueldoanalista =0;
	let contsueldoanalista=0;
	let acumsueldoqa =0;
	let contsueldoqa=0;
	let flagmayorsueldo =1;
	let sexomayorsueldo;
	let mayorsueldo;
	let flagmayorsueldof =1;
	let nombremayorsueldof;
	let mayorsueldof;
	let contadornbmargen=0;
	let promprog =0;
	
	let promanalista=0;
	let promqa =0;
	
	
	do{
		nombre = prompt("ingrese nombre");
	
		edad =parseInt(prompt("ingrese edad"));
		while(isNaN(edad)){
			edad =parseInt(prompt("error ,ingrese edad"));
		}
		sexo = prompt("ingrese sexo como . f /m/nb").toLowerCase();
	
		puesto= prompt("ingrese puesto como :programador - analista - qa ").toLowerCase();
	
		sueldo=prompt("ingrese sueldo entre 15000 a 70000");
		while (isNaN(sueldo|| sueldo > 70000 || sueldo < 17000)){
			sueldo=prompt(" error, ingrese sueldo entre 15000 a 70000");}
	
			seguir =prompt("desea ingresar otro trabajador ? si/no");
	
	 
	
	
	
			if ( puesto=="programador"){
				acumsueldoprom += sueldo;
				contsueldoprom++;
			}else if  ( puesto=="analista"){
				acumsueldoanalista += sueldo;
				contsueldoanalista++;}
				else {
					acumsueldoqa += sueldo;
				contsueldoqa++;
				}
		 
				
	
		if (flagmayorsueldo|| mayorsueldo < sueldo){
			mayorsueldo = sueldo;
			sexomayorsueldo = sexo;
			flagmayotsueldo =0
		}if (sexo =="f"){
		if (flagmayorsueldof|| mayorsueldo < sueldo){
			mayorsueldof = sueldo;
			nombremayorsueldof= nombre;
			flagmayorsueldof =0}}
	
	
	
		if ( puesto =="programador" && sexo =="nb" && sueldo > 20000 && sueldo< 55000){
		contadornbmargen++}
		
		
	
	}while(seguir == "si");
	
	
	
	
	if(contsueldoprom!=0){
	promprog = acumsueldoprom / contsueldoprom ;}
	if(contsueldoqa !=0){
	promqa = acumsueldoqa / contsueldoqa; }
	if (contsueldoanalista !=0){
	promanalista = acumsueldoanalista / contsueldoanalista ;}
	
	
	
	
	console.log("promedios por puesto : programador "+ promprog + " analista " + promanalista + " qa " + promqa );
	console.log ("el sexo del mejor sueldo : " + sexomayorsueldo);
	if (flagmayorsueldof){
	console.log("no se registro empleado femenino ");
	}else {console.log("el empleado femenino con mayor sueldo es " + nombremayorsueldof)}
	if (contadornbmargen !=0 ){
		console.log("la cantidad de no binarios programadores es de "+ contadornbmargen);} }
	

