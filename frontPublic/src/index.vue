<template lang="pug">
div
  router-view
</template>



<script>
export default {
  "name": "index",
};
</script>



<style>

a {
  color: red;
}



.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
  min-height: 100%;
  color: white;
  background: black;
}



.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100%;
}


.left , .right {
  flex-basis: 25%;
  min-width: 25%;
}


.center {
  flex-basis: 50%;
  min-width: 50%;
}
</style>
