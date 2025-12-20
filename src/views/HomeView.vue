<script setup>
import InfoItem from '@/components/InfoItem.vue'

const details = [
  {
    header: 'Come and celebrate our tiny guest with us!',
    description: `We've been extra careful about staying healthy,
    so we'd appreciate your help keeping things safe for baby and Loren.

    A few things that would mean a lot to us:

    - Getting the Flu and Covid vaccines (strongly encouraged)
    - If you're feeling under the weather -- coughing, sneezing, indigestion or just sensing something coming on -- we kindly ask that you send us your love from home instead.

    Thank you so much for helping us create a cozy and healthy space as we celebrate together.`
  },
  {
    header: 'Where',
    description: '[VENUE NAME AND ADDRESS]',
    link: '[GOOGLE MAPS LINK]'
  },
]

function downloadCalendarInvite() {
  const link = document.createElement('a')
  link.href = '/baby-shower.ics'
  link.download = 'baby-shower.ics'
  link.click()
}
</script>

<template>
  <div class="home">
    <!-- Mobile image (hidden on desktop) -->
    <img
      class="lg:hidden rounded mb-8 w-full"
      alt="Baby Shower Photo"
      src="@/assets/baby-shower.png"
    />

    <!-- Event Details -->
    <section class="mb-8">
      <div class="info-item">
        <h1 class="accent text-2xl/10">Come and celebrate our tiny guest with us!</h1>
        <p class="description pl-1">We've been extra careful about staying healthy, so we'd
        appreciate your help keeping things safe for baby and Loren.</p>

        <br>

        <p class="description pl-1">
          A few things that would mean a lot to us:
        </p>
        <br>
        <ul class="list-disc list-inside">
          <li>Getting the Flu and Covid vaccines (strongly encouraged)</li>
          <li>If you're feeling under the weather -- coughing, sneezing, indigestion or just sensing
          something coming on -- we kindly ask that you send us your love from home instead.</li>

        </ul>
        <br>
        <p class="description pl-1">
          Thank you so much for helping us create a cozy and healthy space as we celebrate together.
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
