<template lang = "pug">

div(v-if = "listTeatchers [0]", role = "main")

  div.teatcher(v-for = "(item, index) in listTeatchers")
    div.photo
      img(:src = "item. photourl")

    div.info
      p {{ item. info }}



div(v-else, role = "main")
  p {{ defaultValue }}
</template>


<script>

export default {

  "name": "listTeatchers",

  "data": function () {
    return {
      "listTeatchers": [],
      "defaultValue": "Загрузка данных",
    };
  },


  "mounted": function () {
    this. $http. get ("/api/internal/get/teatchers"). then ( res => {
      this. listTeatchers = res. data;
    });
  },
};
</script>
