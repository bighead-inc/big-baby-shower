<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { routes } from '@/router'
import { useLanguage } from '@/composables/useLanguage'

const { language, setLanguage } = useLanguage()

const navLabels = {
  en: { home: 'Home', registry: 'Registry', faq: 'FAQ' },
  es: { home: 'Inicio', registry: 'Registro', faq: 'Preguntas' },
}

const footerText = {
  en: 'built with love by loren & hector',
  es: 'hecho con amor por loren & hector',
}

const navLinks = computed(() =>
  routes.map(route => ({
    to: route.path,
    label: navLabels[language.value][route.name] || route.name,
  }))
)

const linkStyle = { flexBasis: `${100 / routes.length}%` }
</script>

<template>
  <div class="lg:flex lg:h-screen tracking-wide">
    <!-- Left: Fixed image (desktop only) -->
    <aside class="hidden lg:flex lg:flex-col lg:w-2/5 lg:fixed lg:left-0 lg:top-0 lg:h-screen overflow-hidden">
      <div class="flex-1 min-h-0 overflow-hidden">
        <img
          v-if="language === 'en'"
          class="w-full h-full object-cover"
          alt="Baby Shower Photo"
          src="@/assets/baby-shower.png"
        />
        <img
          v-else
          class="w-full h-full object-cover"
          alt="Baby Shower Photo"
          src="@/assets/baby-shower-es.png"
        />
      </div>
      <footer class="shrink-0 px-4 py-8 text-center">
        <p class="text-xs text-gray-500">{{ footerText[language] }}</p>
      </footer>
    </aside>

    <!-- Right: Nav + Content (scrollable) -->
    <main class="main-content flex flex-col min-h-screen lg:w-3/5 lg:overflow-y-auto lg:h-screen lg:min-h-0">
      <nav class="flex flex-row items-center justify-center py-4">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :style="linkStyle"
          class="flex-auto text-center hover:text-slate-900"
        >
          {{ link.label }}
        </RouterLink>

        <!-- Language Toggle -->
        <div class="flex items-center text-sm px-4">
          <div class="inline-flex rounded-full border border-[#87a878] overflow-hidden">
            <button
              @click="setLanguage('en')"
              :class="language === 'en' ? 'bg-[#87a878] text-white' : 'text-[#87a878] hover:bg-[#87a878]/10'"
              class="px-3 py-1 text-xs font-medium transition-colors"
            >EN</button>
            <button
              @click="setLanguage('es')"
              :class="language === 'es' ? 'bg-[#87a878] text-white' : 'text-[#87a878] hover:bg-[#87a878]/10'"
              class="px-3 py-1 text-xs font-medium transition-colors"
            >ES</button>
          </div>
        </div>
      </nav>

      <div class="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex-1">
        <RouterView />
      </div>

      <!-- Mobile footer (hidden on desktop) -->
      <footer class="lg:hidden px-4 py-8 text-center mt-auto">
        <p class="text-xs text-gray-500">{{ footerText[language] }}</p>
      </footer>
    </main>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
  .main-content {
    margin-left: 40%;
  }
}
</style>
