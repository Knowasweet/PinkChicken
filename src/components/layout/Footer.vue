<template>
  <footer class="footer">
    <div class="footer__container">
      <a class="footer__logo logo" href="#">
        <img class="logo__img" src="@/assets/img/footerLogo.svg" alt="footerLogo" />
      </a>

      <nav class="footer__menu">
        <div class="footer__menu-policy">
          <a class="footer__menu-link link" href="#">Политика конфиденциальности</a>
        </div>

        <div class="footer__menu-wrapper">
          <div class="footer__menu-mail">
            <img class="footer__menu-icon" src="@/assets/img/mail.svg" alt="mail" />
            <a class="footer__menu-link link" href="mailto:pinkchicken@adaurum.ru">
              pinkchicken@adaurum.ru
            </a>
          </div>

          <div class="footer__menu-lang">
            <img class="footer__menu-icon" src="@/assets/img/lang.svg" alt="language" />
            <a class="link" href="#">RU</a>
            <a class="link" href="#">EN</a>
            <a class="link" href="#">TUR</a>
          </div>

          <div class="footer__menu-apps">
            <RoundedButton color="#FFFFFF">
              <img src="@/assets/img/telegram.svg" alt="telegram" />
            </RoundedButton>
            <RoundedButton color="#20B038">
              <img src="@/assets/img/whatsApp.svg" alt="whatsApp" />
            </RoundedButton>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import RoundedButton from '@/components/buttons/RoundedButton.vue'
</script>

<style scoped lang="scss">
.footer {
  background-color: #ebebeb;

  @media (max-width: $breakpoint-sm-max) {
    background-color: transparent;
  }

  &__container {
    width: 1200px;
    margin: 0 auto;
    padding: 28px 0 27px 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: $breakpoint-md-max) {
      max-width: 672px;
      padding: 32px 0;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: auto auto;
      align-items: end;
      gap: 26px 31px;
    }

    @media (max-width: $breakpoint-sm-max) {
      max-width: 335px;
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;
    }
  }

  &__menu {
    display: flex;
    gap: 65px;
    align-items: center;

    @media (max-width: $breakpoint-md-max) {
      display: contents;
    }

    @media (max-width: $breakpoint-sm-max) {
      flex-direction: column;
      gap: 20px;
      align-items: start;
    }
  }

  &__menu-wrapper {
    display: flex;
    gap: 65px;
    align-items: center;

    @media (max-width: 1440px) {
      grid-column: 1/4;
      grid-row: 2;
      gap: 64px;
    }

    @media (max-width: $breakpoint-sm-max) {
      flex-direction: column;
      gap: 20px;
      align-items: start;
    }
  }

  &__menu-mail,
  &__menu-lang,
  &__menu-apps {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 1440px) {
      justify-content: flex-start;
    }
  }

  &__menu-policy {
    white-space: nowrap;
    @media (max-width: $breakpoint-md-max) {
      grid-column: 2 / 3;
      grid-row: 1;
    }

    &__menu-mail {
      @media (max-width: $breakpoint-md-max) {
        order: 2;
      }
    }

    &__menu-lang {
      @media (max-width: $breakpoint-md-max) {
        order: 1;
      }
    }

    &__menu-apps {
      @media (max-width: $breakpoint-sm-max) {
        order: 2;
      }
    }

    &__menu-icon {
      width: 24px;
      height: 24px;
    }
  }

  &__menu__logo {
    @media (max-width: $breakpoint-md-max) {
      grid-column: 1 / 2;
      grid-row: 1;
    }
  }
}
</style>
