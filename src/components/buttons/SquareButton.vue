<template>
  <button class="square-btn" :class="isDone ? 'square-btn_pink' : 'square-btn_gray'">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  isDone: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.square-btn {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &_pink {
    background-color: #f4d4ed;
  }

  &_gray {
    background-color: #949494;
  }
}
</style>
