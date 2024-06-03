<template>
  <button class="rounded-btn" :style="{ width: size, height: size, 'background-color': color }">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: '40px',
  },
  color: {
    type: String,
    default: '#FFFFFF',
  },
})
</script>

<style scoped lang="scss">
.rounded-btn {
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
</style>
