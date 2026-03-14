<template>
  <section id="home" class="hero">
    <!-- PPT-style background -->
    <div class="hero-bg">
      <div class="checker-grid">
        <div v-for="i in 20" :key="i" class="checker-cell" :class="{ filled: [1,3,6,8,11,13,16,18].includes(i) }"></div>
      </div>
      <div class="hero-overlay"></div>
      <!-- Animated floating particles -->
      <div class="particle p1"></div>
      <div class="particle p2"></div>
      <div class="particle p3"></div>
      <div class="particle p4"></div>
      <div class="particle p5"></div>
    </div>

    <!-- Glass bubbles -->
    <div class="glass-bubbles">
      <div class="bubble" style="width:120px;height:120px;top:15%;right:8%;opacity:0.3;animation:bubbleFloat 8s ease-in-out infinite"></div>
      <div class="bubble" style="width:60px;height:60px;top:60%;right:15%;opacity:0.25;animation:bubbleFloat 6s ease-in-out infinite 1s"></div>
      <div class="bubble" style="width:80px;height:80px;bottom:20%;left:5%;opacity:0.2;animation:bubbleFloat 10s ease-in-out infinite 2s"></div>
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
          <a href="#flavors" class="btn btn-primary btn-lg btn-shine">
            <span>{{ t('hero.cta1') }}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#about" class="btn btn-ghost">{{ t('hero.cta2') }}</a>
        </div>

        <!-- Animated Stats -->
        <div class="hero-stats">
          <div class="stat" v-for="(s, i) in stats" :key="i">
            <span class="stat-number">{{ s.value }}</span>
            <span class="stat-label">{{ t(s.labelKey) }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="flavor-showcase">
          <div class="showcase-ring"></div>
          <div class="showcase-ring ring-2"></div>
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
            <img src="/logo.svg" alt="Epochal" class="center-logo" width="70" height="70" />
            <span class="center-text" v-if="lang === 'en'">EPOCHAL</span>
            <span class="center-text" v-else>珀臣</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave divider -->
    <div class="wave-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60Z" fill="#EFF6E8"/>
      </svg>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'
const { t, lang } = useI18n()

const stats = [
  { value: '50+', labelKey: 'hero.stat1Label' },
  { value: '7+', labelKey: 'hero.stat2Label' },
  { value: '100%', labelKey: 'hero.stat3Label' },
]
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

.checker-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  opacity: 0.06;
}

.checker-cell.filled {
  background: var(--brand-orange);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,249,240,0.95) 0%, rgba(255,249,240,0.85) 50%, rgba(255,243,224,0.75) 100%);
}

/* Floating particles */
.particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
  animation: particleDrift linear infinite;
}
.p1 { width: 6px; height: 6px; background: var(--brand-orange); top: 20%; left: 10%; animation-duration: 15s; }
.p2 { width: 4px; height: 4px; background: var(--brand-yellow); top: 40%; left: 80%; animation-duration: 20s; animation-delay: 3s; }
.p3 { width: 8px; height: 8px; background: var(--brand-orange); top: 70%; left: 30%; animation-duration: 18s; animation-delay: 6s; }
.p4 { width: 5px; height: 5px; background: var(--brand-gold); top: 30%; left: 60%; animation-duration: 22s; animation-delay: 2s; }
.p5 { width: 3px; height: 3px; background: var(--brand-orange); top: 80%; left: 70%; animation-duration: 16s; animation-delay: 8s; }

@keyframes particleDrift {
  0% { transform: translate(0, 0) scale(1); opacity: 0; }
  10% { opacity: 0.12; }
  90% { opacity: 0.12; }
  100% { transform: translate(100px, -200px) scale(0.5); opacity: 0; }
}

@keyframes bubbleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
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
  animation: heroFadeIn 1s ease-out;
}

@keyframes heroFadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-badge-line { margin-bottom: 24px; }

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
  animation: badgePulse 3s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { box-shadow: 0 2px 16px rgba(232,148,26,0.2); }
  50% { box-shadow: 0 4px 28px rgba(232,148,26,0.4); }
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5.5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--dark);
  margin-bottom: 24px;
}

.title-accent {
  display: block;
  background: linear-gradient(135deg, var(--brand-orange), #D4430A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.02rem;
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
  background: linear-gradient(90deg, var(--brand-orange), transparent);
  flex-shrink: 0;
}

.motto-text {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  font-style: italic;
  background: linear-gradient(135deg, var(--brand-gold), var(--brand-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.btn-lg { padding: 16px 36px; font-size: 1rem; }

/* Shine effect on primary CTA */
.btn-shine {
  position: relative;
  overflow: hidden;
}
.btn-shine::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 40%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: skewX(-25deg);
  animation: shine 4s ease-in-out infinite;
}
@keyframes shine {
  0%, 100% { left: -60%; }
  50% { left: 120%; }
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
  background: rgba(232,148,26,0.05);
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 40px;
}

.stat {
  text-align: center;
  position: relative;
}

.stat:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, var(--gray-300), transparent);
}

.stat-number {
  display: block;
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--brand-orange), var(--brand-gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--gray-500);
  font-weight: 500;
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: heroVisualIn 1.2s ease-out 0.3s both;
}

@keyframes heroVisualIn {
  from { opacity: 0; transform: scale(0.85) rotate(-5deg); }
  to { opacity: 1; transform: scale(1) rotate(0deg); }
}

.flavor-showcase { position: relative; width: 420px; height: 420px; }

.showcase-ring {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 320px; height: 320px;
  border-radius: 50%;
  border: 1px dashed rgba(232,148,26,0.2);
  animation: spin 40s linear infinite;
}

.ring-2 {
  width: 240px !important; height: 240px !important;
  border-style: dotted !important;
  border-color: rgba(232,148,26,0.12) !important;
  animation-direction: reverse !important;
  animation-duration: 30s !important;
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
  background: rgba(255,255,255,0.88);
  backdrop-filter: blur(16px);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  border: 1px solid rgba(255,255,255,0.6);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.showcase-card:hover {
  transform: scale(1.12) !important;
  box-shadow: 0 16px 56px rgba(232,148,26,0.2);
}

.card-emoji { font-size: 2.6rem; }
.card-label { font-weight: 600; font-size: 0.85rem; color: var(--dark); letter-spacing: 0.02em; }

.card-1 { top: 10px; left: 50%; transform: translateX(-50%); animation: float1 6s ease-in-out infinite; }
.card-2 { bottom: 30px; left: 10px; animation: float 6s ease-in-out infinite -2s; }
.card-3 { bottom: 30px; right: 10px; animation: float 6s ease-in-out infinite -4s; }

.center-circle {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 130px; height: 130px;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--brand-orange), var(--brand-yellow));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  box-shadow: 0 8px 40px rgba(232,148,26,0.35), 0 0 60px rgba(232,148,26,0.15);
}

.center-logo { border-radius: 50%; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15)); }

.center-text {
  color: var(--white);
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes float1 { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-12px); } }

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--gray-300);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-dot {
  width: 3px;
  height: 8px;
  border-radius: 3px;
  background: var(--brand-orange);
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.3; }
}

@media (max-width: 968px) {
  .hero-content { grid-template-columns: 1fr; text-align: center; }
  .hero-text { max-width: 100%; }
  .hero-motto { justify-content: center; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-visual { display: none; }
}

@media (max-width: 480px) {
  .hero-stats { flex-direction: column; gap: 20px; }
  .stat::after { display: none; }
}
</style>
