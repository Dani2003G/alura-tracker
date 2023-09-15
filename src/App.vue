<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral style="text-align: center"/>
    </div>
    <div class="column is-three-quarter">
      <Formulario @aoSalvarTarefa="salvarTarefas"/>
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxTarefa v-if="listaEstaVazia">
          você não está muito produtivo hoje :(
        </BoxTarefa>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BarraLateral from "@/components/BarraLateral.vue";
import Formulario from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";
import ITarefas from "@/interfaces/ITarefas";
import BoxTarefa from "@/components/Box.vue";

export default defineComponent({
  name: 'App',
  components: {BoxTarefa, Tarefa, BarraLateral, Formulario},
  data: () => ({
    tarefas: [] as ITarefas[],
  }),
  computed: {
    listaEstaVazia() {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefas(tarefa: ITarefas) {
      this.tarefas.push(tarefa);
    }
  }
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>
