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
  <div class="qa-item">
    <h1 class="accent text-2xl/10">{{ question }}</h1>
    <p class="answer pl-1">{{ answer }}</p>
  </div>
</template>

<style scoped></style>
