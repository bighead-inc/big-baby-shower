<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { routes } from '@/router'
import { useLanguage } from '@/composables/useLanguage'

const { language, setLanguage } = useLanguage()

const navLinks = routes.map(route => ({
  to: route.path,
  label: route.meta?.navLabel ?? route.name.charAt(0).toUpperCase() + route.name.slice(1),
}))

const linkStyle = { flexBasis: `${100 / navLinks.length}%` }
</script>

<template>
  <div class="lg:flex lg:h-screen tracking-wide">
    <!-- Left: Fixed image (desktop only) -->
    <aside class="hidden lg:flex lg:flex-col lg:w-2/5 lg:fixed lg:left-0 lg:top-0 lg:h-screen overflow-hidden">
      <div class="flex-1 min-h-0 overflow-hidden">
        <img
          class="w-full h-full object-cover"
          alt="Baby Shower Photo"
          src="@/assets/baby-shower.png"
        />
      </div>
      <footer class="shrink-0 px-4 py-8 text-center">
        <p class="text-xs text-gray-500">built with love by loren & hector</p>
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
        <div class="flex items-center gap-1 text-sm px-4">
          <button
            @click="setLanguage('en')"
            :class="language === 'en' ? 'font-semibold' : 'opacity-50'"
            class="hover:opacity-100 transition-opacity"
          >EN</button>
          <span class="opacity-40">|</span>
          <button
            @click="setLanguage('es')"
            :class="language === 'es' ? 'font-semibold' : 'opacity-50'"
            class="hover:opacity-100 transition-opacity"
          >ES</button>
        </div>
      </nav>

      <div class="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex-1">
        <RouterView />
      </div>

      <!-- Mobile footer (hidden on desktop) -->
      <footer class="lg:hidden px-4 py-8 text-center mt-auto">
        <p class="text-xs text-gray-500">built with love by loren & hector</p>
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
