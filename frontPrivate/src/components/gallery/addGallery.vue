<template lang = "pug">

div(role = "form")

  form(ref = "galleryData", method = "post", enctype = "multipart/form-data")

    div.photo Добавьте фотографию в галерею
      br
      input(type = "file", name = "photo", placeholder = "Добавьте фотографию в галерею", value = "")


    div.info Добавьте описание фотографии
      br
      input(type = "text", name = "text", placeholder = "Добавьте описание фотографии", v-model = "textGallery")

    div.save
      a(href = "#", v-on:click = "save") Добавить

</template>



<script>

export default {

  "name": "addGallery",

  "data": function () {
    return {
      "textGallery": "",
    };
  },

  "methods": {
    "save": function () {
      const formData = new FormData (this. $refs. galleryData);

      this. $http. post ("/api/internal/post/gallery/add", formData). then ( res => {

        this. $bus. $emit ("add-gallery", res. data);

        this. textGallery = "";

      });
    },
  },
};
</script>
