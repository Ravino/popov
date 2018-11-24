<template lang = "pug">

div(role = "main")
  h1 {{ textMain || defaultValue }}

</template>


<script>

export default {
  "name": "main",

  "data": function () {
    return {
      "textMain": "",
      "defaultValue": "Загрузка данных",
    };
  },

  "mounted": function () {
    this. $http. get ("/api/internal/get/main"). then ( res => {
      this. textMain = res. data;
    });
  },
};

</script>
