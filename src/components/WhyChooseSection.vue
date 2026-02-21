<template>
  <section id="why-us" class="why-us">
    <div class="container">
      <!-- Why Choose Us -->
      <div class="why-header">
        <div class="section-badge"><span>⭐</span> {{ t('whyUs.badge') }}</div>
        <h2 class="section-title">{{ t('whyUs.title') }}</h2>
        <p class="section-subtitle">{{ t('whyUs.subtitle') }}</p>
      </div>

      <div class="reasons-grid">
        <div
          v-for="(reason, index) in t('whyUs.reasons')"
          :key="index"
          class="reason-card"
        >
          <div class="reason-icon">{{ reason.icon }}</div>
          <h4 class="reason-title">{{ reason.title }}</h4>
          <p class="reason-desc">{{ reason.desc }}</p>
        </div>
      </div>

      <!-- Health & Natural Section -->
      <div class="health-section">
        <div class="health-content">
          <div class="section-badge health-badge"><span>🌿</span> {{ t('whyUs.healthBadge') }}</div>
          <h3 class="health-title">{{ t('whyUs.healthTitle') }}</h3>
          <p class="health-desc">{{ t('whyUs.healthDesc') }}</p>
          <ul class="health-points">
            <li v-for="(point, i) in t('whyUs.healthPoints')" :key="i">
              <span class="point-icon">✓</span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
        <div class="health-visual">
          <div class="vision-card">
            <div class="vision-icon">🔭</div>
            <h4 class="vision-title">{{ t('whyUs.visionTitle') }}</h4>
            <p class="vision-desc">{{ t('whyUs.visionDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<style scoped>
.why-us {
  padding: var(--section-padding);
  background: var(--light);
}

.why-header {
  text-align: center;
  margin-bottom: 56px;
}

.why-header .section-subtitle {
  margin: 0 auto;
}

/* Reasons Grid */
.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 80px;
}

.reason-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.reason-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
}

.reason-icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.reason-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 10px;
}

.reason-desc {
  font-size: 0.88rem;
  color: var(--gray-500);
  line-height: 1.6;
}

/* Health Section */
.health-section {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 60px;
  align-items: center;
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 56px 48px;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.health-badge {
  background: rgba(76, 175, 80, 0.1) !important;
  color: #2e7d32 !important;
}

.health-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 16px;
}

.health-desc {
  font-size: 0.95rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 24px;
}

.health-points {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.health-points li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.92rem;
  color: var(--gray-700);
  line-height: 1.5;
}

.point-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Vision Card */
.vision-card {
  background: linear-gradient(145deg, var(--primary-light), rgba(255, 107, 53, 0.08));
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  text-align: center;
  border: 1px solid rgba(245, 166, 35, 0.15);
}

.vision-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.vision-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 16px;
}

.vision-desc {
  font-size: 0.92rem;
  color: var(--gray-700);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 968px) {
  .reasons-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .health-section {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }
}

@media (max-width: 600px) {
  .reasons-grid {
    grid-template-columns: 1fr;
  }
}
</style>
