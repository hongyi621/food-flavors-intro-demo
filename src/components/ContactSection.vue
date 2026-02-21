<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-grid">
        <!-- Left: Info -->
        <div class="contact-info">
          <div class="section-badge"><span>📬</span> Get in Touch</div>
          <h2 class="section-title">Let's Talk<br/>Flavors</h2>
          <p class="contact-desc">
            Have a question, custom flavor request, or wholesale inquiry?
            We'd love to hear from you. Fill out the form and our team will
            get back to you within 24 hours.
          </p>

          <div class="info-cards">
            <div class="info-card" v-for="info in contactInfo" :key="info.label">
              <div class="info-icon">{{ info.icon }}</div>
              <div>
                <div class="info-label">{{ info.label }}</div>
                <div class="info-value">{{ info.value }}</div>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div class="social-links">
            <a v-for="social in socials" :key="social.name" :href="social.url" class="social-link" :title="social.name">
              {{ social.icon }}
            </a>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="John"
                  v-model="form.firstName"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="Doe"
                  v-model="form.lastName"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-input"
                placeholder="john@example.com"
                v-model="form.email"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">Subject</label>
              <select class="form-input" v-model="form.subject">
                <option value="" disabled>Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="wholesale">Wholesale / Bulk Orders</option>
                <option value="custom">Custom Flavor Request</option>
                <option value="support">Product Support</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea
                class="form-input form-textarea"
                placeholder="Tell us about your flavor needs..."
                rows="4"
                v-model="form.message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full" :disabled="submitted">
              <span v-if="!submitted">Send Message</span>
              <span v-else>✓ Message Sent!</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

const submitted = ref(false)

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@flavorcraft.com' },
  { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: '📍', label: 'Address', value: '123 Flavor Street, NY 10001' },
]

const socials = [
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'Facebook', icon: '📘', url: '#' },
  { name: 'Pinterest', icon: '📌', url: '#' },
]

const submitForm = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 3000)
}
</script>

<style scoped>
.contact {
  padding: var(--section-padding);
  background: var(--light);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

/* Info Side */
.contact-desc {
  font-size: 1rem;
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 36px;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: var(--transition);
}

.info-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
}

.info-icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-light);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.info-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
}

.info-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--dark);
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: var(--radius-sm);
  font-size: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: var(--transition);
}

.social-link:hover {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(245, 166, 35, 0.3);
}

/* Form Side */
.contact-form-wrapper {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 14px 18px;
  font-size: 0.92rem;
  font-family: var(--font-body);
  color: var(--dark);
  background: var(--gray-100);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  outline: none;
}

.form-input::placeholder {
  color: var(--gray-300);
}

.form-input:focus {
  background: var(--white);
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(245, 166, 35, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%237C7C8A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}

.btn-full {
  width: 100%;
  padding: 16px;
  font-size: 1rem;
}

.btn-full:disabled {
  background: #4caf50;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 480px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form-wrapper {
    padding: 24px;
  }
}
</style>
