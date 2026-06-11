// preload.js

import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("kartRacer", {
    version: "0.1.0",

    getInfo() {
        return {
            app: "Go Kart Racesim",
            version: "0.1.0"
        };
    }
});