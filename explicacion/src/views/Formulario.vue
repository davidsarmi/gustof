<template>
    <div>
        Nombre: <input type="text" v-model="input"/>
        <p>{{input}}</p>
        <button @click="sumar">Agregar</button>
        <button @click="restar">Restar</button>
        <p>{{contador}}</p>
    </div>
</template>
<script>
export default {
  name: 'formulario',
  data () {
    return {
      input: '',
      contador: 0
    }
  },
  methods: {
    sumar () {
      this.contador++
    },
    restar () {
      this.contador--
    }
  }
}
</script>
