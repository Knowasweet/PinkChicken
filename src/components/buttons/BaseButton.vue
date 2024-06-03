<template>
  <button class="base-btn" :style="{ 'background-color': color }">
    <slot>Button</slot>
  </button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#EE26C2',
  },
})
</script>

<style scoped lang="scss">
.base-btn {
  border-radius: 21px;
  cursor: pointer;
  border: none;
  color: #ffffff;
  font-weight: 600;
  padding: 12px 22px;
}
</style>
