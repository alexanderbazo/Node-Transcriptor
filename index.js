/* eslint-env node */

import * as MyConsole from "./lib/ConsoleWrapper.js";
import Config from "./lib/Config.js";
import * as GoogleSpeechClient from "./lib/GoogleSpeechClient.js";
import GoogleBucket from "./lib/GoogleBucket.js";

function run(inputFile, configFile) {
    if (inputFile === undefined) {
        MyConsole.error("No input file specified.");
        process.exit(1);
    } else {
        let config = new Config(configFile),
            bucket = new GoogleBucket(config.bucket);
        config.setEncoding(process.argv[4]);
        config.setSampleRateHertz(process.argv[5]);
        config.setLanguageCode(process.argv[6]);
        process.env.GOOGLE_APPLICATION_CREDENTIALS = config.credentialFile;
        bucket.uploadFile(inputFile).then(function(gsUri) {
            GoogleSpeechClient.transcribe(gsUri, config).then(onResult);
        });
    }
}

function onResult(result) {
    MyConsole.log(result);
}

run(process.argv[2], process.argv[3]);