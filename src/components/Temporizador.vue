<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundo="tempoEmSegundo"/>
    <BotaoCronometro @clicado="iniciar" :desabilitado="cronometroRodando" icone="fas fa-play" label="Play"/>
    <BotaoCronometro @clicado="finalizar" :desabilitado="!cronometroRodando" icone="fas fa-stop" label="Stop"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import Cronometro from "@/components/Cronometro.vue";
import BotaoCronometro from "@/components/botaoTemporizador.vue";

export default defineComponent({
  name: 'TemporizadorTarefa',
  emits: ['aoTemporizadorFinalizado'],
  components: {BotaoCronometro, Cronometro},
  data: () => ({
    tempoEmSegundo: 0,
    cronometro: 0,
    cronometroRodando: false,
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
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundo);
      this.tempoEmSegundo = 0;
    }
  },
});

</script>