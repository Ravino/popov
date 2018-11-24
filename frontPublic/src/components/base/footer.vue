<template lang = "pug">

div(role = "contentinfo")
  p {{ footerText || defaultValue }}

</template>


<script>

export default {
  "name": "footer",

  "data": function () {
    return {
      "footerText": "",
      "defaultValue": "Загрузка данных",
    };
  },


  "mounted": function () {
    this. $http. get ("/api/internal/get/footer"). then ( res => {
      this. footerText = res. data;
    });
  },
};
</script>
