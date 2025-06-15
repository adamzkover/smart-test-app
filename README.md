# Test app for SMART on FHIR

> **Deployed App:** [https://adamzkover.github.io/smart-test-app/](https://adamzkover.github.io/smart-test-app/)
>

## Running the app

* Open the [SMART Launcher](https://launch.smarthealthit.org/) sandbox.
* Enter `https://adamzkover.github.io/smart-test-app/#/launch` for App's Launch URL and click Launch.
* This will open the app's launch view. Click the Launch App button.
* Choose the Practitioner and the patient.
* This will open the app's main view and display the FHIR data fetched from the server.

## Scripts

Install dependencies:

```sh
npm install
```

Run the app locally for development:

```sh
npm run dev
```

Deploy to GitHub Pages:

```sh
npm run deploy
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
