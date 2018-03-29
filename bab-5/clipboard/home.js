const {ipcRenderer} = require('electron');

document.getElementById("btnCopy").onclick = function() {
    ipcRenderer.send('copy', document.getElementById("text-container").value, () => {
        console.log("Event sent.");
    });
};

document.getElementById("btnPaste").onclick = function() {
    ipcRenderer.send('paste', () => {
        console.log("Event sent.");
    });

    ipcRenderer.on('paste', (event, arg) => {
        document.getElementById("text-container").value += arg.toString() + "\n";
    });
};