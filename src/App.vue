<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <BNavbar
      v-b-color-mode="'dark'"
      toggleable="lg"
      variant="primary"
  >
    <BNavbarBrand href="#">NavBar</BNavbarBrand>
    <BNav>
      <BNavItem>
        <RouterLink to="/">Home</RouterLink>
      </BNavItem>
    </BNav>
  </BNavbar>
  <RouterView />
</template>
