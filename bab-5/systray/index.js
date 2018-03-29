const {app, Menu, MenuItem, Tray, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win;
let tray;
function createWindow() { 
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format ({ 
       pathname: path.join(__dirname, 'home.html'), 
       protocol: 'file:', 
       slashes: true 
    }));

    createSystray();
}

function createSystray(){
    const contextMenu = new Menu()
    const menuItem = new MenuItem({
        label: 'Save',
        click: () => {
            const {dialog} = require('electron');
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
        }
    })
    
    contextMenu.append(menuItem);
    contextMenu.append(new MenuItem({label: 'Item1', type: 'radio'}));

    tray = new Tray('icon.png')
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)
}

app.on('ready', createWindow);