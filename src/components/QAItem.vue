<script setup>
defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="qa-item mb-8">
    <h1 class="accent text-2xl/8 mb-3">{{ question }}</h1>
    <p class="answer pl-1 leading-relaxed">{{ answer }}</p>
  </div>
</template>

<style scoped></style>
