<template>
  <v-layout>
    <v-flex class="carta">
        <v-card-text  class="transparent text-xs-center">
          <h1 class="color"><strong>MI EMPRESA</strong></h1><br>
        </v-card-text>
          <br>
        <material-card class="v-card-profile">
          <v-avatar class=" text--center mx-auto d-block" >
            <img class="imagenq" :src="imgUrl" >
          </v-avatar>
          <v-card-text class="margen text-xs-center">
              <v-form name="formulario" method="post" enctype="form-data">
                <v-btn  @click='pickFile' v-model='imageName' prepend-icon='attach_file'>Selecciona tu foto de perfil</v-btn>
                  <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
              </v-form>
          </v-card-text>
        </material-card>
    </v-flex>
    <v-flex>
      <v-form>
        <v-container>
          <v-layout row wrap>

            <v-flex xs12 sm6>
              <v-text-field
                v-model="first"
                label="First Name"
                outline
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field
                v-model="last"
                label="Last Name"
                outline
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    imageName: '',
    first: 'John',
    last: 'Doe'

  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
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
    }
  }
}

</script>

<style lang="stylus">
  .imagenq{
  width 200px !important
  height 200px !important
}
.margen{
  margin 50px 0px
}
</style>>
<style scoped>
.headline{
  vertical-align: top;
  margin-top: -100px;
}
.layout{
  vertical-align: top;
}
.color{
  color: black;
  size: 25px;
}
.v-avatar img, .v-avatar .v-icon, .v-avatar .v-image {
    border-radius: 50%;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: inherit;
    width: inherit;
}
.flex.carta[data-v-853b481e] {
  background-color: red;
}
.flex, .child-flex > * {
  background-color: blanchedalmond;
}
.v-avatar img[data-v-853b481e], .v-avatar .v-icon[data-v-853b481e], .v-avatar .v-image[data-v-853b481e]{
  background-color: black;
  margin: auto;
  margin-top: -57px;
  margin-left: -74px;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat){
  background-color: black;
  margin-top: 10px;
}
.v-btn__content {
  color: white;
}
</style>
