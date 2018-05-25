"use strict";

/* eslint-env node */
const createWindowsInstaller = require("electron-winstaller").createWindowsInstaller;
const path = require("path");

getInstallerConfig().then(createWindowsInstaller).catch((error) => {
    console.error(error.message || error);
    process.exit(1);
});

function getInstallerConfig() {
    console.log("Creating windows installer");
    const rootPath = path.join("./");
    const outPath = path.join(rootPath, "dist");

    return Promise.resolve({
        appDirectory: path.join(outPath, "Media\ Player-win32-x64"),
        authors: "Lijerbul LJOBOY",
        noMsi: true,
        outputDirectory: path.join(outPath, "windows-installer"),
        iconUrl: "https://raw.githubusercontent.com/nt1m/media-player/gh-pages/img/icon.ico",
        exe: "Zikalizer.exe",
        setupExe: "ZikalizerInstaller.exe",
        setupIcon: path.join(rootPath, "img/icon.ico"),
        skipUpdateIcon: true
    });
}