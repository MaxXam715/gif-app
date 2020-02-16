<template>
  <div>
  <!-- Меню -->
  <nav>

    <!-- Логотип -->
    <a href="index.html" class="nav-logo_link">
      <p class="logo">ST</p>
    </a>

    <!-- Главная -->
    <router-link :to="{name:'list'}">
      <div class="link-container">
        <i class="fas fa-home"></i>
        <span>Главная</span>
      </div>
    </router-link>

    <!-- История -->
    <router-link :to="{name:'history'}">
      <div class="link-container">
        <i class="fas fa-history"></i>
        <span>История</span>
      </div>
    </router-link>
  </nav>
  <!-- Конец - Меню -->


  <!-- Контент -->
  <div class="body-container">


    <!-- Шапка -->
    <header>

      <a href="/">
        <p class="back-index"><i class="fas fa-long-arrow-alt-left"></i> Вернуться к заданиям</p>
      </a>

      <div class="body-header-task">
        <p @click="$refs.modal.toggle()">Задание #3 <span>Подробнее <i class="far fa-question-circle"></i></span></p>
      </div>

    </header>
    <!-- Конец - Шапка -->


    <router-view></router-view>

    <modal ref="modal"></modal>
  </div>
  <!-- Конец - Контент -->
  </div>
</template>

<script>
  import Modal from "./components/Modal";
  export default {
    components: {modal:Modal}
  }
</script>