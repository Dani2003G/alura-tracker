<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        Descrição da tarefa
      </div>
      <div class="column">
        <CronometroTarefa :tempoEmSegundo="15"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CronometroTarefa from "@/components/Cronometro.vue";

export default defineComponent({
  name: 'TarefaVue',
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