<template lang = "pug">

div(role = "main")
  a(v-show = "renameShow", href = "#", v-on:click = "rename")
    span {{ textCoins || defaultValue }}



  div(v-show = "textareaShow")
    input(type = "text", name = "textCoins", :placeholder = "textCoins", value = "textCoins", v-model = "textCoins", autofocus)
    br
    a(href = "#", v-on:click = "saveRename") Сохранить

</template>


<script>

export default {
  "name": "coins",

  "data": function () {
    return {
      "textCoins": "",
      "defaultValue": "Загрузка данных",
      "renameShow": true,
      "textareaShow": false,
    };
  },

  "mounted": function () {
    this. $http. get ("/api/internal/get/coins"). then ( res => {
      this. textCoins = res. data;
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


      this. $http. post ("/api/internal/post/coins", { "textCoins": this. textCoins });
    },
  },
};

</script>
