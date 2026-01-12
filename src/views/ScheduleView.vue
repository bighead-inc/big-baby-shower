<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { language } = useLanguage()
</script>

<template>
  <div class="schedule">
    <!-- English Section -->
    <section v-if="language === 'en'" class="space-y-2">
      <h1 class="accent text-3xl/9">Tentative Schedule</h1>
      <p class="flex items-center justify-center accent text-2xl/8 mb-3">2pm</p>
      <ul class="pl-1 text-center">
        <li>Don't say baby! game</li>
        <li>Diaper Raffle game</li>
        <li>Voting</li>
        <li>Photos & Scrapbook</li>
        <li>Food</li>
      </ul>
      <p class="flex items-center justify-center accent text-2xl/8 mb-3">3pm</p>
      <ul class="pl-1 leading-relaxed text-center">
        <li>Trivia (*prize*)</li>
        <li>Lotería (*prize*)</li>
        <li>Voting</li>
        <li>Photos & Scrapbook</li>
      </ul>

      <p class="flex items-center justify-center accent text-2xl/8 mb-3">4pm</p>
      <ul class="pl-1 leading-relaxed text-center">
        <li>Reveal</li>
        <li>Cake</li>
        <li>Gift Opening</li>
        <li>Diaper Raffle (*prize*)</li>
        <li>Don't say baby (*prize*)</li>
      </ul>

      <p class="flex items-center justify-center accent text-2xl/8 mb-3">5pm</p>
      <ul class="pl-1 leading-relaxed text-center">
        <li>Thanks for coming!</li>
      </ul>
    </section>

    <!-- Spanish Section -->
    <section v-else class="space-y-2">
      <h1 class="accent text-3xl/9">Horario Provisional</h1>
        <p class="flex items-center justify-center accent text-2xl/8 mb-3">2pm</p>
          <ul class="pl-1 text-center">
            <li>No digas baby! juego</li>
            <li>Rifa de Pañales</li>
            <li>Votar</li>
            <li>Fotos & Scrapbook</li>
            <li>A comer!</li>
          </ul>
        <p class="flex items-center justify-center accent text-2xl/8 mb-3">3pm</p>
          <ul class="pl-1 leading-relaxed text-center">
            <li>Trivia (*premio*)</li>
            <li>Lotería (*premio*)</li>
            <li>Votar</li>
            <li>Fotos & Scrapbook</li>
          </ul>

        <p class="flex items-center justify-center accent text-2xl/8 mb-3">4pm</p>
          <ul class="pl-1 leading-relaxed text-center">
            <li>Revelar</li>
            <li>Pastel</li>
            <li>Abrir Regalos</li>
            <li>Rifa de Pañales(*premio*)</li>
            <li>No digas baby! (*premio*)</li>
          </ul>

        <p class="flex items-center justify-center accent text-2xl/8 mb-3">5pm</p>
          <ul class="pl-1 leading-relaxed text-center">
            <li>Gracias por venir!</li>
        </ul>
    </section>
  </div>
</template>
