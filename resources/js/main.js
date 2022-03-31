async function readGameDir(path) {
    let gameDir = await Neutralino.filesystem.readDirectory(path);
    let gameList = [];

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

function getGameDir() {
    return "C:/Users/spike/Documents"
}

function getXeniaPath() {
    return "C:/Users/spike/Documents/Xenia/xenia.exe"
}

async function openFile(msg) {
    let entries = await Neutralino.os.showOpenDialog(msg, {
        filters: [{
            name: 'All files',
            extensions: ['*']
        }]
    });
    
    return entries
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

function onTrayMenuItemClicked(event) {
    switch(event.detail.id) {
        case "VERSION":
            Neutralino.os.showMessageBox("Version information",
                `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
            break;
        case "QUIT":
            Neutralino.app.exit();
            break;
    }
}

function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();

Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
Neutralino.events.on("windowClose", onWindowClose);

if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    setTray();
}
