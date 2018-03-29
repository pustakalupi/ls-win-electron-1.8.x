const {ipcRenderer} = require('electron');

document.getElementById("btnShowNotification").onclick = function() {
    ipcRenderer.send('show-notification', () => {
        console.log("Event sent.");
    });
};