<template lang = "pug">

div(v-if = "listTeatchers [0]", role = "main")

  div.teatcher(v-for = "(item, index) in listTeatchers")
    div.photo
      img(:src = "item. photourl")
      br
      a(href = "#", v-on:click = "del ($event, index)") Удалить


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

  "created": function () {
    this. $bus. $on ('add-teatcher', (data) => {
      this. listTeatchers. push (data);
    });
  },

  "mounted": function () {
    this. $http. get ("/api/internal/get/teatchers"). then ( res => {
      this. listTeatchers = res. data;
    });
  },

  "methods": {
    "del": function (event, item) {
      event. stopPropagation ();
      event. preventDefault ();

      this. $http. post ("/api/internal/post/teatchers/del", item);

      this. listTeatchers. splice (item, 1);

    },
  },
};
</script>
