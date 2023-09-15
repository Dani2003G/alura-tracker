<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao }}
      </div>
      <div class="column">
        <CronometroTarefa :tempoEmSegundo="tarefa.duracaoEmSegundo"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import CronometroTarefa from "@/components/Cronometro.vue";
import ITarefas from "@/interfaces/ITarefas";

export default defineComponent({
  name: 'TarefaVue',
  props: {
    tarefa: {
      type: Object as PropType<ITarefas>,
      required: true
    }
  },
  components: {CronometroTarefa},
  data: () => ({

  })
})
</script>


<style scoped>
.box {
  background: #FAF0CA;
}
</style>