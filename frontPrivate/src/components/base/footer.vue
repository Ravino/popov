<template lang = "pug">

div(role = "contentinfo")
  a(v-show = "renameShow", href = "#", v-on:click = "rename")
    p {{ textFooter || defaultValue }}



  div(v-show = "textareaShow")
    input(type = "text", name = "textFooter", :placeholder = "textFooter", value = "textFooter", v-model = "textFooter", autofocus)
    br
    a(href = "#", v-on:click = "saveRename") Сохранить

</template>


<script>

export default {
  "name": "footer",

  "data": function () {
    return {
      "textFooter": "",
      "defaultValue": "Загрузка данных",
      "renameShow": true,
      "textareaShow": false,
    };
  },

  "mounted": function () {
    this. $http. get ("/api/internal/get/footer"). then ( res => {
      this. textFooter = res. data;
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


      this. $http. post ("/api/internal/post/footer", { "textFooter": this. textFooter });
    },
  },
};

</script>




