<template lang = "pug">

div(role = "main")
  span {{ textCoins || defaultValue }}

</template>


<script>

export default {
  "name": "coins",

  "data": function () {
    return {
      "textCoins": "",
      "defaultValue": "Загрузка данных",
    };
  },

  "mounted": function () {
    this. $http. get ("/api/internal/get/coins"). then ( res => {
      this. textCoins = res. data;
    });
  },
};
</script>
