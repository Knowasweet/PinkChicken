<template>
  <div class="form-assistant" :style="{ 'border-color': isActiveBorder ? '#EE26C2' : '#EBEBEB' }">
    <textarea
      v-model="inputMessage"
      @focus="setActiveBorder"
      @blur="setInactiveBorder"
      class="form-assistant__textarea scroll-bar"
      placeholder="Введите сообщение для администратора"
    />
    <div class="form-assistant__actions-wrapper">
      <a class="form-assistant__actions-btn">
        <img src="@/assets/img/attachFile.svg" alt="attachFile" />
      </a>
      <a class="form-assistant__actions-btn">
        <img
          class="form-assistant__actions-img"
          src="@/assets/img/attachImg.svg"
          alt="attachImage"
        />
      </a>
    </div>

    <div @click="sendMessage" class="form-assistant__send-btn">
      <IconButton color="#EE26C2" size="50px">
        <img src="@/assets/img/send.svg" alt="send" />
      </IconButton>
      <div class="form-assistant__send-btn-text">Enter</div>
    </div>
  </div>
</template>

<script setup>
import IconButton from '@/components/buttons/RoundedButton.vue'
import { ref } from 'vue'

const emit = defineEmits(['sendMessage'])

const inputMessage = ref('')

const isActiveBorder = ref(false)

const sendMessage = () => {
  emit('sendMessage', inputMessage.value)
  inputMessage.value = ''
}

const setActiveBorder = () => {
  isActiveBorder.value = true
}

const setInactiveBorder = () => {
  isActiveBorder.value = false
}
</script>

<style scoped lang="scss">
.form-assistant {
  position: relative;
  padding: 25px 20px;
  border: 2px solid #ebebeb;
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;
  height: 144px;

  &__textarea {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    height: 60%;
    overflow-y: auto;
    background-color: transparent;
    border: none;
    resize: none;
    outline: none;

    @media (max-width: $breakpoint-sm-max) {
      height: 65%;
    }

    &::placeholder {
      font-size: 15px;
      color: #525252;
    }
  }

  &__actions-wrapper {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    gap: 20px;

    @media (max-width: $breakpoint-sm-max) {
      left: 16px;
    }
  }

  &__actions-btn {
    cursor: pointer;
  }

  &__actions-img {
    width: 24px;
    height: 24px;
  }

  &__send-btn {
    position: absolute;
    bottom: 12px;
    right: 20px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;

    &:hover {
      color: #ee26c2;
    }

    @media (max-width: $breakpoint-sm-max) {
      bottom: 10px;
      right: 16px;
    }
  }

  &__send-btn-text {
    @media (max-width: $breakpoint-sm-max) {
      display: none;
    }
  }
}
</style>
