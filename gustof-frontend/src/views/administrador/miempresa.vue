<template>
  <v-layout>
    <v-flex class="carta">
      <v-card-text class="transparent text-xs-center">
        <h1 class="color">
          <strong>MI EMPRESA</strong>
        </h1>
        <br>
      </v-card-text>
      <br>
      <material-card class="v-card-profile">
        <v-avatar class="text--center mx-auto d-block">
          <img class="imagenq" :src="imgUrl">
        </v-avatar>
        <v-card-text class="margen text-xs-center">
          <v-form name="formulario" method="post" enctype="form-data">
            <v-btn
              @click="pickFile"
              v-model="imageName"
              prepend-icon="attach_file"
            >Selecciona tu foto de perfil</v-btn>
            <input
              type="file"
              style="display: none"
              ref="image"
              accept="image/*"
              @change="onFilePicked"
            >
          </v-form>
        </v-card-text>
      </material-card>
    </v-flex>
    <v-flex>
      <v-card flat>
        <v-snackbar absolute top right color="success">
          <span>Registration successful!</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid style=" heigth: 350px width: 620px">
            <v-layout wrap>
              <v-flex xs12 sm12>
                <v-text-field v-model="empresa" color="#4A148C" label="Nombre de la Empresa" type="text"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field v-model="nit" color="#4A148C" label="NIT" type="text"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field v-model="correo" color="#4A148C" label="Correo General" type="text"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12></v-flex>
              <v-flex xs12 sm12></v-flex>
            </v-layout>
            </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="Guardar">Guardar</v-btn>
          </v-card-actions>
        </v-form>
        <v-dialog v-model="terms" width="70%">
          <v-card>
            <v-card-title class="title">Terms</v-card-title>
            <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="#4A148C" @click="terms = false">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="conditions" width="70%">
          <v-card>
            <v-card-title class="title">Conditions</v-card-title>
            <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="#4A148C" @click="conditions = false">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import api from '@/plugins/service'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  data: () => ({
    imageName: '',
    nombre: '',
    empresa: '',
    nit: '',
    correo: ''
  }),
  methods: {
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imgUrl = fr.result
        })
      } else {
        this.imageName = ''
        this.imageUrl = ''
      }
    },
    async Aceptar () {
      const res = await api.post('/company', {
        companyNew: {
          nombre: this.nombre
        }
      })
      console.log(res.data)
    }
  }
}
</script>

<style scoped lang="stylus">
.imagenq {
  width: 200px !important;
  height: 200px !important;
}

.margen {
  margin: 50px 0px;
}
</style>>
<style scoped>
.headline {
  vertical-align: top;
  margin-top: -100px;
}
.layout {
  vertical-align: top;
}
.color {
  color: black;
  size: 25px;
  margin-top: -11px;
}
.v-avatar img,
.v-avatar .v-icon,
.v-avatar .v-image {
  border-radius: 50%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: inherit;
  width: inherit;
}
.flex.carta[data-v-853b481e] {
  height: 329px;
  background-color: azure;
  border: solid #000 10px
}
.flex,
.child-flex > * {
  background-color: blanchedalmond;
}
.v-avatar img[data-v-853b481e],
.v-avatar .v-icon[data-v-853b481e],
.v-avatar .v-image[data-v-853b481e] {
  background-color: #B0BEC5;
  margin: auto;
  margin-top: -57px;
  margin-left: -74px;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: #B0BEC5;
  margin-top: 45px;
  vertical-align: top;
}
.v-btn__content {
  color: white;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip){
  height: 329px;
  width: 627px;
  background-color: azure;
}
.container.fluid{
  height: 330px;
  width: 600px;
  border: solid #000 10px
}
.flex[data-v-853b481e], .child-flex > *[data-v-853b481e]{
  background-color: azure;
}
.container.grid-list-xl .layout:only-child{
  width: 575px;
  height: 100px;
}
.container.grid-list-xl .layout .flex{
  padding: 9px;
}
</style>
