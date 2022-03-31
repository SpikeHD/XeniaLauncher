Neutralino.init();

async function readGameDir(path) {
    let gameDir = await Neutralino.filesystem.readDirectory(path);
    let gameList = [];

    // Scan for xbox files
    gameDir.forEach(f => {
        if ((f.entry.endsWith('.iso') ||
            f.entry.endsWith('.xiso') ||
            f.entry.endsWith('.xex')) && f.type === 'FILE') {
            gameList.push({
                name: f.entry,
                path: path + '/' + f.entry
            })
        }
    })

    return gameList;
}

/**
 * Data getters
 */
async function getGameDir() {
    return await Neutralino.storage.getData('gamePath')
}

async function getXeniaPath() {
    return await Neutralino.storage.getData('xeniaPath')
}

// Opens file dialog
async function openFile(msg) {
    let entries = await Neutralino.os.showOpenDialog(msg, {
        filters: [{
            name: 'All files',
            extensions: ['*']
        }]
    });
    
    return entries[0]
}

// Opens folder dialog
async function openFolder(msg) {
    let entries = await Neutralino.os.showFolderDialog(msg);
    return entries
}

// Launch a game
async function launchGame(file = '') {
    // TODO grab arguments from configuration
    Neutralino.window.minimize()
    Neutralino.os.execCommand(`${await getXeniaPath()} ${file} ${/* insert options here */ ''}`);
}

function setTray() {
    if(NL_MODE != "window") {
        console.log("INFO: Tray menu is only available in the window mode.");
        return;
    }
    let tray = {
        icon: "/resources/icons/trayIcon.png",
        menuItems: [
            {id: "VERSION", text: "Get version"},
            {id: "SEP", text: "-"},
            {id: "QUIT", text: "Quit"}
        ]
    };
    Neutralino.os.setTray(tray);
}

function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.events.on("windowClose", onWindowClose);

if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    setTray();
}
