<template>
  <div class="assistant__header">
    <div class="assistant__title">Личный помощник</div>
    <RoundedButton
      class="assistant__setting-btn assistant__setting-btn_mobile"
      color="#F5F5F5"
      @click="toggleIsSettings"
    >
      <img src="@/assets/img/ellipsisVertical.svg" alt="assistantMenu" />
    </RoundedButton>
    <div class="assistant__content">
      <div class="assistant__details">
        <div class="assistant__details-name">Jim Davidson</div>
        <div class="assistant__details-mail">Jim Davidson@adaurum.ru</div>
      </div>
      <RoundedButton
        class="assistant__setting-btn assistant__setting-btn_desktop"
        color="#F5F5F5"
        @click="toggleIsSettings"
      >
        <img src="@/assets/img/ellipsisVertical.svg" alt="assistantMenu" />
      </RoundedButton>
    </div>
    <div v-if="isSettings" class="assistant__setting">
      <a class="link" href="#">Обратная связь о работе сервиса</a>
      <a class="link" href="#">Сменить помощника</a>
    </div>
  </div>
</template>

<script setup>
import RoundedButton from '@/components/buttons/RoundedButton.vue'
import { ref } from 'vue'

const isSettings = ref(false)

const toggleIsSettings = () => {
  isSettings.value = !isSettings.value
}
</script>

<style scoped lang="scss">
.assistant {
  &__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 19px;

    @media (max-width: $breakpoint-sm-max) {
      flex-wrap: wrap;
      margin: 0 20px 20px 20px;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  &__details {
    display: flex;
    gap: 10px;

    @media (max-width: $breakpoint-sm-max) {
      margin-top: 12px;
    }
  }

  &__details-name {
    font-size: 15px;
    font-weight: 600;
  }

  &__details-mail {
    font-size: 15px;
    color: #525252;
  }

  &__setting-btn {
    &_desktop {
      @media (max-width: $breakpoint-sm-max) {
        display: none;
      }
    }

    &_mobile {
      display: none;
      @media (max-width: $breakpoint-sm-max) {
        display: flex;
      }
    }
  }

  &__setting {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
    background-color: #ffffff;
    gap: 12px;
    right: 0;
    top: 48px;
    padding: 16px 30px;
    border-radius: 8px;
    border: none;
  }
}
</style>
