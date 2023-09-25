<template>
  <div class="projetos">
    <h1 class="title texto">Projetos</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ProjetosTarefa'
})


</script>

<style>
.projetos {
  padding: 1.25rem;
}
</style>