<template>
  <div>
    Bodega
  </div>
</template>
<script>
export default {

  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  props: {
    source: String
  }
}
</script>
<style scoped>
img {
    border-style: none;
    width: 120px;
    position: absolute;
    left: 612px;
}
.v-btn{
font-size:14px;
font-weight: 500;
margin:20px 401px;

}
</style>
