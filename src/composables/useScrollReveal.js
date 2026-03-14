import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            const children = entry.target.querySelectorAll('[data-stagger]')
            children.forEach((child, i) => {
              child.style.transitionDelay = `${i * 100}ms`
              child.classList.add('revealed')
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    document.querySelectorAll(selectors).forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
