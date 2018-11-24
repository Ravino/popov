<template lang = "pug">

div
  div.gallery
    a(href = "#", v-for = "(item, index) in listGallery", :tabindex = "index + 1")
      img(:src = "item. photourl", :alt = "item. alt", :title = "item. title")


  div.numberPage(v-if = "numberPage > 1")
    a(href = "#", v-on:click = "transition ($event, count ())", v-for = "item in numberPage") {{ item }}


</template>



<script>

export default {

  "name": "listGallery",

  "data": function () {
    return {
      "listGallerys": [],
      "listGallery": [],
      "numberPage": 0,
      "numberCount": 0,
      "defaultValue": "Загрузка данных",
    };
  },


  "mounted": function () {
    this. $http. get ("/api/internal/get/gallery"). then ( res => {
      this. listGallerys = res. data. reverse ();

      this. numberPage = Math. ceil (this. listGallerys. length / 12);

      this. listGallery = this. listGallerys. slice (0, 12);

    });
  },

  "methods": {
    "count": function () {
      this. numberCount = this. numberCount + 12;
      return this. numberCount - 12;
    },

    "transition": function (event, itemSlice) {
      event. stopPropagation ();
      event. preventDefault ();


      this. listGallery = this. listGallerys. slice (itemSlice, 12);
    },
  },
};
</script>



<style scoped>

.gallery {
    margin: 100px auto 0;
    width: 800px;
}
.gallery a {
    display: inline-block;
    height: 135px;
    position: relative;
    width: 180px;

    /* Отключаем выделение */
    -moz-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
.gallery a img {
    border: 8px solid #fff;
    border-bottom: 20px solid #fff;
    cursor: pointer;
    display: block;
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 1;

    /* Свойства для изменения рамки */
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;

    /* Правила перехода */
    -webkit-transition: all 1.0s ease;
    -moz-transition: all 1.0s ease;
    -o-transition: all 1.0s ease;
    transition: all 1.0s ease;

    /* Тени */
    -moz-box-shadow: 2px 2px 4px #444;
    -webkit-box-shadow: 2px 2px 4px #444;
    -o-box-shadow: 2px 2px 4px #444;
    box-shadow: 2px 2px 4px #444;
}

/* Вращение  */
.gallery a:nth-child(1) img {
    -moz-transform: rotate(-25deg);
    -webkit-transform: rotate(-25deg);
    transform: rotate(-25deg);
}
.gallery a:nth-child(2) img {
    -moz-transform: rotate(-20deg);
    -webkit-transform: rotate(-20deg);
    transform: rotate(-20deg);
}
.gallery a:nth-child(3) img {
    -moz-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
}
.gallery a:nth-child(4) img {
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
}
.gallery a:nth-child(5) img {
    -moz-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
}
.gallery a:nth-child(6) img {
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
.gallery a:nth-child(7) img {
    -moz-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
}
.gallery a:nth-child(8) img {
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
}
.gallery a:nth-child(9) img {
    -moz-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
}
.gallery a:nth-child(10) img {
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
}
.gallery a:nth-child(11) img {
    -moz-transform: rotate(25deg);
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
}
.gallery a:nth-child(12) img {
    -moz-transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
}

.gallery a:focus img {
    cursor: default;
    height: 250%;
    left: -150px;
    top: -100px;
    position: absolute;
    width: 250%;
    z-index: 25;

    /* Правила перехода */
    -webkit-transition: all 1.0s ease;
    -moz-transition: all 1.0s ease;
    -o-transition: all 1.0s ease;
    transition: all 1.0s ease;

    /* Правила перехода */
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
}
</style>
