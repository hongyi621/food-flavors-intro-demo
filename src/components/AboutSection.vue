<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <!-- Left: Visual -->
        <div class="about-visual">
          <div class="visual-card main-card">
            <div class="visual-icon">🌱</div>
            <h4>Farm to Flavor</h4>
            <p>We source ingredients directly from sustainable farms worldwide</p>
          </div>
          <div class="visual-card accent-card card-float-1">
            <div class="visual-icon">🔬</div>
            <span>Lab Tested</span>
          </div>
          <div class="visual-card accent-card card-float-2">
            <div class="visual-icon">🏆</div>
            <span>Award Winning</span>
          </div>
          <div class="experience-badge">
            <span class="exp-number">5+</span>
            <span class="exp-label">Years of<br/>Excellence</span>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="about-content">
          <div class="section-badge"><span>🏠</span> Our Story</div>
          <h2 class="section-title">Crafted with Passion,<br/>Delivered with Care</h2>
          <p class="about-text">
            At FlavorCraft, we believe that great food starts with extraordinary flavors.
            Founded in 2020, our mission is to bring professional-grade, all-natural food flavors
            to home kitchens and bakeries everywhere.
          </p>
          <p class="about-text">
            Every flavor in our collection is developed by our team of food scientists and
            flavor artists, using only the purest natural extracts and ingredients — no
            artificial colors, no preservatives, no compromises.
          </p>

          <!-- Features -->
          <div class="features-list">
            <div class="feature" v-for="feature in features" :key="feature.title">
              <div class="feature-icon">{{ feature.icon }}</div>
              <div>
                <h4 class="feature-title">{{ feature.title }}</h4>
                <p class="feature-desc">{{ feature.desc }}</p>
              </div>
            </div>
          </div>

          <a href="#contact" class="btn btn-primary" style="margin-top: 12px">
            Get in Touch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🍃',
    title: '100% Natural',
    desc: 'No artificial additives, colors, or preservatives in any of our products.',
  },
  {
    icon: '🧪',
    title: 'Precision Crafted',
    desc: 'Each batch is tested for consistency, potency, and flavor accuracy.',
  },
  {
    icon: '📦',
    title: 'Worldwide Shipping',
    desc: 'We deliver freshness to your doorstep, anywhere in the world.',
  },
]
</script>

<style scoped>
.about {
  padding: var(--section-padding);
  background: var(--white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Visual Side */
.about-visual {
  position: relative;
  min-height: 480px;
}

.visual-card {
  border-radius: var(--radius-lg);
  background: var(--white);
  box-shadow: var(--shadow-lg);
}

.main-card {
  width: 320px;
  padding: 40px 32px;
  text-align: center;
  background: linear-gradient(145deg, var(--primary-light), var(--white));
  border: 1px solid rgba(245, 166, 35, 0.1);
}

.main-card .visual-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.main-card h4 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}

.main-card p {
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.6;
}

.accent-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  background: var(--white);
}

.accent-card .visual-icon {
  font-size: 1.6rem;
}

.accent-card span {
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--dark);
}

.card-float-1 {
  top: 0;
  right: 0;
  animation: floatSlow 8s ease-in-out infinite;
}

.card-float-2 {
  bottom: 40px;
  right: 20px;
  animation: floatSlow 8s ease-in-out infinite 2s;
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.experience-badge {
  position: absolute;
  bottom: 0;
  left: 30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-glow);
}

.exp-number {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1;
}

.exp-label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  line-height: 1.3;
  font-weight: 500;
}

/* Content Side */
.about-content {
  max-width: 520px;
}

.about-text {
  font-size: 1rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 16px;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
  margin-bottom: 20px;
}

.feature {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.feature-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-light);
  border-radius: var(--radius-sm);
}

.feature-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 4px;
}

.feature-desc {
  font-size: 0.85rem;
  color: var(--gray-500);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 968px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about-visual {
    display: flex;
    justify-content: center;
    min-height: auto;
  }

  .accent-card, .experience-badge {
    display: none;
  }
}
</style>
