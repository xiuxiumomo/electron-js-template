import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// Custom APIs for renderer
const api = {
  fetch: (url, options = {}) =>
    ipcRenderer.invoke("adsearch:companyCondition", { url, ...options }),
};
const extendedElectronAPI = {
  ...electronAPI,
  closeWindow: () => ipcRenderer.invoke("window-close"),
  minimizeWindow: () => ipcRenderer.invoke("window-minimize"),
  maximizeWindow: () => ipcRenderer.invoke("window-maximize"),
  toggleDevTools: () => ipcRenderer.invoke("toggle-devtools"),
};
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", extendedElectronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = extendedElectronAPI;
  window.api = api;
}
