<template v-slot:items="props">
<div id="app">
  <v-app id="inspire">

    <v-toolbar app fixed clipped-left>
      <img src="../assets/gustof.png" style="margin:0 0 0 70px;">
      <v-toolbar-title  style="margin:0px 0px 0px 800px; background-color:black;"></v-toolbar-title>
    </v-toolbar>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          label="Birthday date"
          prepend-icon="event"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        v-model="date"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
    
    <footer class="pedidos" style="
    position: absolute;
    top: 120px;
    left: 0px;">
      <v-btn class="pepe" color="error">HAMBURGUESA ARTESANAL</v-btn>
      <v-btn class="pepe" color="warning">Warning</v-btn>
      <v-btn class="pepe" color="info">Info</v-btn>
      <v-btn class="pepe" color="error">Error</v-btn>
      <v-btn class="pepe" color="warning">Warning</v-btn>
      <v-btn class="pepe" color="info">Info</v-btn>
      <v-btn class="pepe" color="error">Error</v-btn>
      <v-btn class="pepe" color="warning">Warning</v-btn>
      <v-btn class="pepe" color="info">Info</v-btn>
      <v-btn class="pepe" color="error">Error</v-btn>
      <v-btn class="pepe" color="warning">Warning</v-btn>
      <v-btn class="pepe" color="info">Info</v-btn>
      <v-btn class="pepe" color="error">Error</v-btn>
      <v-btn class="pepe" color="warning">Warning</v-btn>
      
    </footer>

      
  
    <div class="botones">
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
    <v-btn class="botonesverdes" color="success">listo</v-btn>
<<<<<<< HEAD
  
  
=======
    <v-btn class="botonesverdes" color="success">listo</v-btn>

>>>>>>> d621684c0e2338f7224eeac57ce9140f7dfc2e08
</div>

  </v-app>
</div>
    </template>

<script>

</script>

    <style>
    .v-toolbar__content > *:last-child, .v-toolbar__extension > *:last-child {
    margin-right: 0;
    color:white;
}
.v-toolbar__content, .v-toolbar__extension {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 24px;
    background-color: black;
}
div.elevation-1 {
        width: 1334px;
        margin: 0px;
        display: inline-block;

}

.botones {
    top: 120px;
    left: 1337px;
    position: absolute;
    margin: auto;
    display: inline-block;

}
.botonesverdes{
 margin: 0 0 3px 0;
 height: 45px;

}
.comida{
    position: absolute;
    left: 25px;
    top: 85px;
    margin: auto;
}
.receta{
    position: absolute;
    margin: 85px 0px 0px 700px;
}
.papa{
    position: absolute;
    margin: 85px 0px 0px 999px;
}
.pedido{
    position: absolute;
    margin: 85px 0px 0px 1250px;
}
.theme--light.v-table {
    background-color: #fff;
    margin: 59px 0 0 0px;
    color: rgba(0,0,0,0.87);
}
.pepe{
  height: 45px;
  width: 1331px;
  margin: 0 0 3px 0;
}
    </style>
