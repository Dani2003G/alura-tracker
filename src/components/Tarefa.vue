<template>
  <BoxTarefa>
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="column">
        <CronometroTarefa :tempoEmSegundo="tarefa.duracaoEmSegundo"/>
      </div>
    </div>
  </BoxTarefa>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import CronometroTarefa from "@/components/Cronometro.vue";
import ITarefas from "@/interfaces/ITarefas";
import BoxTarefa from "@/components/Box.vue";

export default defineComponent({
  name: 'TarefaVue',
  props: {
    tarefa: {
      type: Object as PropType<ITarefas>,
      required: true
    }
  },
  components: {BoxTarefa, CronometroTarefa},
  data: () => ({

  })
})
</script>


<style scoped>
</style>