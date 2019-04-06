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

  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 1 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 2 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 3 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 4 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 5 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 6 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 7 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 8 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 9 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 10 LISTO</v-btn></pre>
  <pre href=""> 1 HAMBURGUESA ARTESANAL    PAPA FRANCESA                -QUESO +JAMON <br> 4 PERRO CASERITO         SIN PAPA<br> 1 PATACON MEXICANO                                     -QUESO  <v-btn class="botonesverdes" color="success">PEDIDO 11 LISTO</v-btn></pre>


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

    <v-btn class="botonesverdes" color="success">listo</v-btn>

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

.botonesverdes{

margin: -28px 0px 0 950px;

}

.theme--light.v-table {
    background-color: #fff;
    margin: 59px 0 0 0px;
    color: rgba(0,0,0,0.87);
}

 pre {
    color: rgb(255, 255, 255);
    font-family: 'Courier';
    font-size: 18px;
    text-align: justify;
    text-decoration: none;
    display: inline-block;
    background-color: rgb(0, 0, 0);
    padding: 15px 15px;
    display: inline-block;
       margin: 10px 150px 0px 150px ;
}
   </style>
