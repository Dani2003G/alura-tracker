<template>
  <BoxTarefa>
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="column">
        <CronometroTarefa :tempoEmSegundo="tarefa.duracaoEmSegundo"/>
      </div>
      <button class="button ml-2 is-danger" @click="excluir(tarefa.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
      </button>
    </div>
  </BoxTarefa>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import CronometroTarefa from "@/components/Cronometro.vue";
import ITarefas from "@/interfaces/ITarefas";
import BoxTarefa from "@/components/Box.vue";
import {store, useStore} from "@/store";
import {REMOVE_TAREFA} from "@/store/tipo_mutation";

export default defineComponent({
  name: 'TarefaVue',
  props: {
    tarefa: {
      type: Object as PropType<ITarefas>,
      required: true
    }
  },
  components: {BoxTarefa, CronometroTarefa},
  methods: {
    excluir(id: string) {
      this.store.commit(REMOVE_TAREFA, id)
    }
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  }
})
</script>