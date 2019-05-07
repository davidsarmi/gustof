<template>
  <div>
     <v-avatar 
        color="red red--after"
      >
        <v-icon dark>notifications</v-icon>
      </v-avatar>
 
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
</style>
