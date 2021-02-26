/* eslint-env node */

function createLogString(app, label, msg) {
    let date = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
    return `${date} | [${app}] (${label}): ${msg}`;
}

function log(msg) {
    console.log(createLogString("Node Transcriptor", "Log", msg));
}

function error(msg) {
    console.error(createLogString("Node Transcriptor", "Log", msg));
}

export { log, error };