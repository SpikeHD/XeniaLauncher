# Xenia Launcher

Simple launcher UI for configuring and launching Xenia and Xbox games through Xenia.

[Download here!](https://github.com/SpikeHD/XeniaLauncher/releases)

Once downloaded, just extract everything into it's own folder and, once launched, set your xenia binary and game paths.

![image](https://user-images.githubusercontent.com/25207995/161187711-df484f6a-fade-4acf-8f24-fa1ff2681986.png)

# Setup

1. Clone the repository: `git clone git@github.com:SpikeHD/XeniaLauncher.git`
2. Install the `neu` CLI tool: `npm install -g @neutralinojs/neu`
3. Run `npm run setup`
    - This will download Neutralino binaries and do a little bit of setup for you
4. Run `npm install` to install dependancies, including `preact-cli` which is used to build the Preact portion
5. To compile and test everything, run `npm run dev`
6. To compile a build for release, run `npm run build`

That's it!

# Future Plans

* Auto-update Xenia
* Recursively find ISO/XISO/XEX files in nested folders in the game folder
* Detect/find icons for games to display rather than a blank disc image
* UI changes to make it a lil nicer
* Display current paths to Xenia/Game folder in the buttons or on hover or something

# Contributing

Issues, PRs, etc. are all welcome!
