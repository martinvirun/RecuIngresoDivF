function mostrar()
{
	let nombrecliente ;
	let marca;
	let cantidad;
	let preciouni; 
	let seguir ; 
	let acumfelipe =0;
	let acumiluminati =0;
	let acumargentina =0;
	let contfelipe =0;
	let contiluminati=0;
	let contargentina=0;
	let contgeneral =0;
    let precioargentina;
	let precioiluminati;
	let preciofelipe;
	let promfelipe=0
	let promargentina=0
	let promiluminati =0; 
	let marcamasventas;
	let totaldelacompra;
	let acumpreciofelipe =0;
	let acumdescuentofelipe =0;
	let acumprecioargentina =0;
	let acumdescuentoargentina =0;
	 let totaldelacompraargentina;
	 let totaldelacomprafelipe;
	 let totaldelacomprailuminati;
	  let recaudtotal;
	  let totaldescuento;
	

	do {
		 nombrecliente = prompt("ingrese nombre cliente");
		 cantidad = parseInt(prompt("ingrese cantidad de lamparas"));
		 while(isNaN(cantidad)){
			cantidad = parseInt(prompt("error,ingrese cantidad de lamparas"));}

		 marca = prompt("ingrese marca deseada : felipelamparas - argentinaluz - iluminati").toLowerCase();
		 
		 preciouni = parseFloat(prompt("ingrese precio por unidad "));
             while(isNaN(preciouni)){
			  preciouni = parseFloat(prompt("ingrese precio por unidad "));}
			  
		 seguir = prompt("desea ingresar algo otra vente si/no ");



      contgeneral ++ ;


		if (marca == "felipelamparas"){
			acumfelipe += cantidad ;
			contfelipe ++ ;
			preciofelipe = preciouni;
		totaldelacomprafelipe= preciofelipe * cantidad ; } 

		else if (marca =="argentinaluz"){
          acumargentina += cantidad ;
			contargentina ++;
			precioargentina = preciouni ;  
		totaldelacompraargentina= precioargentina * cantidad; }
			else {acumiluminati += cantidad ;
				contiluminati ++ ;
			precioiluminati = preciouni;
		totaldelacomprailuminati = precioiluminati* cantidad ; }

		if (marca == "felipelamparas" && acumfelipe > 5){
			acumpreciofelipe += totaldelacompra ;
			acumdescuentofelipe += totaldelacomprafelipe *.10; 
		}if( marca =="argentinaluz" && acumargentina >=3 ){
			acumprecioargentina += totaldelacompraargentina;
			acumdescuentoargentina += totaldelacompraargentina *.05;
		}

				
        

		   }while(seguir == "si" );
		   
         totaldescuento = acumdescuentoargentina + acumdescuentofelipe;

		   recaudtotal = (totaldelacomprafelipe + totaldelacomprailuminati + totaldelacompraargentina)-totaldescuento;

           
	


	
 if (acumfelipe !=0){
	 promfelipe = acumfelipe / contfelipe ; 

 } 
 if (acumargentina !=0 ) { 
	 promargentina = acumargentina/ contargentina ;
 }
 if (acumiluminati !=0 ){
	 promiluminati = acumiluminati/contiluminati ;
 }

 if (contiluminati > contfelipe && contiluminati > contargentina) {
	marcamasventas = "iluminati"}
	else if (contfelipe > contiluminati && contfelipe > contargentina){
		marcamasventas ="felipeilamparas"

	}else {
		marcamasventas = "argentinaluz"
	}

	




 console.log ("lo recaudado es de un total de : $" + recaudtotal );
 
 console.log ("las perdidas por descuento  son : $" + totaldescuento);

 console.log("los promedios por marcasson los siguientes ;  argentinalus " + promargentina + " iluminati " + promiluminati + " felipeilum " + promfelipe);

 console.log ("la marca con mas ventas es " + marcamasventas);
}
