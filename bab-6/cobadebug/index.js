const {app, BrowserWindow} = require('electron');

let win;
var a = "sebuah string";

function createWindow() { 
    win = new BrowserWindow({width: 800, height: 600});

    var b = a + " baru";

    var c = b;
}

app.on('ready', createWindow);