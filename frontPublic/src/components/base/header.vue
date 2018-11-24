<template lang = "pug">

div(role = "banner")
  h1 {{ headerText || defaultValue }}

</template>


<script>

export default {
  "name": "header",

  "data": function () {
    return {
      "headerText": "",
      "defaultValue": "Загрузка данных",
    };
  },

  "mounted": function () {
    this. $http. get ("/api/internal/get/header"). then ( res => {
      this. headerText = res. data;
    });
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
