// Fetch latest git commit and write to .env

const {writeFileSync, readFileSync} = require("node:fs");
const revision = require('child_process')
    .execSync('git rev-parse --short=8 HEAD')
    .toString().trim()

let envContent = readFileSync('.env').toString().trim()
const latestCommitHash = envContent.match(/VITE_LATEST_COMMIT=\w*/)
if (latestCommitHash) {
    envContent = envContent.replace(/VITE_LATEST_COMMIT=\w*/, `VITE_LATEST_COMMIT=${revision}`)
} else {
    envContent = `VITE_LATEST_COMMIT=${revision}\n` + envContent
}

writeFileSync('.env', envContent)