<template>
  <button
    @click="toggleIsActive"
    class="rectangle-btn"
    :class="
      isDisabled ? 'rectangle-btn_disabled' : isActive ? 'rectangle-btn_pink' : 'rectangle-btn_blue'
    "
  >
    <slot>Title</slot>
    <img v-if="!isDisabled && isActive" src="@/assets/img/circleCheck.svg" alt="circleCheck" />
  </button>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
})

const isActive = ref(false)

const toggleIsActive = () => {
  isActive.value = !isActive.value
}
</script>

<style scoped lang="scss">
.rectangle-btn {
  font-size: 14px;
  font-weight: 600;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #000000;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  &_disabled {
    background-color: #cbcbcb;
    border-color: #cbcbcb;
  }

  &_blue {
    border-color: #2676ee;
  }

  &_pink {
    border-color: #ee26c2;
  }
}
</style>
