Algoritmo IVA_SIN_IVA
	//escribir un programa que lea 5 precios de 5 productos  y calcule el sutotal del producto, el IVA y el total del neto.
	Escribir "Ingrese precio: "
	Leer precio
	Escribir "Ingrese cantidad a comprar: "
	Leer cantidad
	total_sin_iva <- precio * cantidad
	total_mas_iva = total_sin_iva * 19
	Escribir "Total sin iva: ", total_sin_iva
	Escribir "Total con iva: ", total_mas_iva
	
FinAlgoritmo
