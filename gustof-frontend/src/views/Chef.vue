
<template v-slot:items="props">
<div id="app">
  <v-app id="inspire">

    <v-toolbar app fixed clipped-left>
      <img src="../assets/gustof.png">
      <v-toolbar-title></v-toolbar-title>
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
          label="fecha actual"
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
    <div id="appTareas">
      <input type="text" placeholder="integrar tarea" v-model="txtTarea">
      <button v-on:click="agregarTarea">agregar tarea</button>
  <ul v-for=" tarea in listaTareas">
    <li>
      <input type="checkbox"  name="" id="" v-model="tarea.checked">
      <label>{{tarea.texto}}</label>
      <button v-on:click="EliminarTarea(tarea)">eliminar</button>
    </li>
  </ul>
</div>
  </v-app>
</div>
    </template>


<script>
export default {
   el:"#appTareas",
    data:{
      txtTareas:"...",
      listaTareas:[]
    },
methods: {
  agregarTarea:function(){
    var tarea=this.txtTareas.trim();
    if(tarea){
      this.listaTareas.push({
        texto:tarea,
        checked:false
      });
    }
    this.txtTareas="";
    alert("tarea agregada");
    console.log(this.listaTareas);
  },
  EliminarTarea:function(){
    var index= this.listaTareas.indexof(tarea);
    this.listaTareas.splice(index,1);
  }
},
}
</script>
   



    <style scoped>
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
       margin: 45px 150px 0px 150px ;
}

  .v-toolbar{
     background-color:black;
  }
  img{
    width:150px;
    
  }
   </style>
