<template>
<div id="app">
  <v-app id="inspire" dark>
   
    <v-toolbar app fixed clipped-left>
    <v-toolbar-title style="margin:auto">CHEF</v-toolbar-title>
    </v-toolbar>                                                                         
    <v-flex shrink>
    <v-tooltip right>
        <span>Source</span>
        </v-tooltip>
         </v-flex>
    
      <v-card>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-tile :key="index" avatar ripple @click="">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-btn color="success">LISTO</v-btn>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
            </template>
          </v-list>
        </v-card>
    <v-footer app fixed>
      <span>&copy; 2019</span>
    </v-footer>
    
  </v-app>
</div>
</template>
<script>
export default {
  el: '#app',
  data () {
    return {
      items: [
        { action: 'pedido 1', headline: 'normal', title: 'HAMBURGUESAN ARTESANAL' },
        { action: 'pedido 2', headline: '-LECHUGA', headline: '-LECHUGA', title: 'SANDWUICHES MELOSO', headline: "PAPA FRANCESA",headline: "PAPA FRANCESA" },
        { action: 'pedido 3', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
        { action: 'pedido 4', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
        { action: 'pedido 5', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
      ]
    }
  }
   
}
</script>
 

<style>
.v-list__tile__sub-title{
    font-size: 20px;
    color: brown;
}
.v-list__tile__title{
    font-size: 25px;
}
</style>
