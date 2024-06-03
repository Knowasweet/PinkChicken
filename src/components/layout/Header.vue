<template>
  <header class="header">
    <a class="header__logo logo" href="#">
      <img class="logo__img logo__img_max1440" src="@/assets/img/headerLogo.svg" alt="headerLogo" />
    </a>
    <nav class="header__menu">
      <div class="header__menu-user">
        <div class="header__menu-earning">
          <RoundedButton
            class="header__menu-button header__menu-button_mobile_disabled"
            color="#EE26C2"
          >
            <img src="@/assets/img/earning.svg" alt="earning" />
          </RoundedButton>
          <div class="header__menu-text header__menu-text_mobile_small">
            5%
            <span class="header__menu-additional_text">выручки</span>
          </div>
        </div>

        <div class="header__menu-login">
          <RoundedButton
            class="header__menu-button header__menu-button_mobile_disabled"
            color="#EE26C2"
          >
            <img src="@/assets/img/profile.svg" alt="profile" />
          </RoundedButton>
          <div class="header__menu-text">Username@adaurum.ru</div>
        </div>
      </div>

      <div class="header__menu-actions">
        <RoundedButton><img src="@/assets/img/settings.svg" alt="settings" /></RoundedButton>
        <RoundedButton><img src="@/assets/img/logout.svg" alt="logout" /></RoundedButton>
      </div>
    </nav>
  </header>
</template>

<script setup>
import RoundedButton from '@/components/buttons/RoundedButton.vue'
</script>

<style scoped lang="scss">
.header {
  margin: 33px 0 34px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: $breakpoint-md-max) {
    margin: 30px 0;
  }

  @media (max-width: $breakpoint-sm-max) {
    margin: 28px 20px 20px 20px;
    flex-direction: column;
  }

  &__logo {
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  &__menu {
    display: flex;
    gap: 26px;

    @media (max-width: $breakpoint-md-max) {
      gap: 20px;
    }

    @media (max-width: $breakpoint-sm-max) {
      justify-content: space-between;
    }
  }

  &__menu-user {
    display: flex;
    gap: 26px;

    @media (max-width: $breakpoint-md-max) {
      gap: 20px;
    }

    @media (max-width: $breakpoint-sm-max) {
      flex-direction: column-reverse;
      gap: 4px;
    }
  }

  &__menu-text {
    font-size: 18px;
    font-weight: 600;

    @media (max-width: $breakpoint-md-max) {
      font-size: 16px;
    }

    @media (max-width: $breakpoint-sm-max) {
      font-size: 14px;
    }

    &_mobile_small {
      @media (max-width: $breakpoint-sm-max) {
        font-size: 12px;
        font-weight: 500;
        color: #797979;
      }
    }
  }

  &__menu-additional_text {
    display: none;

    @media (max-width: $breakpoint-sm-max) {
      display: inline;
    }
  }

  &__menu-earning {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__menu-login {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__menu-actions {
    display: flex;
    gap: 12px;
  }

  &__menu-button_mobile_disabled {
    @media (max-width: $breakpoint-sm-max) {
      display: none;
    }
  }
}
</style>
