import { app, BrowserWindow } from 'electron';
import path, {dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768  
  });

  // Load your React app's index.html
  win.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
}

// When Electron has finished initialization, create the window
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());

// Create a window if the app is activated 
app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && createWindow());
