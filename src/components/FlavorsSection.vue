<template>
  <section id="flavors" class="flavors">
    <!-- PPT slide 6-7: Purple/mauve with glass bubbles -->
    <div class="glass-bubbles">
      <div class="bubble" style="width:180px;height:180px;top:5%;right:3%;opacity:0.15"></div>
      <div class="bubble" style="width:100px;height:100px;top:25%;right:12%;opacity:0.12"></div>
      <div class="bubble" style="width:70px;height:70px;bottom:20%;left:3%;opacity:0.13"></div>
      <div class="bubble" style="width:120px;height:120px;bottom:5%;left:10%;opacity:0.1"></div>
      <div class="bubble" style="width:45px;height:45px;top:50%;left:6%;opacity:0.15"></div>
    </div>

    <div class="container flavors-inner">
      <!-- Header -->
      <div class="flavors-header reveal">
        <div class="section-badge flavors-badge">{{ t('flavors.badge') }}</div>
        <h2 class="section-title flavors-title">{{ t('flavors.title') }}</h2>
        <p class="section-subtitle flavors-sub">{{ t('flavors.subtitle') }}</p>
      </div>

      <!-- Category Tabs -->
      <div class="category-tabs reveal">
        <button
          v-for="key in categoryKeys"
          :key="key"
          :class="['tab', { active: activeCategory === key }]"
          @click="activeCategory = key"
        >
          <span class="tab-icon">{{ getCategory(key).icon }}</span>
          <span class="tab-name">{{ getCategory(key).name }}</span>
        </button>
      </div>

      <!-- Active Category Display -->
      <div class="category-display reveal-scale">
        <div class="category-header-card">
          <span class="category-big-icon">{{ getCategory(activeCategory).icon }}</span>
          <h3 class="category-name">{{ getCategory(activeCategory).name }}</h3>
          <span class="category-count">{{ getCategory(activeCategory).items.length }} {{ lang === 'en' ? 'flavors' : '种风味' }}</span>
        </div>
        <div class="flavor-grid">
          <div
            v-for="(item, index) in getCategory(activeCategory).items"
            :key="item"
            class="flavor-chip"
            :style="{ animationDelay: `${index * 60}ms` }"
          >
            <span class="chip-dot"></span>
            <span class="chip-text">{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- All Categories Overview -->
      <div class="all-categories">
        <div
          v-for="key in categoryKeys"
          :key="key"
          class="mini-category"
          @click="activeCategory = key"
          :class="{ 'mini-active': activeCategory === key }"
        >
          <div class="mini-icon">{{ getCategory(key).icon }}</div>
          <div class="mini-name">{{ getCategory(key).name }}</div>
          <div class="mini-count">{{ getCategory(key).items.length }}</div>
        </div>
      </div>
    </div>
    <div class="wave-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,35 C360,0 720,60 1080,20 C1260,5 1380,15 1440,25 L1440,60 L0,60Z" fill="#E8EDDE"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, lang } = useI18n()

const categoryKeys = ['citrus', 'berry', 'fruit', 'nut', 'brown', 'alcoholic', 'dairy', 'tea', 'specialty']
const activeCategory = ref('citrus')

const getCategory = (key) => {
  const cats = t('flavors.categories')
  return cats[key] || { name: key, icon: '🍊', items: [] }
}
</script>

<style scoped>
.flavors {
  padding: var(--section-padding);
  padding-bottom: 120px;
  background: linear-gradient(170deg, #F3EDF7 0%, #EAE0F0 30%, #E0D4E8 100%);
  position: relative;
  overflow: hidden;
}

.flavors-inner {
  position: relative;
  z-index: 1;
}

.flavors-header {
  text-align: center;
  margin-bottom: 48px;
}

.flavors-badge {
  background: rgba(123, 91, 141, 0.12) !important;
  color: var(--flavor-purple-dark) !important;
}

.flavors-title {
  color: var(--flavor-purple-dark);
}

.flavors-sub {
  margin: 0 auto;
  color: var(--gray-700);
}

/* Category Tabs */
.category-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}

.tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: var(--radius-full);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--gray-700);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(123, 91, 141, 0.1);
  transition: var(--transition);
  cursor: pointer;
}

.tab:hover {
  color: var(--flavor-purple-dark);
  border-color: var(--flavor-purple);
  background: rgba(255, 255, 255, 0.9);
}

.tab.active {
  background: linear-gradient(135deg, var(--flavor-purple), var(--flavor-purple-dark));
  color: var(--white);
  border-color: transparent;
  box-shadow: 0 4px 20px rgba(123, 91, 141, 0.35);
}

.tab-icon {
  font-size: 1.1rem;
}

/* Category Display */
.category-display {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 32px;
  align-items: start;
  margin-bottom: 56px;
}

.category-header-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(232, 220, 240, 0.5));
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  border: 1px solid rgba(123, 91, 141, 0.12);
  box-shadow: 0 4px 24px rgba(123, 91, 141, 0.1);
}

.category-big-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 12px;
}

.category-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}

.category-count {
  font-size: 0.85rem;
  color: var(--gray-500);
  font-weight: 500;
}

/* Flavor Grid */
.flavor-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: start;
}

.flavor-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: var(--radius-md);
  border: 1px solid rgba(123, 91, 141, 0.06);
  transition: var(--transition);
  animation: chipIn 0.4s ease-out both;
}

.flavor-chip:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(123, 91, 141, 0.15);
  border-color: rgba(123, 91, 141, 0.2);
}

@keyframes chipIn {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.chip-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--flavor-purple), var(--flavor-purple-dark));
  flex-shrink: 0;
}

.chip-text {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--dark);
}

/* All Categories Overview */
.all-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
}

.mini-category {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 20px 12px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  cursor: pointer;
  transition: var(--transition);
}

.mini-category:hover {
  border-color: rgba(123, 91, 141, 0.25);
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.85);
}

.mini-category.mini-active {
  border-color: var(--flavor-purple);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 20px rgba(123, 91, 141, 0.15);
}

.mini-icon {
  font-size: 1.8rem;
}

.mini-name {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--dark);
  text-align: center;
}

.mini-count {
  font-size: 0.72rem;
  color: var(--gray-500);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .category-display {
    grid-template-columns: 1fr;
  }

  .category-header-card {
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: left;
    padding: 20px 24px;
  }

  .category-big-icon {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  .all-categories {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}
</style>
