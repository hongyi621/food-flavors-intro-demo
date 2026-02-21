<template>
  <section id="applications" class="applications">
    <div class="container">
      <div class="applications-header">
        <div class="section-badge"><span>🏭</span> {{ t('applications.badge') }}</div>
        <h2 class="section-title">{{ t('applications.title') }}</h2>
        <p class="section-subtitle">{{ t('applications.subtitle') }}</p>
      </div>

      <div class="apps-grid">
        <div
          v-for="(cat, index) in t('applications.categories')"
          :key="index"
          class="app-card"
        >
          <div class="app-icon">{{ cat.icon }}</div>
          <h3 class="app-title">{{ cat.name }}</h3>
          <ul class="app-items">
            <li v-for="item in cat.items" :key="item">
              <span class="item-check">✓</span>
              {{ item }}
            </li>
          </ul>
          <div class="app-count">{{ cat.items.length }} {{ lang === 'en' ? 'products' : '类产品' }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
const { t, lang } = useI18n()
</script>

<style scoped>
.applications {
  padding: var(--section-padding);
  background: var(--white);
}

.applications-header {
  text-align: center;
  margin-bottom: 56px;
}

.applications-header .section-subtitle {
  margin: 0 auto;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.app-card {
  background: var(--light);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.03);
  position: relative;
  overflow: hidden;
}

.app-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  opacity: 0;
  transition: var(--transition);
}

.app-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  background: var(--white);
}

.app-card:hover::before {
  opacity: 1;
}

.app-icon {
  font-size: 2.8rem;
  margin-bottom: 16px;
}

.app-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 16px;
}

.app-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.app-items li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--gray-700);
}

.item-check {
  color: var(--primary);
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.app-count {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-dark);
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

@media (max-width: 768px) {
  .apps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
