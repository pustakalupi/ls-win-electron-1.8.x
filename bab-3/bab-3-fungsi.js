//mendeklarasikan fungsi
function doubleLogs(message){
	console.log(message);
	console.log(message);
}

//memanggil fungsi
doubleLogs("makan");

//fungsi dengan return value
function getCurrentFood(){
	return "sushi";
}

doubleLogs(getCurrentFood());

//fungsi bisa dijadikan variabel
var variabelFungsi = getCurrentFood;

console.log(variabelFungsi());