import { app, BrowserWindow } from "electron";

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: "#000",
        webPreferences: {
            preload: new URL("./preload.js", import.meta.url).pathname
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});