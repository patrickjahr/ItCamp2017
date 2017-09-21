const { app, BrowserWindow, globalShortcut, Tray, Menu } = require('electron');
const path = require('path');
const url = require('url');

let win;
let tray;

let createWindow = () => {
    win = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'web/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    globalShortcut.register('CmdOrCtrl+Shift+D', () => {
        win.webContents.toggleDevTools();
    });

    win.on('closed', () => {
        win = null
    });
};

app.on('ready', () => {
    createWindow();
    tray = new Tray(path.join(__dirname, 'tray.png'));
    tray.setToolTip('ITCamp!');

    tray.on('click', () => {
        win.isVisible() ? win.hide() : win.show()
    });
});

app.on('window-all-closed', () => {
    globalShortcut.unregisterAll();
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});