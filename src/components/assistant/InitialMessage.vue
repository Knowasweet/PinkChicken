<template>
  <div class="chat-assistant__initial">
    <img class="chat-assistant__initial-img" src="@/assets/img/assistant.svg" alt="assistant" />
    <div class="chat-assistant__initial-text">
      Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и
      узнать о ходе работы
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-assistant {
  &__initial {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 57px;

    @media (max-width: $breakpoint-md-max) {
      padding-top: 55px;
      padding-bottom: 62px;
    }

    @media (max-width: $breakpoint-sm-max) {
      padding-top: 50px;
      padding-bottom: 63px;
    }
  }

  &__initial-img {
    width: 190px;
    height: 193px;

    @media (max-width: $breakpoint-md-max) {
      width: 180px;
      height: 183px;
    }

    @media (max-width: $breakpoint-sm-max) {
      width: 130px;
      height: 132px;
    }
  }

  &__initial-text {
    width: 470px;
    font-weight: 500;
    text-align: center;

    @media (max-width: $breakpoint-md-max) {
      width: 364px;
    }

    @media (max-width: $breakpoint-sm-max) {
      width: 271px;
    }
  }
}
</style>
