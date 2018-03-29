const {app, BrowserWindow} = require('electron');
const {ipcMain} = require('electron');
const url = require('url');
const path = require('path');

function SomeClass(){
    this.some1 = "some1";
    this.some2 = "some2";
}

SomeClass.prototype.someFunction = function () {
    return "ini adalah method someFunction dari SomeClass";
}

let sc = new SomeClass();
let win;
function createWindow() { 
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format ({ 
       pathname: path.join(__dirname, 'home.html'), 
       protocol: 'file:', 
       slashes: true 
    }));
}

app.on('ready', createWindow);

ipcMain.on('button-clicked', (event, arg) => {
    console.log(arg);//catat arg dari renderer process

    //kirim balik ke pengirim
    event.sender.send('button-clicked', "DARI MAIN PROCESS: ini argument-nya");

    //kirim ke tempat lain
    win.webContents.send('pesan-lain', "DARI MAIN PROCESS: ini pesan ke event lain!!");

    //coba passing object dengan method, apakah bisa??
    win.webContents.send('coba-kirim-someclass', sc);
});