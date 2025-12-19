<script setup>
import InfoItem from '@/components/InfoItem.vue'

const details = [
  { header: 'Who', description: '[PARENT NAMES] Baby Shower' },
  { header: 'What', description: 'A celebration for the upcoming arrival!' },
  { header: 'When', description: '[DATE AND TIME]' },
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
      src="@/assets/baby-photo.jpg"
    />

    <!-- Event Details -->
    <section class="mb-8">
      <InfoItem
        v-for="item in details"
        :header="item.header"
        :description="item.description"
        :link="item.link"
        :key="item.header"
      />
    </section>

    <!-- Calendar Invite -->
    <section class="mb-8">
      <h1 class="accent text-2xl/10">Add to Calendar</h1>
      <button
        @click="downloadCalendarInvite"
        class="pl-1 hover:text-slate-900 font-medium hover:underline cursor-pointer"
      >
        Download Calendar Invite (.ics)
      </button>
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
