var suatuInteger = 1985;
console.log(suatuInteger + " bertipe " + typeof(suatuInteger));

var jadiString = suatuInteger.toString();
console.log(jadiString + " bertipe " + typeof(jadiString));

var stringJadiNumber = Number(jadiString);
console.log(stringJadiNumber + " bertipe " + typeof(stringJadiNumber));

var benarSalah = true;
console.log(benarSalah + " bertipe " + typeof(benarSalah));

var booleanJadiString = benarSalah.toString();
console.log(booleanJadiString + " bertipe " + typeof(booleanJadiString));

var stringJadiBoolean = Boolean(booleanJadiString);
console.log(stringJadiBoolean + " bertipe " + typeof(stringJadiBoolean));