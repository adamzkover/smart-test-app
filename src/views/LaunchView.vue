<template>
  <div class="launch-container">
    <h1>SMART on FHIR Launch</h1>
    <button @click="startAuth">Launch App</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import FHIR from 'fhirclient'

const router = useRouter()

function startAuth() {

  // The client_id that you should have obtained after registering a client at the EHR.
  const clientId = 'my-client-id'

  // The scopes that you request from the EHR. In this case we want to:
  // launch            - Get the launch context
  // openid & fhirUser - Get the current user
  // patient/*.read    - Read patient data
  // TODO link to the scopes documentation
  const scope = 'launch openid fhirUser patient/*.read'

  // TODO redirectUri documentation
  const redirectUri = window.location.origin + '/smart-test-app/'

  const iss = new URLSearchParams(window.location.search).get('iss') || 'https://fhirserver.example.com'
  FHIR.oauth2.authorize({
    clientId,
    scope,
    redirectUri,
    iss,
    state: '123',
    aud: iss
  })
}
</script>
