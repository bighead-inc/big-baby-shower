<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { language } = useLanguage()
</script>

<template>
  <div class="home">
    <!-- Mobile image (hidden on desktop) -->
    <img
      class="lg:hidden rounded mb-8 w-full"
      alt="Baby Shower Photo"
      src="@/assets/baby-shower.png"
    />

    <!-- English Event Details -->
    <section v-if="language === 'en'" class="mb-10">
      <div class="info-item space-y-5">
        <h1 class="accent text-2xl/8">Come and celebrate our tiny guest with us!</h1>
        <p class="description pl-1 leading-relaxed">We've been extra careful about staying healthy, so we'd
        appreciate your help keeping things safe for baby and Loren.</p>
        <p class="description pl-1 leading-relaxed">
          A few things that would mean a lot to us:
        </p>
        <ul class="list-disc list-inside space-y-3 leading-relaxed">
          <li>Getting the Flu and Covid vaccines (strongly encouraged)</li>
          <li>If you're feeling under the weather -- coughing, sneezing, indigestion or just sensing
          something coming on -- we kindly ask that you send us your love from home instead.</li>
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
