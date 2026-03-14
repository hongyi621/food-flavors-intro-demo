<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-container">
      <a href="#" class="logo">
        <span class="logo-emblem">
          <svg width="32" height="32" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="url(#logoGrad)" />
            <path d="M50 20 C65 35, 75 50, 50 80 C25 50, 35 35, 50 20Z" fill="rgba(255,255,255,0.9)" />
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#E8941A" />
                <stop offset="100%" stop-color="#F5B731" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="logo-text">
          <template v-if="lang === 'en'">
            <span class="logo-epochal">EPOCHAL</span>
            <span class="logo-sub">Aromatic Ltd.</span>
          </template>
          <template v-else>
            <span class="logo-epochal">珀臣</span>
            <span class="logo-sub">香精香料</span>
          </template>
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
  padding: 16px 0;
  transition: var(--transition);
}

.navbar.scrolled {
  padding: 10px 0;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(24px) saturate(1.2);
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.08);
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
  z-index: 10;
}

.logo-emblem {
  display: flex;
  filter: drop-shadow(0 2px 4px rgba(232, 148, 26, 0.3));
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.logo-epochal {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--dark);
  letter-spacing: 0.06em;
}

.logo-sub {
  font-size: 0.65rem;
  font-weight: 500;
  color: var(--gray-500);
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
  background: var(--brand-orange);
  border-radius: 2px;
  transition: var(--transition);
}

.nav-links a:not(.nav-cta):hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: var(--brand-orange);
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
  padding: 6px 14px;
  background: transparent;
  border: 1.5px solid var(--gray-300);
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--gray-700);
  cursor: pointer;
  transition: var(--transition);
  letter-spacing: 0.04em;
}

.lang-toggle:hover {
  background: var(--brand-orange);
  color: var(--white);
  border-color: var(--brand-orange);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(232, 148, 26, 0.3);
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
