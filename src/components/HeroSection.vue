<template>
  <section id="home" class="hero">
    <!-- PPT-style yellow/orange checkerboard background -->
    <div class="hero-bg">
      <div class="checker-grid">
        <div v-for="i in 20" :key="i" class="checker-cell" :class="{ filled: [1,3,6,8,11,13,16,18].includes(i) }"></div>
      </div>
      <div class="hero-overlay"></div>
    </div>

    <!-- Glass bubbles -->
    <div class="glass-bubbles">
      <div class="bubble" style="width:120px;height:120px;top:15%;right:8%;opacity:0.3"></div>
      <div class="bubble" style="width:60px;height:60px;top:60%;right:15%;opacity:0.25"></div>
      <div class="bubble" style="width:80px;height:80px;bottom:20%;left:5%;opacity:0.2"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-text">
        <div class="hero-badge-line">
          <span class="hero-badge">{{ t('hero.badge') }}</span>
        </div>
        <h1 class="hero-title">
          {{ t('hero.titleLine1') }}
          <span class="title-accent">{{ t('hero.titleLine2') }}</span>
        </h1>
        <p class="hero-description">{{ t('hero.subtitle') }}</p>

        <div class="hero-motto">
          <div class="motto-line"></div>
          <span class="motto-text">{{ t('hero.motto') }}</span>
        </div>

        <div class="hero-actions">
          <a href="#flavors" class="btn btn-primary btn-lg">
            <span>{{ t('hero.cta1') }}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#about" class="btn btn-ghost">{{ t('hero.cta2') }}</a>
        </div>

        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">{{ t('hero.stat1Value') }}</span>
            <span class="stat-label">{{ t('hero.stat1Label') }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">{{ t('hero.stat2Value') }}</span>
            <span class="stat-label">{{ t('hero.stat2Label') }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">{{ t('hero.stat3Value') }}</span>
            <span class="stat-label">{{ t('hero.stat3Label') }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="flavor-showcase">
          <div class="showcase-ring"></div>
          <div class="showcase-card card-1">
            <div class="card-emoji">🍊</div>
            <div class="card-label">{{ lang === 'en' ? 'Citrus' : '柑橘' }}</div>
          </div>
          <div class="showcase-card card-2">
            <div class="card-emoji">🍓</div>
            <div class="card-label">{{ lang === 'en' ? 'Berry' : '莓果' }}</div>
          </div>
          <div class="showcase-card card-3">
            <div class="card-emoji">🍵</div>
            <div class="card-label">{{ lang === 'en' ? 'Tea' : '茶类' }}</div>
          </div>
          <div class="center-circle">
            <span class="center-icon">
              <svg width="36" height="36" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.2)" />
                <path d="M50 20 C65 35, 75 50, 50 80 C25 50, 35 35, 50 20Z" fill="rgba(255,255,255,0.9)" />
              </svg>
            </span>
            <span class="center-text" v-if="lang === 'en'">EPOCHAL</span>
            <span class="center-text" v-else>珀臣</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
const { t, lang } = useI18n()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
  background: var(--cream);
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

/* PPT-style checkerboard */
.checker-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  opacity: 0.08;
}

.checker-cell.filled {
  background: var(--brand-orange);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 249, 240, 0.95) 0%,
    rgba(255, 249, 240, 0.85) 50%,
    rgba(255, 243, 224, 0.75) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text {
  max-width: 600px;
}

.hero-badge-line {
  margin-bottom: 24px;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, var(--brand-orange), var(--brand-yellow));
  color: var(--white);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.12;
  color: var(--dark);
  margin-bottom: 24px;
}

.title-accent {
  display: block;
  color: var(--brand-orange);
}

.hero-description {
  font-size: 1rem;
  color: var(--gray-500);
  line-height: 1.85;
  margin-bottom: 24px;
}

.hero-motto {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.motto-line {
  width: 40px;
  height: 2px;
  background: var(--brand-orange);
  flex-shrink: 0;
}

.motto-text {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  font-style: italic;
  color: var(--brand-gold);
  letter-spacing: 0.02em;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.btn-lg {
  padding: 16px 36px;
  font-size: 1rem;
}

.btn-ghost {
  padding: 16px 32px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--gray-700);
  background: transparent;
  border: 1.5px solid var(--gray-300);
  border-radius: var(--radius-full);
  transition: var(--transition);
}

.btn-ghost:hover {
  color: var(--brand-orange);
  border-color: var(--brand-orange);
  background: rgba(232, 148, 26, 0.05);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
}

.stat-number {
  display: block;
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--brand-orange);
}

.stat-label {
  font-size: 0.82rem;
  color: var(--gray-500);
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--gray-300);
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flavor-showcase {
  position: relative;
  width: 420px;
  height: 420px;
}

.showcase-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 1px dashed rgba(232, 148, 26, 0.25);
  animation: spin 40s linear infinite;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.showcase-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 22px 26px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: var(--transition);
}

.showcase-card:hover {
  transform: scale(1.08);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
}

.card-emoji {
  font-size: 2.6rem;
}

.card-label {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--dark);
  letter-spacing: 0.02em;
}

.card-1 {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: float1 6s ease-in-out infinite;
}

.card-2 {
  bottom: 30px;
  left: 10px;
  animation: float 6s ease-in-out infinite -2s;
}

.card-3 {
  bottom: 30px;
  right: 10px;
  animation: float 6s ease-in-out infinite -4s;
}

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--brand-orange), var(--brand-yellow));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0 8px 40px rgba(232, 148, 26, 0.35);
}

.center-icon {
  display: flex;
}

.center-text {
  color: var(--white);
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes float1 {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-12px); }
}

.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 2px;
  height: 40px;
  background: var(--gray-300);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 50%;
  background: var(--brand-orange);
  border-radius: 2px;
  animation: scrollDown 2s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { top: -50%; }
  100% { top: 100%; }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-motto {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    flex-direction: column;
    gap: 16px;
  }

  .stat-divider {
    width: 40px;
    height: 1px;
  }
}
</style>
