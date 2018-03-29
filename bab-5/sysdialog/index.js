const {app, BrowserWindow} = require('electron');
const {dialog} = require('electron');
const {ipcMain} = require('electron');
const url = require('url');
const path = require('path');

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

ipcMain.on('open-file', (event, path) => {
    dialog.showOpenDialog({
        properties: ['openDirectory']
    },
    function (fileNames) {
        if(fileNames === undefined){
            console.log("No file selected");
        }else{           
            console.log(fileNames[0]);
        }
    });
});

ipcMain.on('open-messagebox', (event, path) => {
    dialog.showMessageBox({
        type: "info",
        title: "Ini adalah Message Box!",
        message: "Keyboard tidak terdeteksi"
    })
});