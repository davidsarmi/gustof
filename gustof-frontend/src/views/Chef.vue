<template>
<div id="app">
  <v-app id="inspire" dark>
   
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CHEF</v-toolbar-title>
    </v-toolbar>
   
      
        
          <v-flex shrink>
            <v-tooltip right>
              
               
           
        
              
              <span>Source</span>
            </v-tooltip>
          </v-flex>
    
      
    
    <v-footer app fixed>
      <span>&copy; 2019</span>
    </v-footer>
    <div>
      <v-btn color="info">Info</v-btn>
      <v-btn color="info">Info</v-btn>
      <v-btn color="info">Info</v-btn>
      <v-btn color="info">Info</v-btn>
      <v-btn color="info">Info</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>
  </v-app>
</div>
</template>

<style>

</style>
