const {app} = require('electron');
const {BrowserWindow} = require('electron');
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