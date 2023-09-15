<template>
  <button class="button" @click="clicado" :disabled="desabilitado">
          <span class="icon">
            <i :class="icone"/>
          </span>
    <span>{{ label }}</span>
  </button>
</template>
<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BotaoTemporizador',
  emits: ['clicado'],
  props: {
    desabilitado: {type: Boolean},
    icone: {type: String, require: true},
    label: {type: String, require: true},
  },
  methods: {
    clicado() {
      this.$emit('clicado')
    }
  }
})

</script>