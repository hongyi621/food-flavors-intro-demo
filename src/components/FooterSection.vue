<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="#" class="footer-logo">
            <img src="/logo.svg" alt="Epochal" class="footer-emblem" width="32" height="32" />
            <span class="logo-text">
              <template v-if="lang === 'en'">
                <span class="logo-name">EPOCHAL</span>
                <span class="logo-sub">Aromatic Ltd.</span>
              </template>
              <template v-else>
                <span class="logo-name">珀臣</span>
                <span class="logo-sub">香精香料</span>
              </template>
            </span>
          </a>
          <p class="footer-desc">{{ t('footer.desc') }}</p>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4 class="footer-heading">{{ t('footer.quickLinks') }}</h4>
          <ul>
            <li><a href="#home">{{ t('nav.home') }}</a></li>
            <li><a href="#about">{{ t('nav.about') }}</a></li>
            <li><a href="#flavors">{{ t('nav.flavors') }}</a></li>
            <li><a href="#contact">{{ t('nav.contact') }}</a></li>
          </ul>
        </div>

        <!-- Products -->
        <div class="footer-links">
          <h4 class="footer-heading">{{ t('footer.products') }}</h4>
          <ul>
            <li><a href="#flavors">{{ t('footer.classicFlavors') }}</a></li>
            <li><a href="#flavors">{{ t('footer.premiumCollection') }}</a></li>
            <li><a href="#flavors">{{ t('footer.newArrivals') }}</a></li>
            <li><a href="#flavors">{{ t('footer.customDev') }}</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h4 class="footer-heading">{{ t('footer.stayUpdated') }}</h4>
          <p class="newsletter-desc">{{ t('footer.newsletterDesc') }}</p>
          <form class="newsletter-form" @submit.prevent="subscribe">
            <input
              type="email"
              class="newsletter-input"
              :placeholder="t('footer.emailPlaceholder')"
              v-model="email"
              required
            />
            <button type="submit" class="newsletter-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer-bottom">
        <p class="copyright">{{ t('footer.copyright').replace('{year}', currentYear) }}</p>
        <div class="footer-bottom-links">
          <a href="#">{{ t('footer.privacy') }}</a>
          <a href="#">{{ t('footer.terms') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, lang } = useI18n()
const email = ref('')
const currentYear = new Date().getFullYear()

const subscribe = () => {
  alert(lang.value === 'en'
    ? `Thanks for subscribing with ${email.value}!`
    : `感谢您使用 ${email.value} 订阅！`)
  email.value = ''
}
</script>

<style scoped>
.footer {
  background: #1A1A2E;
  padding: 80px 0 0;
  color: rgba(255, 255, 255, 0.65);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-emblem {
  border-radius: 50%;
  filter: drop-shadow(0 2px 4px rgba(232, 148, 26, 0.3));
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.logo-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.06em;
}

.logo-sub {
  font-size: 0.6rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-desc {
  font-size: 0.88rem;
  line-height: 1.7;
}

.footer-heading {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 20px;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: 0.88rem;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--brand-orange);
  transform: translateX(4px);
  display: inline-block;
}

.newsletter-desc {
  font-size: 0.88rem;
  margin-bottom: 16px;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: 0;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.newsletter-input {
  flex: 1;
  padding: 12px 16px;
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 0.88rem;
  font-family: var(--font-body);
  outline: none;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.newsletter-btn {
  padding: 12px 20px;
  background: linear-gradient(135deg, var(--brand-orange), var(--brand-yellow));
  color: var(--white);
  display: flex;
  align-items: center;
  border-radius: 0;
  transition: var(--transition);
}

.newsletter-btn:hover {
  opacity: 0.9;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
}

.copyright {
  font-size: 0.82rem;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  font-size: 0.82rem;
  transition: var(--transition);
}

.footer-bottom-links a:hover {
  color: var(--brand-orange);
}

@media (max-width: 968px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
