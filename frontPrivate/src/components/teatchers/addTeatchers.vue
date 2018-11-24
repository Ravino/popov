<template lang = "pug">

div(role = "form")

  form(ref = "teatcherData", method = "post", enctype = "multipart/form-data")

    div.photo Добавьте фотографию преподавателя
      br
      input(type = "file", name = "photo", placeholder = "Добавьте фотографию преподавателя", value = "")


    div.info Добавьте описание преподавателя
      br
      input(type = "text", name = "text", placeholder = "Добавьте описание преподавателя", v-model = "textTeatcher")

    div.save
      a(href = "#", v-on:click = "save") Добавить

</template>



<script>

export default {

  "name": "addTeatchers",

  "data": function () {
    return {
      "textTeatcher": "",
    };
  },

  "methods": {
    "save": function () {
      const formData = new FormData (this. $refs. teatcherData);

      this. $http. post ("/api/internal/post/teatchers/add", formData). then ( res => {

        this. $bus. $emit ("add-teatcher", res. data);

        this. textTeatcher = "";

      });
    },
  },
};
</script>
