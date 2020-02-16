<template>
  <!-- Галерея (Главная) -->
  <section class="body-gallery-index">

    <h2 class="body-gallery-title"><i class="fas fa-file-download"></i> Главная <span>({{images.length}})</span></h2>

    <div class="body-gallery-grid">

      <!-- Галерея (Главная) + Добавить фото -->
      <div @click="loadImage" class="gallery-grid-add-element">
        <div>
          <i class="fas fa-plus"></i>
        </div>
        <p>Загрузить<br>изображение</p>
      </div>
      <!-- Конец - Галерея (Главная) + Добавить фото -->

      <a v-for="(image, index) in images" :key="'galery-image'+index" data-fancybox="gallery" :href="image.src">
        <div  class="gallery-grid-index-element" :style="`background-image: url('${image.src}')`"></div>
      </a>

    </div>



  </section>
  <!-- Конец - Галерея (Главная) -->
</template>
<script>
  export default {
    data(){
      return {
        images: []
      }
    },

    mounted() {

      this.images = localStorage.getItem('images');
      if(!this.images ) this.images  = [];
      else {
        this.images  = JSON.parse(this.images);
      }

      this.loadImage()
    },

    methods: {
      async loadImage(){
          let response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY');
          let answer = await response.json();

          this.images.push({
            title: answer.data.title,
            date: answer.data.import_datetime,
            src: answer.data.image_url,
          });

          localStorage.setItem('images', JSON.stringify(this.images));

      }
    }
  }
</script>

