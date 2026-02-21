<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <!-- Left: R&D Process Timeline -->
        <div class="about-visual">
          <div class="timeline">
            <div
              v-for="(step, index) in t('about.steps')"
              :key="index"
              class="timeline-step"
            >
              <div class="step-marker">
                <span class="step-num">{{ step.num }}</span>
                <div class="step-line" v-if="index < t('about.steps').length - 1"></div>
              </div>
              <div class="step-content">
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-desc">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="about-content">
          <div class="section-badge"><span>🔬</span> {{ t('about.badge') }}</div>
          <h2 class="section-title" v-html="t('about.title').replace('\\n', '<br/>')"></h2>
          <p class="about-text">{{ t('about.description') }}</p>
          <p class="about-text">{{ t('about.description2') }}</p>

          <div class="about-highlights">
            <div class="highlight-card">
              <div class="highlight-icon">🎯</div>
              <div class="highlight-number">5</div>
              <div class="highlight-label">{{ lang === 'en' ? 'Step R&D Process' : '步研发流程' }}</div>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">🤝</div>
              <div class="highlight-number">1:1</div>
              <div class="highlight-label">{{ lang === 'en' ? 'Client Collaboration' : '客户协作' }}</div>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">✅</div>
              <div class="highlight-number">100%</div>
              <div class="highlight-label">{{ lang === 'en' ? 'Quality Assured' : '质量保证' }}</div>
            </div>
          </div>

          <a href="#flavors" class="btn btn-primary" style="margin-top: 12px;">
            {{ lang === 'en' ? 'View Our Flavors' : '查看产品系列' }}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
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
.about {
  padding: var(--section-padding);
  background: var(--white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
}

.about-text {
  font-size: 1rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 16px;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-step {
  display: flex;
  gap: 20px;
}

.step-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.step-num {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(245, 166, 35, 0.3);
}

.step-line {
  width: 2px;
  flex: 1;
  min-height: 30px;
  background: linear-gradient(180deg, var(--primary), var(--primary-light));
  border-radius: 2px;
}

.step-content {
  padding-bottom: 32px;
  padding-top: 8px;
}

.step-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 6px;
}

.step-desc {
  font-size: 0.88rem;
  color: var(--gray-500);
  line-height: 1.6;
}

/* Highlights */
.about-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 28px;
  margin-bottom: 8px;
}

.highlight-card {
  text-align: center;
  padding: 20px 12px;
  background: var(--primary-light);
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.highlight-icon {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.highlight-number {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1;
  margin-bottom: 4px;
}

.highlight-label {
  font-size: 0.78rem;
  color: var(--gray-500);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 968px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about-grid > .about-visual {
    order: 2;
  }
}

@media (max-width: 480px) {
  .about-highlights {
    grid-template-columns: 1fr;
  }
}
</style>
