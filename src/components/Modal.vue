<template>
  <transition name="fade">
    <div v-if="active" class="header-fixed-task">
    <div class="header-fixed-task-modal">
      <div class="header-fixed-task-modal-body">

        <div class="header-modal">
          <p>Задание #3</p>
          <i @click="toggle" class="fas fa-times"></i>
        </div>

        <div class="body-modal">

          <div class="body-modal-left-col">
            <p class="body-modal-title">Описание задачи:</p>

            <p>Необходимо создать React приложение с динамической загрузкой картинок и роутингом</p>
            <p>API получения картинок:</p>
            <a href="https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY">https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY</a>
            <p>Макета для задачи нет, внешнее оформление на Ваше усмотрение</p>
            <p class="body-modal-title">Основное:</p>
            <p>Приложение будет состоять из 2 страниц</p>
            <ul>
              <li>Главная — вывести изображение и кнопку «Загрузить», при нажатии на которую будет загружаться новое приложение. При первой загрузке приложения — изображение должно загрузиться без нажатия на кнопку;</li>
              <li>История - выводить все загруженные картинки с главной страницы (картинка, время загрузки и название картинки). Добавить пагинацию и возможность удалить ранее загруженную картинку</li>
            </ul>

            <p class="body-modal-title">Стек:</p>
            <ul>
              <li>React</li>
              <li>React-router</li>
              <li>Redux </li>
              <li>Redux-Saga</li>
              <li>Reselect</li>
            </ul>

            <p class="body-modal-title">Цель:</p>
            <ul>
              <li>Полученные данные хранить в Redux</li>
              <li>Получать и обновлять данные для компонентов необходимо через Reselect</li>
              <li>Для всех асинхронных запросов использовать Redux-Saga</li>
              <li>Результат выложите на github</li>
            </ul>
          </div>

          <div class="body-modal-right-col">
            <p class="body-modal-title">Макет:</p>

            <a href="https://www.figma.com/file/mWRGzESWon9YAwxGbpFBKS/Test?node-id=0%3A1">Ссылка (Figma)</a>

            <p class="body-modal-title">Стек:</p>

            <ul>
              <li>Vue</li>
              <li>Vue-router</li>
              <li>Vuex (хранит состояния приложения)</li>
              <li>Axios (для http запросов)</li>
            </ul>

            <p class="body-modal-title">Ссылка на GitHub:</p>

            <a href="https://www.figma.com/file/mWRGzESWon9YAwxGbpFBKS/Test?node-id=0%3A1">Перейти</a>


          </div>

        </div>

      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  data(){
    return {
      active: false
    }
  },

  methods: {
    toggle(){
      return this.active = !this.active
    }
  }
}
</script>