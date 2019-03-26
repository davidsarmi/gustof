<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <img class="chef" src="../assets/chef.verdadero.png">
            <v-card class="elevation-12">
              <v-toolbar dark color="black">
                <v-toolbar-title text-center><img class="gustof" src="../assets/gustof.png"></v-toolbar-title>
                <v-spacer></v-spacer>
            
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Nombre" type="text"></v-text-field>
                  <v-text-field  prepend-icon="lock" name="password" label="Contraseña" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" >Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>
<script>
export default {
  data: function () {
    return ({
      drawer: null
    })
  },

  props: {
    source: String
  }

}
</script>
<style>
  .gustof {
    height: 150px;
    margin: 129px 0px 0px 33px;
 }
 .v-toolbar{
    height: 180px;
}
.chef {
    border-style: none;
    height: 180px;
    margin: 0 0 0 171px;
}
</style>
