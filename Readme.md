# Node.js CLI interface for Googles Cloud Speech to Text Service
git

# Usage

- Install dependencies via `npm install`
- Prepare your Google Cloud Project (Enable [Speech-To-Text](https://cloud.google.com/speech-to-text) and [Storage](https://cloud.google.com/storage))
- Create a [service account](https://cloud.google.com/iam/docs/service-accounts) and download credential file
- Create a [storage bucket](https://cloud.google.com/storage/docs/creating-buckets) and allow service account to use it
- Move `config.json.sample` to `config.json`, remove comments and modify parameters
- Run `node index.js LOCAL_AUDIO_FILE` to start transcribing
- Results are printed to *stdout*

# Hints

- To prevent unnecessary costs, set a limited budget for your service account before using this script
- Remove the uploaded audio file from your bucket when transcription is done


