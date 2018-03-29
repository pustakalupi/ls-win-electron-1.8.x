function CoffeeBuilder (coffeeName) {
    this.coffeeName = coffeeName;
}

CoffeeBuilder.prototype.getCoffeeName = function() {
    return this.coffeeName;
};

CoffeeBuilder.prototype.ambilGelas = function() {
    console.log("ambil gelas");
};

CoffeeBuilder.prototype.ambilKopi = function() {
    console.log("ambil kopi " + this.getCoffeeName());
};

CoffeeBuilder.prototype.masukkanKopiKeGelas = function() {
    console.log("masukkan kopi ke gelas");
};

CoffeeBuilder.prototype.seduhDenganAirPanas = function() {
    console.log("seduh kopi dengan air panas");
};

CoffeeBuilder.prototype.adukKopinya = function() {
    console.log("aduk");
};

CoffeeBuilder.prototype.jalankan = function() {
    this.ambilGelas();
	this.ambilKopi();
	this.masukkanKopiKeGelas();
	this.seduhDenganAirPanas();
	this.adukKopinya();
};

var cb = new CoffeeBuilder("Robusta");
cb.jalankan();