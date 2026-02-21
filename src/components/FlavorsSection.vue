<template>
  <section id="flavors" class="flavors">
    <div class="container">
      <!-- Header -->
      <div class="flavors-header">
        <div class="section-badge"><span>🧪</span> {{ t('flavors.badge') }}</div>
        <h2 class="section-title">{{ t('flavors.title') }}</h2>
        <p class="section-subtitle">{{ t('flavors.subtitle') }}</p>
      </div>

      <!-- Category Tabs -->
      <div class="category-tabs">
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
      <div class="category-display">
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
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, lang } = useI18n()

const categoryKeys = ['citrus', 'berry', 'fruit', 'nut', 'beverage', 'dairy', 'specialty']
const activeCategory = ref('citrus')

const getCategory = (key) => {
  const cats = t('flavors.categories')
  return cats[key] || { name: key, icon: '🍊', items: [] }
}
</script>

<style scoped>
.flavors {
  padding: var(--section-padding);
  background: var(--light);
}

.flavors-header {
  text-align: center;
  margin-bottom: 48px;
}

.flavors-header .section-subtitle {
  margin: 0 auto;
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
  color: var(--gray-500);
  background: var(--white);
  border: 1px solid var(--gray-100);
  transition: var(--transition);
  cursor: pointer;
}

.tab:hover {
  color: var(--primary-dark);
  border-color: var(--primary-light);
}

.tab.active {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(245, 166, 35, 0.3);
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
  background: linear-gradient(145deg, var(--primary-light), var(--white));
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  border: 1px solid rgba(245, 166, 35, 0.1);
  box-shadow: var(--shadow-md);
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
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: var(--transition);
  animation: chipIn 0.4s ease-out both;
}

.flavor-chip:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-light);
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
  background: linear-gradient(135deg, var(--primary), var(--secondary));
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
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.mini-category {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 20px 12px;
  background: var(--white);
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  cursor: pointer;
  transition: var(--transition);
}

.mini-category:hover {
  border-color: var(--primary-light);
  transform: translateY(-2px);
}

.mini-category.mini-active {
  border-color: var(--primary);
  background: var(--primary-light);
}

.mini-icon {
  font-size: 1.8rem;
}

.mini-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--dark);
  text-align: center;
}

.mini-count {
  font-size: 0.75rem;
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
