<template>
  <div class="container">
    <Header />
    <main class="main">
      <FileStorage />
      <PersonalAssistant />
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import FileStorage from '@/components/fileStorage/FileStorage.vue'
import PersonalAssistant from '@/components/assistant/PersonalAssistant.vue'
</script>

<style scoped lang="scss">
.main {
  display: flex;
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: $breakpoint-md-max) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: $breakpoint-sm-max) {
    gap: 30px;
    margin-bottom: 0;
  }
}
</style>
