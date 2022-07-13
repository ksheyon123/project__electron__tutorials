const { app, BrowserWindow } = require("electron");
const path = require("paht");
const url = require("url");
const isDev = require("electron-is-dev");

function createWindow() {
  // Width & Height Electron으로 열리는 Application의 Window 크기입니다.
  const win = new BrowserWindow({
    width: 600,
    height: 800,
  });

  const live = url.format({
    pathname: path.join(__dirname, "./index.html"),
    protocol: "file:",
    slashes: true,
  });

  // Electron-is-dev Library가 development || production Mode를 체크합니다.
  // Dev Mode에서는 3000 Port의 local Server를 Electron에서 Package하여 실행합니다.
  // Prod Mode에서는 React Build 결과물 (default build dir)의 내용을 Package합니다.

  const startUrl = isDev ? "http://127.0.0.1:3000" : live;

  // startUrl에 해당하는 File 혹은 Url을 호출합니다.
  win.loadURL(startUrl);

  // Dev Tools을 실행합니다.
  win.webContents.openDevTools({ mode: "detach" });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bars to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
