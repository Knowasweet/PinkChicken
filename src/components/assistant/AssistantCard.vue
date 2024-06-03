<template>
  <div class="assistant-card">
    <img class="assistant-card__img" src="@/assets/img/assistant.svg" alt="assistant" />
    <div class="assistant-card__content">
      <div class="assistant-card__content-message">{{ message.text }}</div>
      <div class="assistant-card__content-wrapper">
        <div class="assistant-card__content-assistant-name">{{ assistantName }}</div>
        <div class="assistant-card__content-time">{{ message.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  message: {
    type: Object,
    required: true,
  },
})

const assistantName = ref('Jim')
</script>

<style scoped lang="scss">
.assistant-card {
  display: flex;
  gap: 13px;

  @media (max-width: $breakpoint-sm-max) {
    gap: 10px;
  }

  &__img {
    width: 49px;
    height: 49px;

    @media (max-width: $breakpoint-sm-max) {
      width: 36px;
      height: 36px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__content-message {
    background-color: #ffffff;
    padding: 16px 22px;
    font-weight: 500;
    border-radius: 12px;
    border: none;
    max-width: 497px;
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: $breakpoint-md-max) {
      max-width: 410px;
    }

    @media (max-width: $breakpoint-sm-max) {
      max-width: 213px;
      font-size: 14px;
    }
  }

  &__content-wrapper {
    display: flex;
    gap: 8px;
    align-items: center;

    @media (max-width: $breakpoint-md-max) {
      gap: 9px;
    }
  }

  &__content-assistant-name {
    font-weight: 600;
    font-size: 18px;
  }

  &__content-time {
    color: #525252;
    font-size: 15px;
  }
}
</style>
