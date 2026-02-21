<template>
  <div id="app-root">
    <NavBar />
    <HeroSection />
    <ProductsSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
#app-root {
  min-height: 100vh;
}
</style>
