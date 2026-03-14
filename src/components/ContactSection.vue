<template>
  <section id="contact" class="contact">
    <!-- PPT slide 4/9: Brown/coffee theme -->
    <div class="glass-bubbles">
      <div class="bubble" style="width:120px;height:120px;top:10%;right:6%;opacity:0.1"></div>
      <div class="bubble" style="width:70px;height:70px;bottom:20%;left:5%;opacity:0.08"></div>
    </div>

    <div class="container contact-inner">
      <div class="contact-info">
        <div class="section-badge contact-badge">{{ t('contact.badge') }}</div>
        <h2 class="section-title contact-title">{{ t('contact.title') }}</h2>
        <p class="contact-desc">{{ t('contact.desc') }}</p>

        <div class="info-cards">
          <div class="info-card">
            <div class="info-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 4-10 8L2 4"/></svg>
            </div>
            <div>
              <p class="info-label">{{ t('contact.email') }}</p>
              <p class="info-value">{{ t('contact.emailVal') }}</p>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div>
              <p class="info-label">{{ t('contact.phone') }}</p>
              <p class="info-value">{{ t('contact.phoneVal') }}</p>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p class="info-label">{{ t('contact.address') }}</p>
              <p class="info-value">{{ t('contact.addressVal') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-wrap">
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label>{{ t('contact.firstName') }}</label>
              <input type="text" v-model="form.firstName" required />
            </div>
            <div class="form-group">
              <label>{{ t('contact.lastName') }}</label>
              <input type="text" v-model="form.lastName" required />
            </div>
          </div>
          <div class="form-group">
            <label>{{ t('contact.emailLabel') }}</label>
            <input type="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label>{{ t('contact.subject') }}</label>
            <select v-model="form.subject" required>
              <option value="" disabled>{{ t('contact.subjectPlaceholder') }}</option>
              <option v-for="(label, key) in t('contact.subjectOptions')" :key="key" :value="key">{{ label }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>{{ t('contact.message') }}</label>
            <textarea v-model="form.message" rows="4" :placeholder="t('contact.messagePlaceholder')" required></textarea>
          </div>
          <button type="submit" class="btn submit-btn" :disabled="submitted">
            {{ submitted ? t('contact.submitted') : t('contact.submit') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  submitted.value = true
  setTimeout(() => {
    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
.contact {
  padding: var(--section-padding);
  background: linear-gradient(165deg, #EFEBE6 0%, #F5F1EC 40%, #FAF8F5 100%);
  position: relative;
  overflow: hidden;
}

.contact-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 64px;
  align-items: start;
}

.contact-badge {
  background: rgba(93, 64, 55, 0.1) !important;
  color: var(--rd-brown) !important;
}

.contact-title {
  color: var(--rd-brown);
  white-space: pre-line;
}

.contact-desc {
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 32px;
}

/* Info Cards */
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: var(--radius-md);
  border: 1px solid rgba(93, 64, 55, 0.06);
  transition: var(--transition);
}

.info-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(93, 64, 55, 0.08);
}

.info-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(93, 64, 55, 0.08), rgba(141, 110, 99, 0.06));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--rd-brown);
}

.info-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
}

.info-value {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--dark);
}

/* Form */
.contact-form-wrap {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: var(--radius-xl);
  padding: 40px;
  border: 1px solid rgba(93, 64, 55, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 6px;
  letter-spacing: 0.02em;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.8);
  border: 1.5px solid rgba(93, 64, 55, 0.12);
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  font-family: var(--font-body);
  color: var(--dark);
  transition: var(--transition);
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--rd-brown-light);
  box-shadow: 0 0 0 3px rgba(93, 64, 55, 0.08);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237C7C8A' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, var(--rd-brown), var(--rd-brown-light));
  color: var(--white);
  box-shadow: 0 4px 20px rgba(93, 64, 55, 0.25);
  padding: 16px;
  font-size: 1rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(93, 64, 55, 0.35);
}

.submit-btn:disabled {
  background: #6B9E5A;
  box-shadow: 0 4px 20px rgba(107, 158, 90, 0.25);
  cursor: default;
}

@media (max-width: 968px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 480px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form-wrap {
    padding: 24px;
  }
}
</style>
