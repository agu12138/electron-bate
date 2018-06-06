const {app, globalShortcut,BrowserWindow} = require('electron');
let win;
let windowConfig = {
    width:1600,
    height:900,
    frame:false,
    icon: __dirname + '/1.ico'
};
function createWindow(){
    win = new BrowserWindow(windowConfig);
    win.loadURL('file://' + __dirname + '/login.html');
    win.setFullScreen(true);
    //开启调试工具
    win.webContents.openDevTools();
    win.on('resize',() => {
        win.reload();
    })
}

app.on('ready',createWindow);
// 当所有的窗口被关闭后退出应用  
/*app.on('window-all-closed', () => {  
    // 对于OS X系统，应用和相应的菜单栏会一直激活直到用户通过Cmd + Q显式退出  
    if (process.platform !== 'darwin') {  
      app.quit();  
    }  
  });  */