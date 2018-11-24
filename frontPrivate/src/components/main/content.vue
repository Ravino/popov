<template lang = "pug">

div(role = "main")
  a(v-show = "renameShow", href = "#", v-on:click = "rename")
    span {{ textMain || defaultValue }}



  div(v-show = "textareaShow")
    input(type = "text", name = "textMain", :placeholder = "textMain", value = "textMain", v-model = "textMain", autofocus)
    br
    a(href = "#", v-on:click = "saveRename") Сохранить

</template>


<script>

export default {
  "name": "main",

  "data": function () {
    return {
      "textMain": "",
      "defaultValue": "Загрузка данных",
      "renameShow": true,
      "textareaShow": false,
    };
  },

  "mounted": function () {
    this. $http. get ("/api/internal/get/main"). then ( res => {
      this. textMain = res. data;
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


      this. $http. post ("/api/internal/post/main", { "textMain": this. textMain });
    },
  },
};

</script>
