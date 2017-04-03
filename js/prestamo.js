function calcularCuota()
{
	var prestamo= document.getElementById("prestamo").value;
	var interes= document.getElementById("interes").value;
	var meses = document.getElementById("meses").value;

	//Pasando el interes a anual.
	interes = ( (interes/100) / 12);

	//Fórmula para calcular la cuota
	var cuota= (prestamo * interes) / (1 - Math.pow( (1+interes) , (-meses) ) );

	//Para redondear y usar dos cifras.
	cuota= (Math.round(cuota*100) /100).toFixed(2);

	//Validar para que no dejen ningún campo vacío del formulario.
	if (isNaN(cuota) || cuota == "Infinity" || cuota == 0)
	{
		document.getElementById("cuotamensual").innerHTML = "Llene todos los datos.";
	}
	else
	{
		document.getElementById("cuotamensual").innerHTML=cuota;
	}//Fin del else
} //Fin de la función.