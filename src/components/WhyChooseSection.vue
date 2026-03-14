<template>
  <section id="why-us" class="why-us">
    <!-- PPT slide 5: Olive/golden theme with glass bubbles -->
    <div class="glass-bubbles">
      <div class="bubble" style="width:130px;height:130px;top:8%;left:6%;opacity:0.12"></div>
      <div class="bubble" style="width:70px;height:70px;bottom:30%;right:4%;opacity:0.1"></div>
      <div class="bubble" style="width:100px;height:100px;bottom:8%;right:12%;opacity:0.08"></div>
    </div>

    <div class="container why-inner">
      <!-- Why Choose Us -->
      <div class="why-header">
        <div class="section-badge why-badge">{{ t('whyUs.badge') }}</div>
        <h2 class="section-title why-title">{{ t('whyUs.title') }}</h2>
        <p class="section-subtitle why-sub">{{ t('whyUs.subtitle') }}</p>
      </div>

      <div class="reasons-grid">
        <div
          v-for="(reason, index) in t('whyUs.reasons')"
          :key="index"
          class="reason-card"
        >
          <div class="reason-icon-wrap">
            <span class="reason-icon">{{ reason.icon }}</span>
          </div>
          <h4 class="reason-title">{{ reason.title }}</h4>
          <p class="reason-desc">{{ reason.desc }}</p>
        </div>
      </div>

      <!-- Health & Natural Section (PPT slide 10: blue theme) -->
      <div class="health-section">
        <div class="health-content">
          <div class="section-badge health-badge">{{ t('whyUs.healthBadge') }}</div>
          <h3 class="health-title">{{ t('whyUs.healthTitle') }}</h3>
          <p class="health-desc">{{ t('whyUs.healthDesc') }}</p>
          <ul class="health-points">
            <li v-for="(point, i) in t('whyUs.healthPoints')" :key="i">
              <span class="point-icon">&#10003;</span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
        <div class="health-visual">
          <div class="vision-card">
            <div class="vision-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="rgba(107,140,166,0.15)" />
                <path d="M50 25 C60 35, 70 45, 50 75 C30 45, 40 35, 50 25Z" fill="#6B8CA6" />
              </svg>
            </div>
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
  background: linear-gradient(165deg, #F5F0E0 0%, #F8F4EA 40%, #FDFBF5 100%);
  position: relative;
  overflow: hidden;
}

.why-inner {
  position: relative;
  z-index: 1;
}

.why-header {
  text-align: center;
  margin-bottom: 56px;
}

.why-badge {
  background: rgba(139, 125, 60, 0.1) !important;
  color: #6B5E2A !important;
}

.why-title {
  color: #6B5E2A;
}

.why-sub {
  margin: 0 auto;
  color: var(--gray-700);
}

/* Reasons Grid */
.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 80px;
}

.reason-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid rgba(139, 125, 60, 0.06);
}

.reason-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(139, 125, 60, 0.12);
  background: rgba(255, 255, 255, 0.95);
}

.reason-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(139, 125, 60, 0.1), rgba(197, 186, 110, 0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.reason-icon {
  font-size: 1.8rem;
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

/* Health Section (PPT slide 10: blue-ish) */
.health-section {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 60px;
  align-items: center;
  background: linear-gradient(145deg, #E0EBF2, #EDF3F8);
  border-radius: var(--radius-xl);
  padding: 56px 48px;
  border: 1px solid rgba(107, 140, 166, 0.1);
}

.health-badge {
  background: rgba(107, 140, 166, 0.12) !important;
  color: #4A7291 !important;
}

.health-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: #3A5F78;
  margin-bottom: 16px;
}

.health-desc {
  font-size: 0.95rem;
  color: var(--gray-700);
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
  background: linear-gradient(135deg, #6B8CA6, #4A7291);
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
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  text-align: center;
  border: 1px solid rgba(107, 140, 166, 0.12);
}

.vision-icon-wrap {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

.vision-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: #3A5F78;
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
