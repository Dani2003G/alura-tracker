<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempo-em-segundo="tempoEmSegundo"/>
    <button class="button" @click="iniciar" :disabled="cronometroRodando">
          <span class="icon">
            <i class="fa fa-play"/>
          </span>
      <span>Play</span>
    </button>

    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
          <span class="icon">
            <i class="fa fa-stop"/>
          </span>
      <span>Stop</span>
    </button>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import Cronometro from "@/components/Cronometro.vue";

export default defineComponent({
  name: 'TemporizadorTarefa',
  components: {Cronometro},
  data: () => ({
    tempoEmSegundo: 0,
    cronometro: 0,
    cronometroRodando: false
  }),
  methods: {
    iniciar() {
      // Iniciando a contagem
      // 1s = 1000ms
      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundo += 1;
      }, 1000);
    },
    finalizar() {
      this.cronometroRodando = false
      clearInterval(this.cronometro);
    }
  },
});

</script>