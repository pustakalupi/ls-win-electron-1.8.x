const {ipcRenderer} = require('electron');

document.getElementById("btnSendToMain").onclick = function() {
    //kirim data ke main process
    ipcRenderer.send('button-clicked', "DARI RENDERER PROCESS: ini argument-nya", () => {
        console.log("Event sent.");
    });
};

ipcRenderer.on('button-clicked', (event, arg) => {
    alert(arg);//menampilkan arg
});

ipcRenderer.on('pesan-lain', (event, arg) => {
    alert(arg);//menampilkan arg
});

ipcRenderer.on('coba-kirim-someclass', (event, arg) => {
    alert(arg.some1 + " , " + arg.some2);//OK, data bisa lewat IPC
    alert("sekarang apakah method someFunction bisa diakses??");
    alert(arg.someFunction());//error, method tidak bisa melewati IPC
});