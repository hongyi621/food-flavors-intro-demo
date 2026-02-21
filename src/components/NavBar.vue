<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-container">
      <a href="#" class="logo">
        <span class="logo-icon">🧪</span>
        <span class="logo-text">
          <template v-if="lang === 'en'">Epochal<span class="logo-highlight">Aromatic</span></template>
          <template v-else>时代<span class="logo-highlight">芳香</span></template>
        </span>
      </a>

      <button class="mobile-toggle" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul :class="['nav-links', { open: menuOpen }]">
        <li><a href="#home" @click="menuOpen = false">{{ t('nav.home') }}</a></li>
        <li><a href="#about" @click="menuOpen = false">{{ t('nav.about') }}</a></li>
        <li><a href="#flavors" @click="menuOpen = false">{{ t('nav.flavors') }}</a></li>
        <li><a href="#applications" @click="menuOpen = false">{{ t('nav.applications') }}</a></li>
        <li><a href="#why-us" @click="menuOpen = false">{{ t('nav.whyUs') }}</a></li>
        <li><a href="#contact" @click="menuOpen = false">{{ t('nav.contact') }}</a></li>
        <li>
          <button class="lang-toggle" @click="toggleLang" :title="lang === 'en' ? 'Switch to 中文' : 'Switch to English'">
            <span class="lang-globe">🌐</span>
            <span class="lang-label">{{ lang === 'en' ? '中文' : 'EN' }}</span>
          </button>
        </li>
        <li>
          <a href="#contact" class="btn btn-primary nav-cta" @click="menuOpen = false">
            {{ t('nav.cta') }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, lang, toggleLang } = useI18n()

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}

.navbar.scrolled {
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.06);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  z-index: 10;
}

.logo-icon {
  font-size: 1.5rem;
}

.logo-text {
  color: var(--dark);
}

.logo-highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--gray-700);
  transition: var(--transition);
  position: relative;
}

.nav-links a:not(.nav-cta)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 2px;
  transition: var(--transition);
}

.nav-links a:not(.nav-cta):hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: var(--primary-dark);
}

.nav-cta {
  padding: 10px 24px !important;
  font-size: 0.82rem !important;
}

/* Language Toggle */
.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  background: var(--primary-light);
  border: 2px solid rgba(245, 166, 35, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary-dark);
  cursor: pointer;
  transition: var(--transition);
}

.lang-toggle:hover {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  border-color: transparent;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(245, 166, 35, 0.3);
}

.lang-globe {
  font-size: 1rem;
}

.lang-label {
  letter-spacing: 0.03em;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 6px;
  z-index: 10;
}

.mobile-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--dark);
  border-radius: 2px;
  transition: var(--transition);
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 1024px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
    background: var(--white);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition);
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }

  .nav-links a {
    font-size: 1.1rem;
  }
}
</style>
