<template>
  <section id="about" class="about">
    <div class="glass-bubbles">
      <div class="bubble" style="width:140px;height:140px;top:10%;left:5%;opacity:0.18;animation:bFloat 9s ease-in-out infinite"></div>
      <div class="bubble" style="width:80px;height:80px;top:30%;left:2%;opacity:0.15;animation:bFloat 7s ease-in-out infinite 2s"></div>
      <div class="bubble" style="width:50px;height:50px;bottom:15%;left:8%;opacity:0.12;animation:bFloat 11s ease-in-out infinite 4s"></div>
    </div>

    <div class="container about-inner">
      <div class="about-visual reveal-left">
        <div class="timeline">
          <div class="timeline-line"></div>
          <div v-for="(step, i) in t('about.steps')" :key="i" class="timeline-step" data-stagger>
            <div class="step-marker"><span class="step-num">{{ step.num }}</span></div>
            <div class="step-content">
              <h4 class="step-title">{{ step.title }}</h4>
              <p class="step-desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-content reveal-right">
        <div class="section-badge about-badge">{{ t('about.badge') }}</div>
        <h2 class="section-title about-title">{{ t('about.title') }}</h2>
        <p class="about-desc">{{ t('about.description') }}</p>
        <p class="about-desc">{{ t('about.description2') }}</p>

        <div class="about-highlights reveal">
          <div class="highlight-card" v-for="(h, i) in highlights" :key="i" data-stagger>
            <span class="hl-num">{{ h.num }}</span>
            <span class="hl-label">{{ lang === 'en' ? h.en : h.zh }}</span>
          </div>
        </div>

        <a href="#flavors" class="btn btn-primary about-btn">
          {{ lang === 'en' ? 'View Our Flavors' : '查看产品系列' }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

    <div class="wave-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60Z" fill="#F3EDF7"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
const { t, lang } = useI18n()
const highlights = [
  { num: '5', en: 'Step R&D Process', zh: '步研发流程' },
  { num: '1:1', en: 'Client Collaboration', zh: '客户协作' },
  { num: '100%', en: 'Quality Assurance', zh: '品质保证' },
]
</script>

<style scoped>
@keyframes bFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.about {
  padding: var(--section-padding);
  padding-bottom: 120px;
  background: linear-gradient(165deg, #EFF6E8 0%, #F5F9F0 40%, #FAFCF7 100%);
  position: relative;
  overflow: hidden;
}

.about-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
}

.about-badge { background: rgba(140,179,105,0.15) !important; color: var(--about-green-dark) !important; }
.about-title { color: var(--about-green-dark); white-space: pre-line; }

.about-desc {
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.85;
  margin-bottom: 16px;
}

.about-btn {
  background: linear-gradient(135deg, var(--about-green), var(--about-green-dark)) !important;
  box-shadow: 0 4px 20px rgba(140,179,105,0.35) !important;
}
.about-btn:hover { box-shadow: 0 8px 30px rgba(140,179,105,0.5) !important; }

/* Timeline */
.about-visual { display: flex; justify-content: center; }

.timeline { position: relative; padding-left: 40px; }

.timeline-line {
  position: absolute;
  left: 18px; top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--about-green), rgba(140,179,105,0.15));
  border-radius: 2px;
}

.timeline-step {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 36px;
  position: relative;
}
.timeline-step:last-child { margin-bottom: 0; }

.step-marker {
  position: absolute;
  left: -40px;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--about-green), var(--about-green-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(140,179,105,0.35);
}

.step-num { font-size: 0.72rem; font-weight: 700; color: var(--white); }

.step-content {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  border: 1px solid rgba(140,179,105,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}

.step-content:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 30px rgba(140,179,105,0.15);
  border-color: rgba(140,179,105,0.25);
}

.step-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
.step-desc { font-size: 0.85rem; color: var(--gray-500); line-height: 1.5; }

/* Highlights */
.about-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 32px 0;
}

.highlight-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 24px 16px;
  text-align: center;
  border: 1px solid rgba(140,179,105,0.12);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.highlight-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(140,179,105,0.18);
  border-color: var(--about-green);
}

.hl-num {
  display: block;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--about-green);
  margin-bottom: 4px;
}

.hl-label { font-size: 0.78rem; font-weight: 600; color: var(--gray-500); }

@media (max-width: 968px) {
  .about-inner { grid-template-columns: 1fr; gap: 48px; }
  .about-visual { order: 2; }
}
@media (max-width: 480px) {
  .about-highlights { grid-template-columns: 1fr; }
}
</style>
