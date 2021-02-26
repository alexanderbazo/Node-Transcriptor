/* eslint-env node */

import * as fs from "fs";

function loadValuesFromConfigFile(file) {
    let content = fs.readFileSync(file);
    return JSON.parse(content);

}

class Config {

    constructor(file = "config.json") {
        let configValue = loadValuesFromConfigFile(file);
        this.credentialFile = configValue.credentialFile || null;
        this.bucket = configValue.bucketName || null;
        this.encoding = configValue.encoding || null;
        this.sampleRateHertz = configValue.sampleRateHertz || null;
        this.languageCode = configValue.languageCode || null;
    }

    setEncoding(encoding) {
        this.encoding = encoding || this.encoding;
    }

    setSampleRateHertz(sampleRateHertz) {
        this.sampleRateHertz = sampleRateHertz || this.sampleRateHertz;
    }

    setLanguageCode(languageCode) {
        this.languageCode = languageCode || this.languageCode;
    }
}

export default Config;