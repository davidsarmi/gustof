<template>
  <div>
     <v-avatar
        color="red red--after"
      >
        <v-icon dark>notifications</v-icon>
      </v-avatar>

    Bodega
   <v-container fluid class="text-xs-center">
      <v-layout
        justify-space-between
        row
        wrap
      >

        <v-flex xs12 class="mt-5">
          <v-badge
            v-model="show"
            color="cyan"
            left
          >
            <template v-slot:badge>
              <span>6</span>
            </template>
            <v-icon @click="prueba"
              large
              color="grey lighten-1"
            >shopping_cart</v-icon>
          </v-badge>

          <v-badge
            v-model="show"
            color="purple"
            left
          >
            <template v-slot:badge>
              <span>6</span>
            </template>
            <v-icon @click="prueba2"
            large
            color="grey"
            >mail</v-icon>
          </v-badge>

        </v-flex>
      </v-layout>
    </v-container>
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
    prueba () {

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
.v-badge{
  position: relative;
  top: -205px;
  left: 480px;
}
</style>
