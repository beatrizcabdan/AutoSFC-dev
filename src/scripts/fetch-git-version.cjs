const {writeFileSync, readFileSync} = require("node:fs");
const revision = require('child_process')
    .execSync('git rev-parse --short=8 HEAD')
    .toString().trim()

let envContent = readFileSync('.env').toString().trim()
const latestCommitHash = envContent.match(/LATEST_COMMIT=\w*/)
if (latestCommitHash) {
    envContent = envContent.replace(/LATEST_COMMIT=\w*/, `LATEST_COMMIT=${revision}`)
} else {
    envContent = `LATEST_COMMIT=${revision}\n` + envContent
}

writeFileSync('.env', envContent)