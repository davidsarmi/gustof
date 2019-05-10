<template>
  <div>
      <v-badge class="pa"
          v-model="show"
            color="purple"
            left>
          <template v-slot:badge>
              <span>!</span>
          </template>
          <v-icon @click="prueba"
              large
              color="grey lighten-1">
              notifications
          </v-icon>
      </v-badge>

      <v-badge class="pp"
            v-model="show"
            color="purple"
            left>
          <template v-slot:badge>
              <span>!</span>
          </template>
          <v-icon @click="prueba2"
            large 
            color="grey lighten-1">
            notifications
          </v-icon>
      </v-badge>

     
  </div>

</template>
<script>
export default {

  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  props: {
    source: String
  },
  
  methods: {
    prueba() {

  
    },
    prueba2 () {

    }
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
.pa{
  position: absolute;
  top:19px;
  right: 60px;
}
.pp{
  position: absolute;
  top:19px;
  right:10px;
}
</style>
