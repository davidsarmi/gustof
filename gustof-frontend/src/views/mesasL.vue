<template>
  <div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Mesas</v-toolbar-title>
    </v-toolbar>
    <h1 style="margin:auto; color:red;">MESAS</h1>
    <!-- container de izquierda -->
    <v-container class="container_izquierda">

       <div id="app">
        <v-app id="inspire">
          <v-container fluid>
            <v-layout justify-space-around>
              <v-flex xs5>
                <div class="title mb-1"></div>
                <v-layout column>
                  <div class="subheading">Mesa 1</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                  <div class="subheading pt-3">Mesa 2</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="2"></v-img>
                  <div class="subheading pt-3">Mesa 3</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                  <div class="subheading pt-3">Mesa 4</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                  <div class="subheading pt-3">Mesa 5</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                </v-layout>
              </v-flex>

              <v-flex xs5>
                <div class="title mb-1"></div>
                <v-layout column>
                  <div class="subheading">Mesa 6</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                  <div class="subheading pt-3">Mesa 7</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="2"></v-img>
                  <div class="subheading pt-3">Mesa 8</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                  <div class="subheading pt-3">Mesa 9</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                  <div class="subheading pt-3">Mesa 10</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                </v-layout>
              </v-flex>

              <v-flex xs5>
                <div class="title mb-1"></div>
                <v-layout column>
                  <div class="subheading">Mesa 11</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                  <div class="subheading pt-3">Mesa 12</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="2"></v-img>
                  <div class="subheading pt-3">Mesa 13</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                  <div class="subheading pt-3">Mesa 14</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                  <div class="subheading pt-3">Mesa 15</div>
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                </v-layout>
              </v-flex>

            </v-layout>
          </v-container>
        </v-app>
      </div>
    </v-container>

    <v-footer color="indigo" app inset>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</div>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'login-layout')
  }
}
</script>
<style>
.container_izquierda {
    width: 500px;
    margin: 0px 0px 0px -500px;
    display: inline-block;
}
</style>
