const {app, BrowserWindow} = require('electron');
const {dialog} = require('electron');
const {ipcMain} = require('electron');
const notif = require('node-notifier');
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

ipcMain.on('show-notification', (event, arg) => {
    notif.notify({
        title: 'Notification Title',
        message: 'Hai, pesan notifikasi...',
        icon: path.join(__dirname, 'icon.png'), // absolute path, tidak berlaku untuk balloon
        sound: true,
        wait: true
    },
    function(err, response) {
        // response adalah respon dari notifikasi
        console.log(response);
    });
    
    notif.on('click', function(notifierObject, options) {
        // terjadi jika `wait: true` dan user mengklik notifikasi
        console.log("click");
    });
    
    notif.on('timeout', function(notifierObject, options) {
        // terjadi jika `wait: true` dan notification ditutup
        console.log("timeout");
    });
});