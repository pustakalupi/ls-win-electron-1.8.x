var fs = require("fs");

console.log("START");
document.getElementById("text-container").value += "START\n";

//Membaca secara asynchronous
fs.readFile('asynchronous.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}
    console.log("File ini dibaca secara asynchronous: " + data.toString());
    document.getElementById("text-container").value += data.toString() + "\n";
});

//Membaca secara synchronous
var data = fs.readFileSync('synchronous.txt');
console.log("File ini dibaca secara synchronous: " + data.toString());
document.getElementById("text-container").value += data.toString() + "\n";

console.log("STOP");
document.getElementById("text-container").value += "STOP\n";