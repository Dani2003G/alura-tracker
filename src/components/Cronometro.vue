<template>
  <section>
    <strong>{{tempoDecorrido}}</strong>
  </section>
</template>

<script lang="ts">

import {defineComponent} from 'vue';

export default defineComponent ({
  name: 'CronometroTarefa',
  props: {
    tempoEmSegundo: {
      type: Number,
      default: 0
    }
  },
  computed: {
    tempoDecorrido() {
      return new Date(this.tempoEmSegundo * 1000).toISOString().substring(11, 19)
    }
  }
})

</script>