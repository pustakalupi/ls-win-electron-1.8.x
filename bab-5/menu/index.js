const {app, Menu, MenuItem, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win;
var menuRef;
function createWindow() { 
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format ({ 
       pathname: path.join(__dirname, 'home.html'), 
       protocol: 'file:', 
       slashes: true 
    }));

    createMenu();
}

function createMenu(){
    const template = [
        {
            label: 'Actions',
            submenu: [
                {
                    label: 'Open Explorer',
                    click () { require('electron').shell.showItemInFolder("C:\\") }
                },
                {
                    label: 'Open Google',
                    click () { require('electron').shell.openExternal('http://www.google.com/') }
                },
                {
                    label: 'Open Yahoo',
                    click () { require('electron').shell.openExternal('http://www.yahoo.com/') }
                },
                {
                    label: 'Append Menu',
                    click () {
                        const menuItem = new MenuItem({
                            label: 'Additional Menu Item',
                            click: () => {
                                console.log("message");
                            }
                        });
                        
                        Menu.getApplicationMenu().append(menuItem);
                        Menu.setApplicationMenu(menuRef);
                    }
                }
            ]
        },
        {
            label: 'File',
            submenu: [
                {role: 'quit'}
            ]
        }
    ];

    menuRef = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menuRef);

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

    win.webContents.on("context-menu", function(e, params){
        contextMenu.popup(win, params.x, params.y);
    });
}

app.on('ready', createWindow);