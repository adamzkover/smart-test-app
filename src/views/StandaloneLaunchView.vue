<template>
  <main>
    <h1>SMART on FHIR Standalone Launch</h1>
    <label for="fhir-url">FHIR Server URL:</label>
    <input id="fhir-url" v-model="fhirUrl" type="text" style="width: 400px;" />
    <button @click="startStandaloneAuth">Launch App</button>
  </main>
</template>

<script setup>

import FHIR from 'fhirclient'
import { ref } from 'vue'

const params = new URLSearchParams(window.location.search)
const fhirUrl = ref(params.get('iss') || '')

function startStandaloneAuth() {
  FHIR.oauth2.authorize({
    clientId: "smart-test-app",
    scope: 'launch openid fhirUser patient/*.read',
    redirectUri: '/smart-test-app/#/',
    iss: fhirUrl.value
  })
}

</script>
