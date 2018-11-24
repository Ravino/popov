<template lang = "pug">

div(role = "navigation")

  ul
    li(v-for = "(item, index) in list")
      router-link(:to = "item. href") {{ item. name }}


</template>


<script>

export default {
  "name": "menu",
  "data": function () {
    return {
      "list": [
        { "href": "/teatchers", "name": "Преподаватели", },
        { "href": "/main", "name": "Главная", },
        { "href": "/gallery", "name": "Галерея", },
        { "href": "/coins", "name": "the Coin's", },
        { "href": "/projects", "name": "Проекты", },
        { "href": "/address", "name": "Как добраться", },
        { "href": "/achievements", "name": "Успехи", },
      ],
    };
  },
};
</script>



<style scoped>

li {
  list-style-type: none;
}
</style>
