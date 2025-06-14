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
  const clientId = 'my-client-id'
  const redirectUri = window.location.origin + '/smart-test-app/'
  const iss = new URLSearchParams(window.location.search).get('iss') || 'https://fhirserver.example.com'
  FHIR.oauth2.authorize({
    clientId,
    scope: 'launch openid fhirUser patient/*.read',
    redirectUri,
    iss,
    state: '123',
    aud: iss
  })
}
</script>

<style scoped>
.launch-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
}
</style>
