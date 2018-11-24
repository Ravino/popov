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
      contentPage


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
    "contentPage": require ("./main/content.vue"). default,
    "footerPage": require ("./base/footer.vue"). default,
  },

};
</script>
