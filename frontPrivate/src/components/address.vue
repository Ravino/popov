<template lang = "pug">
div.page

  div.row
    div.left


    div.center
      headerPage


    div.right



  div.row
    div.left
      menuPage


    div.center
      mapPage


    div.right



  div.row
    div.left


    div.center
      footerPage


    div.right




</template>


<script>
export default {

  "name": "main",

  "components": {
    "headerPage": require ("./base/header.vue"). default,
    "menuPage": require ("./base/menu.vue"). default,
    "mapPage": require ("./address/map.vue"). default,
    "footerPage": require ("./base/footer.vue"). default,
  },

};
</script>
