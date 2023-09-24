<template>
  <Formulario @aoSalvarTarefa="salvarTarefas"/>
  <div class="lista">
    <Tarefa v-for="(tarefa) in tarefas" :key="tarefa.id" :tarefa="tarefa"/>
    <BoxTarefa v-if="listaEstaVazia">
      você não está muito produtivo hoje :(
    </BoxTarefa>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import Formulario from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";
import ITarefas from "@/interfaces/ITarefas";
import BoxTarefa from "@/components/Box.vue";
import {store, useStore} from "@/store";
import {ADICIONAR_TAREFA} from "@/store/tipo_mutation";

export default defineComponent({
  name: 'App',
  components: {BoxTarefa, Tarefa, Formulario},
  computed: {
    listaEstaVazia() {
      return store.state.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefas(tarefa: ITarefas) {
      store.commit(ADICIONAR_TAREFA, tarefa)
    },
  },
  setup() {
    const store = useStore()
    return {
      tarefas: computed(() => store.state.tarefas),
      store
    }
  }
});
</script>
