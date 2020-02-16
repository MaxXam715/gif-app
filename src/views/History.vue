<template>
  <!-- Галерея (Главная) -->
  <section class="body-gallery-history">

    <h2 class="body-gallery-title"><i class="fas fa-history"></i> История <span>({{images.length}})</span></h2>

    <div class="body-gallery-grid">

      <!-- Изображение в истории -->
      <div class="gallery-grid-history-element" v-for="(image, index) in images"
           :key="'galery-image'+index"
           v-if="index >= ((page-1)*itemToPage) && index <= (((page-1)*itemToPage) + itemToPage)"
      >

        <!-- Фото -->
        <a data-fancybox="gallery" :href="image.src">
          <div  class="history-element-foto" :style="`background-image: url('${image.src}')`"></div>
        </a>

        <!-- Инфо -->
        <div class="history-element-info">
          <p class="history-element-name-foto">{{image.title}}</p>
          <div class="history-element-date-remove">
            <p><i class="far fa-calendar-alt"></i> {{image.date}}</p>
            <div @click="deleteImage(index)"><i class="far fa-trash-alt"></i></div>
          </div>
        </div>

      </div>
      <!-- Конец - Изображение в истории -->

    </div>

   <!-- <router-link :to="{ name: 'realty', params: {id: id} }"> -->


    <!-- Пагинация -->
    <div class="body-galler-pagination">
      <div class="galler-pagination-box">
        <router-link v-if="page-3>0" tag="div" :to="{ name: 'history', params: {page: 1} }" class="galler-pagination-item">1</router-link>
        <router-link v-if="page-2>0" tag="div" :to="{ name: 'history', params: {page: page-2} }" class="galler-pagination-item">{{page-2}}</router-link>
        <router-link v-if="page-1>0" tag="div" :to="{ name: 'history', params: {page: page-1} }" class="galler-pagination-item">{{page-1}}</router-link>
        <div class="galler-pagination-item active">{{ page }}</div>
        <router-link v-if="page+1<=totalPages" tag="div" :to="{ name: 'history', params: {page: page+1} }" class="galler-pagination-item">{{page+1}}</router-link>
        <router-link v-if="page+2<=totalPages" tag="div" :to="{ name: 'history', params: {page: page+2} }" class="galler-pagination-item">{{page+2}}</router-link>
        <router-link v-if="page+3<=totalPages" tag="div" :to="{ name: 'history', params: {page: page+3} }" class="galler-pagination-item">{{totalPages}}</router-link>

      </div>
    </div>
    <!-- Конец - Пагинация -->

  </section>
  <!-- Конец - Галерея (Главная) -->
</template>

<script>
export default {
  data(){
    return {
      images: [],
      imagesToShow: [],
      itemToPage: 5,
      page: 1,
      totalItems: 0,
      totalPages: 0
    }
  },

  watch: {
    $route(to, from) {
      this.page = to.params.page;
      this.totalItems = this.images.length;
      this.totalPages = Math.ceil(this.totalItems/this.itemToPage);
    }
  },

  mounted() {
    this.images = localStorage.getItem('images');
    if(!this.images ) this.images  = [];
    else {
      this.images  = JSON.parse(this.images );
    }

    this.totalItems = this.images.length;
    this.totalPages = Math.ceil(this.totalItems/this.itemToPage);


  },

  methods: {
    deleteImage(index){
      this.images.splice(index, 1);
      localStorage.setItem('images', JSON.stringify(this.images));
    }
  }


}
</script>
