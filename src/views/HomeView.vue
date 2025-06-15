<script setup>
import { ref, onMounted } from 'vue'
import FHIR from 'fhirclient'

const patientId = ref('Loading...')
const patientData = ref('Loading...')
const userData = ref('Loading...')
const medications = ref('Loading...')

onMounted(() => {
  FHIR.oauth2.ready().then(client => {
    // 1. Show client.patient.id
    patientId.value = client.patient.id || 'No patient context'

    // 2. Show client.patient.read() JSON string
    client.patient.read().then(res => {
      patientData.value = JSON.stringify(res, null, 2)
    }).catch(err => {
      patientData.value = 'Error: ' + err
    })

    // 3. Show client.user.read() JSON string
    if (client.user && client.user.read) {
      client.user.read().then(res => {
        userData.value = JSON.stringify(res, null, 2)
      }).catch(err => {
        userData.value = 'Error: ' + err
      })
    } else {
      userData.value = 'No user context'
    }

    // 4. Fetch MedicationStatement for the patient
    if (client.patient && client.patient.id) {
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
  }).catch(err => {
    patientId.value = 'SMART client error: ' + err
    patientData.value = 'SMART client error: ' + err
    userData.value = 'SMART client error: ' + err
    medications.value = 'SMART client error: ' + err
  })
})
</script>

<template>
  <main>
    <section>
      <h2>Patient ID</h2>
      <pre>{{ patientId }}</pre>
    </section>
    <section>
      <h2>Patient Resource</h2>
      <pre>{{ patientData }}</pre>
    </section>
    <section>
      <h2>User Resource</h2>
      <pre>{{ userData }}</pre>
    </section>
    <section>
      <h2>Patient Medications (MedicationStatement)</h2>
      <pre>{{ medications }}</pre>
    </section>
  </main>
</template>
