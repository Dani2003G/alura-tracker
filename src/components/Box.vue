<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BoxTarefa',
  data: () => ({
    estilos: {
      background: '#FAF0CA'
    }
  })
})
</script>