<template>
  <div class="sample-file">
    <div class="sample-file__wrapper" @click="toggleIsActive">
      <div class="sample-file__content">
        <div class="sample-file__content-format">
          <img src="@/assets/img/xmlFile.svg" alt="xmlFile" />
        </div>
        <div class="sample-file__content-description">
          <slot>Companyname 11/23</slot>
        </div>
      </div>
      <SquareButton @click.stop :isDone="file.isDone">
        <img v-if="file.isDone" src="@/assets/img/download.svg" alt="download" />
        <img v-else src="@/assets/img/refresh.svg" alt="refresh" />
      </SquareButton>
    </div>

    <div class="sample-file__details" v-if="isActive">
      <div v-if="fileSection === 'Медиапланы'" class="sample-file__media-plan">
        <div v-if="file.created" class="sample-file__details-wrapper">
          <img src="@/assets/img/circleCheck.svg" alt="circleCheck" />
          <div>Медиаплан от {{ file.created }} готов</div>
        </div>
        <div v-else class="sample-file__details-wrapper">
          <img src="@/assets/img/circleInfo.svg" alt="circleInfo" />
          <div>Медиаплан в процессе составления</div>
        </div>
      </div>

      <div v-else class="sample-file__report">
        <div v-if="file.created" class="sample-file__details-wrapper">
          <img src="@/assets/img/circleCheck.svg" alt="circleCheck" />
          <div>Отчет от {{ file.created }} готов</div>
        </div>
        <div v-else class="sample-file__details-wrapper">
          <img src="@/assets/img/circleInfo.svg" alt="circleInfo" />
          <div>Отчет формируется</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SquareButton from '@/components/buttons/SquareButton.vue'
import { ref } from 'vue'

defineProps({
  fileSection: {
    type: String,
    required: true,
  },
  file: {
    type: Object,
    required: true,
  },
  isDone: {
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
.sample-file {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 9px;
    padding-left: 9px;
  }

  &__content-description {
    font-size: 15px;
  }

  &__details {
    margin: 8px 0 6px 0;
  }

  &__details-wrapper {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 12px;
    color: #525252;
  }
}
</style>
