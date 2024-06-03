<template>
  <div class="storage-files__section">
    <div @click="toggleIsOpen" class="storage-files__section-header">
      <div class="storage-files__section-title">{{ fileSection.name }}</div>
      <button class="storage-files__section-btn">
        <img v-if="isOpen" src="@/assets/img/arrowUp.svg" alt="close" />
        <img v-else src="@/assets/img/arrowDown.svg" alt="open" />
      </button>
    </div>

    <template v-if="isOpen">
      <div class="storage-files__content" v-for="file in fileSection.files" :key="file.id">
        <SampleFile :fileSection="fileSection.name" :file="file" />
      </div>

      <div class="storage-files__more">
        <button class="storage-files__more-btn">Показать еще</button>
      </div>
    </template>
  </div>
</template>

<script setup>
import SampleFile from '@/components/fileStorage/SampleFile.vue'
import { ref } from 'vue'

defineProps({
  fileSection: {
    type: Object,
    required: true,
  },
})

const isOpen = ref(true)

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.storage-files {
  &__section {
    @media (max-width: $breakpoint-md-max) {
      width: 314px;
    }
  }

  &__section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    cursor: pointer;
  }

  &__section-title {
    font-size: 18px;
    font-weight: 600;
  }

  &__section-btn {
    cursor: pointer;
    border: none;
  }

  &__content {
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__more {
    display: flex;
    justify-content: end;
  }

  &__more-btn {
    color: #ee26c2;
    border: none;
    font-size: 15px;
    cursor: pointer;
  }
}
</style>
