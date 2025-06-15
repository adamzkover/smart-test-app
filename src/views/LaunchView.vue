<template>
  <main>
    <h1>SMART on FHIR Launch</h1>
    <button @click="startAuth">Launch App</button>
  </main>
</template>

<script setup>

import FHIR from 'fhirclient'

function startAuth() {

  // EHR launch. The EHR sandbox calls this URL with the following query parameters:
  // * iss: "Identifies the EHR's FHIR endpoint"
  // * launch: "Opaque identifier for this specific launch and any EHR context associated with it"

  // Options: https://docs.smarthealthit.org/client-js/api.html#common-options
  FHIR.oauth2.authorize({
    // The client_id that you should have obtained after registering a client at the EHR.
    clientId: "smart-test-app",
    // The scopes that you request from the EHR.
    // https://www.hl7.org/fhir/smart-app-launch/scopes-and-launch-context.html
    scope: 'launch openid fhirUser patient/*.read',
    // Where to redirect to after successful authorization.
    redirectUri: '/smart-test-app/#/'
  })
}

</script>
