<script setup>
import { ref, onMounted } from 'vue'
import FHIR from 'fhirclient'

const patientId = ref('Loading...')
const patientData = ref('')
const userData = ref('')
const medications = ref('')
let client = null

onMounted(() => {
  FHIR.oauth2.ready().then(c => {
    client = c
    patientId.value = client.patient.id || 'No patient context'
  }).catch(err => {
    patientId.value = 'SMART client error: ' + err
  })
})

function loadPatient() {
  if (client && client.patient && client.patient.read) {
    patientData.value = 'Loading...'
    client.patient.read().then(res => {
      patientData.value = JSON.stringify(res, null, 2)
    }).catch(err => {
      patientData.value = 'Error: ' + err
    })
  } else {
    patientData.value = 'No patient context'
  }
}

function loadUser() {
  if (client && client.user && client.user.read) {
    userData.value = 'Loading...'
    client.user.read().then(res => {
      userData.value = JSON.stringify(res, null, 2)
    }).catch(err => {
      userData.value = 'Error: ' + err
    })
  } else {
    userData.value = 'No user context'
  }
}

function loadMedications() {
  if (client && client.patient && client.patient.id) {
    medications.value = 'Loading...'
    client.request(`MedicationStatement?subject=Patient/${client.patient.id}`)
      .then(res => {
        medications.value = JSON.stringify(res, null, 2)
      })
      .catch(err => {
        medications.value = 'Error: ' + err
      })
  } else {
    medications.value = 'No patient context for medications'
  }
}
</script>

<template>
  <main>
    <section>
      <h2>Patient ID</h2>
      <pre>{{ patientId }}</pre>
    </section>
    <section>
      <h2>Patient Resource</h2>
      <button @click="loadPatient">Load Patient Resource</button>
      <pre>{{ patientData }}</pre>
    </section>
    <section>
      <h2>User Resource</h2>
      <button @click="loadUser">Load User Resource</button>
      <pre>{{ userData }}</pre>
    </section>
    <section>
      <h2>Patient Medications (MedicationStatement)</h2>
      <button @click="loadMedications">Load Medications</button>
      <pre>{{ medications }}</pre>
    </section>
  </main>
</template>
