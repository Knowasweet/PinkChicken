<template>
  <div class="storage">
    <div class="storage_desktop">
      <div class="storage__title">Файлы</div>
      <div v-if="isStorageEmpty" class="storage__no-files">
        <img class="storage__no-files-img" src="@/assets/img/files.svg" alt="files" />
        <div class="storage__no-files-text">
          Закажи у личного помощника медиаплан. Он появится в этом разделе
        </div>
      </div>

      <div v-else class="storage__files scroll-bar">
        <SectionFiles
          v-for="fileSection in fileSections"
          :key="fileSection.name"
          :fileSection="fileSection"
        />
      </div>
    </div>
    <div class="storage_mobile">
      <RectangleButton :isDisabled="isStorageEmpty">Медиапланы</RectangleButton>
      <RectangleButton :isDisabled="isStorageEmpty">Отчеты</RectangleButton>
    </div>
  </div>
</template>

<script setup>
import SectionFiles from '@/components/fileStorage/SectionFiles.vue'
import RectangleButton from '@/components/buttons/RectangleButton.vue'
import { ref } from 'vue'

const isStorageEmpty = ref(false)

const fileSections = [
  {
    name: 'Медиапланы',
    files: [
      { id: 1, name: 'Companyname 11/23', isDone: false, created: null },
      { id: 2, name: 'Companyname 10/23', isDone: true, created: '1.06.22' },
      { id: 3, name: 'Companyname 9/23', isDone: true, created: '1.06.22' },
      { id: 4, name: 'Companyname 8/23', isDone: true, created: '1.06.22' },
    ],
  },
  {
    name: 'Отчеты',
    files: [
      { id: 5, name: 'Companyname 11/23', isDone: false, created: null },
      { id: 6, name: 'Companyname 10/23', isDone: true, created: '1.06.22' },
      { id: 7, name: 'Companyname 9/23', isDone: true, created: '1.06.22' },
    ],
  },
]
</script>

<style scoped lang="scss">
.storage {
  border-radius: 20px;
  background-color: #ffffff;

  &_desktop {
    width: 295px;
    height: 709px;

    @media (max-width: $breakpoint-md-max) {
      width: 100%;
      height: 405px;
    }

    @media (max-width: $breakpoint-sm-max) {
      display: none;
    }
  }

  &_mobile {
    display: none;

    @media (max-width: $breakpoint-sm-max) {
      display: flex;
      gap: 12px;
      margin: 0 20px 0 20px;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    margin-top: 28px;
    margin-left: 20px;

    @media (max-width: $breakpoint-md-max) {
      margin-top: 30px;
    }
  }

  &__no-files {
    margin: 46px 23px 0 11px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: $breakpoint-md-max) {
      margin: 5px 80px 0 86px;
      flex-direction: row;
      gap: 19.31px;
      align-items: center;
    }
  }

  &__no-files-img {
    width: 255.84px;
    height: 314px;

    @media (max-width: $breakpoint-md-max) {
      width: 247.69px;
      height: 304px;
    }
  }

  &__no-files-text {
    font-weight: 500;
  }

  &__files {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px 0 0 20px;
    padding-right: 21px;
    overflow: scroll;
    height: 572px;

    @media (max-width: $breakpoint-md-max) {
      margin: 20px 0 30px 20px;
      justify-content: space-between;
      flex-direction: row;
      padding: 20px;
      height: 296px;
    }

    @media (max-width: $breakpoint-sm-max) {
      display: none;
    }
  }
}
</style>
