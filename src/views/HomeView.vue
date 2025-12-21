<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { language } = useLanguage()
</script>

<template>
  <div class="home">
    <!-- Mobile image (hidden on desktop) -->
    <img
      v-if="language === 'en'"
      class="lg:hidden rounded mb-8 w-full"
      alt="Baby Shower Photo"
      src="@/assets/baby-shower.png"
    />
    <img
      v-else
      class="lg:hidden rounded mb-8 w-full"
      alt="Baby Shower Photo"
      src="@/assets/baby-shower-es.png"
    />

    <!-- English Event Details -->
    <section v-if="language === 'en'" class="mb-10">
      <div class="info-item space-y-5">
        <h1 class="accent text-2xl/8">Come and celebrate our tiny guest with us!</h1>
        <p class="description pl-1 leading-relaxed">We've received so much love from everyone, and
        baby is feeling it as well!</p>
        <p class="description pl-1 leading-relaxed">We're so excited to celebrate with you, and we
        are asking that you help us make this a safe event so that we can get to the finish line as
        healthy as possible.</p>
        <p class="description pl-1 leading-relaxed">
          A few things that would mean a lot to us:
        </p>
        <ul class="list-disc list-inside space-y-3 leading-relaxed">
          <li>If you’re not feeling well — even mildly — we kindly ask that you stay home and send your love from afar. Your understanding means a lot to us.</li>
          <li>With cold and flu season in mind, this year’s flu and COVID vaccines are strongly encouraged, though not required.</li>
        </ul>
        <p class="description pl-1 leading-relaxed">
          Thank you so much for helping us create a cozy and healthy space as we celebrate together.
        </p>
      </div>
    </section>

    <!-- Spanish Event Details -->
    <section v-else class="mb-10">
      <div class="info-item space-y-5">
        <h1 class="accent text-2xl/8">¡Vengan a celebrar con nosotros a nuestro invitadito especial que viene en camino!</h1>
        <p class="description pl-1 leading-relaxed">Hemos estado siendo muy juiciosos para mantenernos sanos, así que les agradeceríamos mucho su ayuda para que todo esté seguro para el bebé y para Loren Michelle.</p>
        <p class="description pl-1 leading-relaxed">
          Estas son unas cositas que significan mucho para nosotros:
        </p>
        <ul class="list-disc list-inside space-y-3 leading-relaxed">
          <li>Les recomendamos, si pueden, ponerse la vacuna de la gripa y la de COVID (nosotros estamos vacunados y al día).</li>
          <li>Si se sienten medio enfermados —con tos, estornudos, o si ven que algo les está empezando— les pedimos con cariño que nos manden su amor desde la casa.</li>
        </ul>
        <p class="description pl-1 leading-relaxed">
          Mil gracias por ayudarnos a crear un espacio bien bonito y saludable mientras celebramos juntos.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
button {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  padding: 3px;
}
</style>
