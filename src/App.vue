<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
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
    modoEscuroAtivo: false
  }),
  computed: {
    listaEstaVazia() {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefas(tarefa: ITarefas) {
      this.tarefas.push(tarefa);
    },
    trocarTema(modoEscuroAtivo : boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
