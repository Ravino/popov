<template lang = "pug">

div.map(id = "map")

</template>


<script>

export default {
  "name": "map",

  "mounted": function () {
    this. $twoGis. map ("map", {
      "center": [43.119241, 131.890937],
      "zoom": 13,
    });
  },
};
</script>



<style scoped>
.map {
  min-width: 100%;
  min-height: 100%;
}
</style>
