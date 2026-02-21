<template>
  <div id="app-root" :class="{ 'lang-zh': lang === 'zh' }">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <FlavorsSection />
    <ApplicationsSection />
    <WhyChooseSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import { useI18n } from './composables/useI18n'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import FlavorsSection from './components/FlavorsSection.vue'
import ApplicationsSection from './components/ApplicationsSection.vue'
import WhyChooseSection from './components/WhyChooseSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const { lang } = useI18n()
</script>

<style>
#app-root {
  min-height: 100vh;
}

#app-root.lang-zh {
  font-family: 'Noto Sans SC', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>
