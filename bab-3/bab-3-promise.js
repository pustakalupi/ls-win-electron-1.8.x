var myPromise = function(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){ //BISA DIGANTI DENGAN FUNGSI APAPUN
			resolve('Promise di-resolve'); //COBA DEAKTIFKAN INI dengan menambah '//'
			//reject('Promise di-reject'); //COBA AKTIFKAN INI dengan menghapus '//'
		}, 2500);
	});
}

myPromise().then((message) => {
	console.log('Success: ', message);
}).catch((error) => {
	console.log('Error: ', error);
});