<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-card-text>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12 sm3>
                <h2>CLIENTE</h2>
                <label>DANIEL FELIPE RIVERA RANGEL</label>
              </v-flex>

              <v-flex xs6 sm3>
                <h2>NIT</h2>
                <label label="Right" value="right">87362746738</label>
              </v-flex>

              <v-flex xs6 sm3>
                <h2>DIRECCION</h2>
                <label label="Top" value="top">CLL 21B #6-20</label>
              </v-flex>

              <v-flex xs6 sm3>
                <h2>MESA</h2>
                <label label="Bottom" value="bottom">8</label>
              </v-flex>

              <v-flex xs12 sm3>
                <h2>TEL</h2>
                <label label="Multi-line (mobile)" value="multi-line">3232104794</label>
              </v-flex>

              <v-flex xs12 sm3>
                <h2></h2>
                <label label="Vertical (mobile)" value="vertical"></label>
              </v-flex>

              <v-flex xs12 sm4 offset-sm4>
                <v-text-field v-model="text" label="Text" type="text"></v-text-field>
              </v-flex>

              <v-flex xs12 sm4>
                <v-text-field v-model.number="timeout" label="Timeout" type="number"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn block color="green" dark @click="snackbar = true">ACTUALIZAR</v-btn>
        </v-card-text>

        <v-snackbar
          v-model="snackbar"
          :bottom="y === 'bottom'"
          :left="x === 'left'"
          :multi-line="mode === 'multi-line'"
          :right="x === 'right'"
          :timeout="timeout"
          :top="y === 'top'"
          :vertical="mode === 'vertical'"
        >
          {{ text }}
          <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-card>
    </v-app>
  </div>
</template>
<script>
</script>
