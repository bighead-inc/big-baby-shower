<script setup>
import QAItem from '@/components/QAItem.vue'
</script>

<template>
  <div class="faq">
    <QAItem
      question="What time should I arrive?"
      answer="[ARRIVAL TIME]. Please try to arrive on time so we can start the festivities together!"
    />
    <QAItem
      question="Can I bring my kids?"
      answer="[KIDS POLICY - e.g., Yes, kids are welcome! / This is an adults-only event.]"
    />
    <QAItem
      question="What should I wear?"
      answer="[DRESS CODE - e.g., Casual and comfortable! / Semi-formal attire.]"
    />
    <QAItem
      question="Is there parking available?"
      answer="[PARKING INFO - e.g., Street parking is available. / There is a parking lot at the venue.]"
    />
    <QAItem
      question="Do I need to bring a gift?"
      answer="Your presence is the best present! But if you'd like to bring a gift, check out our registries on the Registry page."
    />
  </div>
</template>
