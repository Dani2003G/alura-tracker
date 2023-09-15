<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral style="text-align: center"/>
    </div>
    <div class="column is-three-quarter">
      <Formulario @aoSalvarTarefa="salvarTarefas"/>
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
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

export default defineComponent({
  name: 'App',
  components: {Tarefa, BarraLateral, Formulario},
  data: () => ({
    tarefas: [] as ITarefas[],
  }),
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
