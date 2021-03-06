Neutralino.init();

async function readGameDir(path, level = 0) {
    let gameDir = await Neutralino.filesystem.readDirectory(path);
    let gameList = [];

    // Scan for xbox files
    for (const f of gameDir) {
        if ((f.entry.endsWith('.iso') ||
                f.entry.endsWith('.xiso') ||
                f.entry.endsWith('.xex')) && f.type === 'FILE') {
            gameList.push({
                name: f.entry,
                path: path + '/' + f.entry
            })
        }

        if (f.type === 'DIRECTORY' && (f.entry !== '.' && f.entry !== '..') && level < 3) {
            gameList = gameList.concat(await readGameDir(path + '\\' + f.entry, level + 1))
        }
    }

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

async function setCLIConfigOption(key, value) {
    let config = await getCLIConfig();
    config[key] = value;
    Neutralino.storage.setData('cliConfig', JSON.stringify(config));
}

async function getCLIConfig() {
    if (!(await Neutralino.storage.getData('cliConfig'))) {
        await Neutralino.storage.setData('cliConfig', '{}');
    }

    return JSON.parse(await Neutralino.storage.getData('cliConfig'))
}

async function getCLIConfigOption(key) {
    let data
    
    try{
        data = JSON.parse((await Neutralino.storage.getData('cliConfig')))[key] || null
    } catch(e) {
        await Neutralino.storage.setData('cliConfig', '{}');

        data = null
    }

    return data
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
    Neutralino.window.minimize()

    const cliOpts = await getCLIConfig()
    let cliStr = ''

    for (let key in cliOpts) {
        if (cliOpts[key]) {
            cliStr += ` --${key}=${cliOpts[key]}`
        }
    }

    Neutralino.os.execCommand(`${await getXeniaPath()} ${file} ${cliStr}`);
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
