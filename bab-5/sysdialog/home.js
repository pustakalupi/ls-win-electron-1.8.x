const {ipcRenderer} = require('electron');

document.getElementById("btnOpenFile").onclick = function() {
    ipcRenderer.send('open-file', () => {
        console.log("Event sent.");
    });
};

document.getElementById("btnMessageBox").onclick = function() {
    ipcRenderer.send('open-messagebox', () => {
        console.log("Event sent.");
    });
};