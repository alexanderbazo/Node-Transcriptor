/* eslint-env node */

import * as MyConsole from "./ConsoleWrapper.js";
import storage from "@google-cloud/storage";

const googleStorage = new storage.Storage();

class GoogleBucket {

    constructor(name) {
        this.name = name;
    }

    async uploadFile(filename) {
        MyConsole.log(`Uploading ${filename} to cloud bucket`);
        const destination = `${Date.now()}-${filename}`;
        await googleStorage.bucket(this.name).upload(filename, {
            destination: destination
        });
        return `gs://${this.name}/${destination}`;
    }

}

export default GoogleBucket;