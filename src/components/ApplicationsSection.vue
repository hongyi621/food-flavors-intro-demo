<template>
  <section id="applications" class="applications">
    <!-- PPT slide 8: Olive green with glass bubbles -->
    <div class="glass-bubbles">
      <div class="bubble" style="width:160px;height:160px;bottom:10%;right:5%;opacity:0.15"></div>
      <div class="bubble" style="width:90px;height:90px;top:15%;right:8%;opacity:0.12"></div>
      <div class="bubble" style="width:60px;height:60px;top:40%;left:4%;opacity:0.1"></div>
      <div class="bubble" style="width:110px;height:110px;bottom:25%;left:3%;opacity:0.13"></div>
    </div>

    <div class="container apps-inner">
      <div class="applications-header">
        <div class="section-badge apps-badge">{{ t('applications.badge') }}</div>
        <h2 class="section-title apps-title">{{ t('applications.title') }}</h2>
        <p class="section-subtitle apps-sub">{{ t('applications.subtitle') }}</p>
      </div>

      <div class="apps-grid">
        <div
          v-for="(cat, index) in t('applications.categories')"
          :key="index"
          class="app-card"
        >
          <div class="app-icon-wrap">
            <div class="app-icon">{{ cat.icon }}</div>
          </div>
          <h3 class="app-title-text">{{ cat.name }}</h3>
          <ul class="app-items">
            <li v-for="item in cat.items" :key="item">
              <span class="item-check">&#10003;</span>
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
  background: linear-gradient(170deg, #E8EDDE 0%, #EFF2E6 40%, #F5F7F0 100%);
  position: relative;
  overflow: hidden;
}

.apps-inner {
  position: relative;
  z-index: 1;
}

.applications-header {
  text-align: center;
  margin-bottom: 56px;
}

.apps-badge {
  background: rgba(125, 140, 92, 0.12) !important;
  color: #5A6B3C !important;
}

.apps-title {
  color: #5A6B3C;
}

.apps-sub {
  margin: 0 auto;
  color: var(--gray-700);
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.app-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  transition: var(--transition);
  border: 1px solid rgba(125, 140, 92, 0.08);
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
  background: linear-gradient(90deg, var(--app-olive), var(--app-olive-light));
  opacity: 0;
  transition: var(--transition);
}

.app-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(125, 140, 92, 0.15);
  background: rgba(255, 255, 255, 0.95);
}

.app-card:hover::before {
  opacity: 1;
}

.app-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(125, 140, 92, 0.1), rgba(150, 165, 110, 0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.app-icon {
  font-size: 2rem;
}

.app-title-text {
  font-family: var(--font-display);
  font-size: 1.15rem;
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
  color: var(--app-olive);
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.app-count {
  font-size: 0.8rem;
  font-weight: 600;
  color: #5A6B3C;
  padding-top: 16px;
  border-top: 1px solid rgba(125, 140, 92, 0.1);
}

@media (max-width: 768px) {
  .apps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
