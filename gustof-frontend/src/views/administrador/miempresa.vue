<template>
  <v-container grid-list-md
  class="nombre"
  >
    <div class="text-xs-center">
      <v-btn fab dark large color="purple">
        <img class="img1"src="@/assets/gustofimagen.jpg" style="">
      </v-btn>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            nombre boton
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Titulo de la carta
          </v-card-title>

          <v-card-text>
            contenido de la carta
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>
<style lang="stylus" scoped>
.nombre{
  margin-top: -300px !important
}
.img1{
  width 400px
  height 300px
}
</style>
