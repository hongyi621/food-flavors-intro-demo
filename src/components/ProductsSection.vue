<template>
  <section id="products" class="products">
    <div class="container">
      <!-- Header -->
      <div class="products-header">
        <div class="section-badge"><span>🧪</span> Our Collection</div>
        <h2 class="section-title">Handcrafted Flavors</h2>
        <p class="section-subtitle">
          Each flavor is meticulously crafted using the finest natural ingredients,
          delivering authentic taste in every drop.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab', { active: activeTab === tab }]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Product Grid -->
      <div class="products-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
        >
          <div class="card-image" :style="{ background: product.gradient }">
            <span class="card-icon">{{ product.icon }}</span>
            <div class="card-badge" v-if="product.badge">{{ product.badge }}</div>
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="card-category">{{ product.category }}</span>
              <div class="card-rating">
                <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= product.rating }">★</span>
              </div>
            </div>
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="card-description">{{ product.description }}</p>
            <div class="card-footer">
              <div class="card-price">
                <span class="price-current">${{ product.price.toFixed(2) }}</span>
                <span v-if="product.originalPrice" class="price-original">${{ product.originalPrice.toFixed(2) }}</span>
              </div>
              <button class="btn-add" @click="addToCart(product)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View All -->
      <div class="products-cta">
        <a href="#" class="btn btn-primary">
          View All Products
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const tabs = ['All', 'Classic', 'Premium', 'New']
const activeTab = ref('All')

const products = ref([
  {
    id: 1,
    name: 'Madagascar Vanilla',
    category: 'Classic',
    description: 'Rich, creamy vanilla extracted from hand-picked Madagascar beans. Perfect for baking and desserts.',
    price: 12.99,
    originalPrice: null,
    icon: '🍦',
    gradient: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)',
    rating: 5,
    badge: 'Bestseller',
    tag: 'Classic',
  },
  {
    id: 2,
    name: 'Belgian Dark Chocolate',
    category: 'Premium',
    description: 'Deep, intense chocolate flavor from premium Belgian cacao. Rich and indulgent.',
    price: 14.99,
    originalPrice: 18.99,
    icon: '🍫',
    gradient: 'linear-gradient(135deg, #EFEBE9, #D7CCC8)',
    rating: 5,
    badge: 'Sale',
    tag: 'Premium',
  },
  {
    id: 3,
    name: 'Garden Strawberry',
    category: 'Classic',
    description: 'Sweet and tangy strawberry flavor from sun-ripened berries. Fresh and natural.',
    price: 11.99,
    originalPrice: null,
    icon: '🍓',
    gradient: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)',
    rating: 4,
    badge: null,
    tag: 'Classic',
  },
  {
    id: 4,
    name: 'Honey Caramel',
    category: 'Premium',
    description: 'Luxurious blend of golden honey and buttery caramel. Perfect for coffee and pastries.',
    price: 15.99,
    originalPrice: null,
    icon: '🍯',
    gradient: 'linear-gradient(135deg, #FFF8E1, #FFECB3)',
    rating: 5,
    badge: 'New',
    tag: 'New',
  },
  {
    id: 5,
    name: 'Fresh Mint',
    category: 'Classic',
    description: 'Cool, refreshing peppermint extracted from organic mint leaves. Invigorating taste.',
    price: 10.99,
    originalPrice: 12.99,
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
    rating: 4,
    badge: null,
    tag: 'Classic',
  },
  {
    id: 6,
    name: 'Salted Caramel Swirl',
    category: 'Premium',
    description: 'The perfect balance of sweet caramel and sea salt. A modern classic for any recipe.',
    price: 16.99,
    originalPrice: null,
    icon: '🧂',
    gradient: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)',
    rating: 5,
    badge: 'New',
    tag: 'New',
  },
])

const filteredProducts = computed(() => {
  if (activeTab.value === 'All') return products.value
  return products.value.filter(p => p.tag === activeTab.value)
})

const addToCart = (product) => {
  alert(`${product.name} added to cart! 🛒`)
}
</script>

<style scoped>
.products {
  padding: var(--section-padding);
  background: var(--light);
}

.products-header {
  text-align: center;
  margin-bottom: 48px;
}

.products-header .section-subtitle {
  margin: 0 auto;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.tab {
  padding: 10px 28px;
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-500);
  background: var(--white);
  border: 1px solid var(--gray-100);
  transition: var(--transition);
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

/* Product Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}

.product-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
}

.card-image {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon {
  font-size: 5rem;
  transition: var(--transition);
}

.product-card:hover .card-icon {
  transform: scale(1.1) rotate(-5deg);
}

.card-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 14px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-body {
  padding: 24px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-category {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-rating {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 0.85rem;
  color: var(--gray-300);
}

.star.filled {
  color: var(--accent);
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}

.card-description {
  font-size: 0.88rem;
  color: var(--gray-500);
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.price-current {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--dark);
}

.price-original {
  font-size: 0.9rem;
  color: var(--gray-300);
  text-decoration: line-through;
}

.btn-add {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  transition: var(--transition);
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4);
}

/* CTA */
.products-cta {
  text-align: center;
  margin-top: 48px;
}

/* Responsive */
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
