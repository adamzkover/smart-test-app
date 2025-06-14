<script setup>
import { ref, onMounted } from 'vue'
import FHIR from 'fhirclient'
import TheWelcome from '../components/TheWelcome.vue'

const output = ref('Loading FHIR data...')

onMounted(() => {
  FHIR.oauth2.ready().then(client => {
    // Example: fetch the current Patient resource
    client.request('Patient').then(res => {
      output.value = JSON.stringify(res, null, 2)
    }).catch(err => {
      output.value = 'FHIR request error: ' + err
    })
  }).catch(err => {
    output.value = 'SMART client error: ' + err
  })
})
</script>

<template>
  <main>
    <TheWelcome />
    <section style="margin-top:2rem">
      <h2>FHIR Server Data</h2>
      <pre>{{ output }}</pre>
    </section>
  </main>
</template>
