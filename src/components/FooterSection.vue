<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="#" class="footer-logo">
            <span class="logo-icon">🧪</span>
            <span class="logo-text">
              <template v-if="lang === 'en'">Epochal<span class="logo-highlight">Aromatic</span></template>
              <template v-else>时代<span class="logo-highlight">芳香</span></template>
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
            <button type="submit" class="newsletter-btn">→</button>
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
    ? `Thanks for subscribing with ${email.value}! 🎉`
    : `感谢您使用 ${email.value} 订阅！🎉`)
  email.value = ''
}
</script>

<style scoped>
.footer {
  background: var(--dark);
  padding: 80px 0 0;
  color: rgba(255, 255, 255, 0.7);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.footer-logo .logo-icon {
  font-size: 1.5rem;
}

.footer-logo .logo-text {
  color: var(--white);
}

.footer-logo .logo-highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-desc {
  font-size: 0.9rem;
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
  color: var(--primary);
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
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 700;
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
  color: var(--primary);
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
