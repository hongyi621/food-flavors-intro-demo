<template>
  <section id="home" class="hero">
    <!-- Decorative Elements -->
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-pattern"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-text">
        <div class="section-badge">
          <span>✨</span> Premium Quality Since 2020
        </div>
        <h1 class="hero-title">
          Discover the Art of
          <span class="title-gradient">Extraordinary Flavors</span>
        </h1>
        <p class="hero-description">
          Elevate your culinary creations with our handcrafted, all-natural food flavors.
          From classic vanilla to rich chocolate — pure taste, perfected.
        </p>
        <div class="hero-actions">
          <a href="#products" class="btn btn-primary btn-lg">
            <span>Explore Flavors</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#about" class="btn btn-ghost">
            Learn More
          </a>
        </div>

        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Unique Flavors</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">10K+</span>
            <span class="stat-label">Happy Customers</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">Natural Ingredients</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="flavor-showcase">
          <div class="showcase-card card-1">
            <div class="card-emoji">🍦</div>
            <div class="card-label">Vanilla</div>
          </div>
          <div class="showcase-card card-2">
            <div class="card-emoji">🍫</div>
            <div class="card-label">Chocolate</div>
          </div>
          <div class="showcase-card card-3">
            <div class="card-emoji">🍓</div>
            <div class="card-label">Strawberry</div>
          </div>
          <div class="center-circle">
            <span class="center-icon">🍊</span>
            <span class="center-text">Craft<br/>Flavors</span>
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

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--primary-light), transparent);
  top: -200px;
  right: -100px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.2), transparent);
  bottom: -100px;
  left: -100px;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.15), transparent);
  top: 50%;
  left: 40%;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text {
  max-width: 580px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--dark);
  margin-bottom: 24px;
}

.title-gradient {
  display: block;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.15rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 36px;
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
  border-radius: var(--radius-full);
  transition: var(--transition);
}

.btn-ghost:hover {
  color: var(--primary-dark);
  background: var(--primary-light);
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
}

.stat-number {
  display: block;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--dark);
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

.showcase-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 28px;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
  animation: float 6s ease-in-out infinite;
}

.showcase-card:hover {
  transform: scale(1.08);
  box-shadow: var(--shadow-xl);
}

.card-emoji {
  font-size: 3rem;
}

.card-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--dark);
}

.card-1 {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.card-2 {
  bottom: 30px;
  left: 10px;
  animation-delay: -2s;
}

.card-3 {
  bottom: 30px;
  right: 10px;
  animation-delay: -4s;
}

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: var(--shadow-glow);
}

.center-icon {
  font-size: 2rem;
}

.center-text {
  color: var(--white);
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.card-1 {
  animation: float1 6s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-12px); }
}

/* Scroll Indicator */
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
  background: var(--primary);
  border-radius: 2px;
  animation: scrollDown 2s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { top: -50%; }
  100% { top: 100%; }
}

/* Responsive */
@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text {
    max-width: 100%;
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
