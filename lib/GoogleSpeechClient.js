/* eslint-env node */

import * as fs from "fs";

import * as MyConsole from "./ConsoleWrapper.js";
import speech from "@google-cloud/speech";

async function transcribe(gsUri, config) {
    MyConsole.log(`Creating SpeechClient for transcription`);
    let client = new speech.SpeechClient(),
        request = {
            config: config,
            audio: {
                uri: gsUri
            }
        };
    MyConsole.log(`Starting transcription operation for ${gsUri}`);
    const [operation] = await client.longRunningRecognize(request);
    MyConsole.log(`Fetching response`);
    const [response] = await operation.promise();
    MyConsole.log(`Mapping results`);
    const transcription = response.results.map(result => result.alternatives[0].transcript).join("\n");
    return transcription;
}

export { transcribe };