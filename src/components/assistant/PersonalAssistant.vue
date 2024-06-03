<template>
  <div class="assistant">
    <AssistantInfo />
    <div class="assistant__chat">
      <AssistantDialog v-if="messages.length > 0" :messages="messages" />
      <InitialMessage v-else />
      <div class="assistant__chat-actions">
        <BaseButton @click="orderMediaPlanAction">Заказать медиаплан</BaseButton>
        <BaseButton @click="orderReportAction" color="#2676EE">Заказать отчет</BaseButton>
      </div>
      <div class="assistant__form-container">
        <FormAssistant @sendMessage="sendUserMessage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/buttons/BaseButton.vue'
import FormAssistant from '@/components/assistant/FormAssistant.vue'
import InitialMessage from '@/components/assistant/InitialMessage.vue'
import AssistantInfo from '@/components/assistant/AssistantInfo.vue'
import AssistantDialog from '@/components/assistant/AssistantDialog.vue'

import { orderMediaPlan, orderReport, sendMessage } from '@/services/network/messageService.js'
import { getCurrentTime } from '@/helpers/timeHelpers.js'
import { ref } from 'vue'

const messages = ref([])

const sendUserMessage = async (userMessage) => {
  try {
    messages.value.push({ from: 'user', text: userMessage, time: getCurrentTime() })
    const messageResponse = await sendMessage(userMessage)
    messages.value.push({ from: 'assistant', text: messageResponse, time: getCurrentTime() })
  } catch (error) {
    throw error.message
  }
}

const orderMediaPlanAction = async () => {
  try {
    const mediaPlanResponse = await orderMediaPlan()
    messages.value.push({ from: 'assistant', text: mediaPlanResponse, time: getCurrentTime() })
    console.log(messages)
  } catch (error) {
    throw error.message
  }
}
const orderReportAction = async () => {
  try {
    const reportResponse = await orderReport()
    messages.value.push({ from: 'assistant', text: reportResponse, time: getCurrentTime() })
  } catch (error) {
    throw error.message
  }
}
</script>

<style lang="scss">
.assistant {
  border-radius: 20px;
  background-color: white;
  padding: 26px 28px 28px 28px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: $breakpoint-md-max) {
    padding-right: 20px;
  }

  @media (max-width: $breakpoint-sm-max) {
    padding: 0;
  }

  &__chat {
    background-color: #ebebeb;
    border-radius: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;

    @media (max-width: $breakpoint-md-max) {
      min-height: 596px;
    }

    @media (max-width: $breakpoint-sm-max) {
      border-radius: 0;
      padding: 0 20px 30px 20px;
    }
  }

  &__chat-actions {
    display: flex;
    gap: 12px;
    padding: 20px 10px 20px 20px;

    @media (max-width: $breakpoint-sm-max) {
      flex-direction: column-reverse;
      align-items: end;
      padding-right: 16px;
    }
  }

  &__form-container {
    display: flex;
    flex: 1;
  }
}
</style>
