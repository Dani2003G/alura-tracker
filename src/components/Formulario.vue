<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <Cronometro :tempo-em-segundo="tempoEmSegundo"/>
          <button class="button" @click="iniciar">
          <span class="icon">
            <i class="fa fa-play"/>
          </span>
            <span>Play</span>
          </button>

          <button class="button" @click="finalizar">
          <span class="icon">
            <i class="fa fa-stop"/>
          </span>
            <span>Stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import Cronometro from "@/components/Cronometro.vue";

export default defineComponent({
  name: 'FormularioTarefa',
  components: {Cronometro},
  data: () => ({
    tempoEmSegundo: 0,
    cronometro: 0,
  }),
  methods: {
    iniciar() {
      // Iniciando a contagem
      // 1s = 1000ms
      this.cronometro = setInterval(() => {
        this.tempoEmSegundo += 1;
      }, 1000);
    },
    finalizar() {
      clearInterval(this.cronometro);
    }
  },
});

</script>