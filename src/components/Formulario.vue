<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import Temporizador from "@/components/Temporizador.vue";

export default defineComponent({
  name: 'FormularioTarefa',
  emits: ['aoSalvarTarefa'],
  components: {Temporizador},
  data: () => ({
    descricao: '',
  }),
  methods: {
    finalizarTarefa(tempoDecorrido: number) {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundo: tempoDecorrido,
        descricao: this.descricao
      })
      this.descricao = '';
    }
  }
});

</script>