const {app} = require('electron');
const {BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function createWindow() { 
    let parent = new BrowserWindow();
    let child = new BrowserWindow({
        parent: parent
    });

    parent.loadURL(url.format ({ 
        pathname: path.join(__dirname, 'parent.html'), 
        protocol: 'file:', 
        slashes: true 
     }));
     
    child.loadURL(url.format ({ 
        pathname: path.join(__dirname, 'child.html'), 
        protocol: 'file:', 
        slashes: true 
    }));

    child.show();
    parent.show();
}

app.on('ready', createWindow);