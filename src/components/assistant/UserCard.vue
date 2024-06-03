<template>
  <div class="user-card">
    <div class="user-card__content-message">{{ message.text }}</div>
    <div class="user-card__content-time">{{ message.time }}</div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.user-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: end;

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
      max-width: 265px;
      padding: 14px 18px;
      font-size: 14px;
    }
  }

  &__content-time {
    color: #525252;
    font-size: 15px;
  }
}
</style>
