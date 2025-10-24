import { ipcMain, BrowserWindow } from "electron";

export function setupWindowControls() {
  // 关闭窗口
  ipcMain.handle("window-close", () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) focusedWindow.close();
  });

  // 最小化窗口
  ipcMain.handle("window-minimize", () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) focusedWindow.minimize();
  });

  // 最大化/还原窗口
  ipcMain.handle("window-maximize", () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      if (focusedWindow.isMaximized()) {
        focusedWindow.unmaximize();
      } else {
        focusedWindow.maximize();
      }
    }
  });

  // 切换调试工具
  ipcMain.handle("toggle-devtools", () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      if (focusedWindow.webContents.isDevToolsOpened()) {
        focusedWindow.webContents.closeDevTools();
      } else {
        focusedWindow.webContents.openDevTools({ mode: "bottom" });
      }
    }
  });
}
