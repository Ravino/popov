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
      listTeatchersPage


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
    "listTeatchersPage": require ("./teatchers/listTeatchers.vue"). default,
    "footerPage": require ("./base/footer.vue"). default,
  },

};
</script>
