<template>
  <div>
<v-badge left color="orange">
      <template v-slot:badge>
        <span>!</span>
      </template>
      <v-icon
        large
        color="grey lighten-1"
      >
        mail
      </v-icon>
    </v-badge>

    <v-badge color="orange">
      <template v-slot:badge>
        <span>!</span>
      </template>
      <v-icon
        large
        color="grey"
      >
        mail
      </v-icon>
    </v-badge>
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
.v-avatar {
  position: absolute;
  top: 5px;
  right: 15px;
}
.v-badge{
  position: relative;
  top: -225px;
  left: 480px;
}
</style>
