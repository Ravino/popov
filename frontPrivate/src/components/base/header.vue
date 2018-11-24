<template lang = "pug">

div(role = "banner")
  a(v-show = "renameShow", href = "#", v-on:click = "rename")
    h1 {{ textHeader || defaultValue }}



  div(v-show = "textareaShow")
    input(type = "text", name = "textHeader", :placeholder = "textHeader", value = "textHeader", v-model = "textHeader", autofocus)
    br
    a(href = "#", v-on:click = "saveRename") Сохранить

</template>


<script>

export default {
  "name": "header",

  "data": function () {
    return {
      "textHeader": "",
      "defaultValue": "Загрузка данных",
      "renameShow": true,
      "textareaShow": false,
    };
  },

  "mounted": function () {
    this. $http. get ("/api/internal/get/header"). then ( res => {
      this. textHeader = res. data;
    });
  },


  "methods": {
    "rename": function (event) {
      event. stopPropagation ();
      event. preventDefault ();

      this. renameShow = false;
      this. textareaShow = true;
    },


    "saveRename": function (event) {
      event. stopPropagation ();
      event. preventDefault ();

      this. renameShow = true;
      this. textareaShow = false;


      this. $http. post ("/api/internal/post/header", { "textHeader": this. textHeader });
    },
  },
};

</script>



<style scoped>

div {
  font-family: sans-serif;
  font-size: 200%;
  color: red;
}
</style>
