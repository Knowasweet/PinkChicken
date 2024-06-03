<template>
  <div class="assistant-dialog scroll-bar">
    <div class="assistant-dialog__date">Сегодня, {{ messages[0].time }}</div>
    <div class="assistant-dialog__chat" v-for="(message, index) in messages" :key="index">
      <AssistantCard v-if="message.from === 'assistant'" :message="message" />
      <UserCard v-else :message="message" />
    </div>
  </div>
</template>

<script setup>
import AssistantCard from '@/components/assistant/AssistantCard.vue'
import UserCard from '@/components/assistant/UserCard.vue'

defineProps({
  messages: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.assistant-dialog {
  margin: 49px 0 0 20px;
  padding-right: 26px;
  overflow: auto;
  height: 320px;

  @media (max-width: $breakpoint-sm-max) {
    margin: 30px 0 0 0;
    padding-right: 16px;
    height: 385px;
  }

  &__date {
    margin-bottom: 24px;
    font-size: 15px;
    color: #525252;
    text-align: center;

    @media (max-width: $breakpoint-sm-max) {
      margin-bottom: 26px;
    }
  }

  &__chat {
    flex-direction: column;
    margin-bottom: 11px;

    @media (max-width: $breakpoint-md-max) {
      margin-bottom: 12px;
    }

    @media (max-width: $breakpoint-sm-max) {
      margin-bottom: 20px;
    }
  }
}
</style>
