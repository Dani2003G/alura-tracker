<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo }">
    <NotificacoesTarefa/>
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <router-view/>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BarraLateral from "@/components/BarraLateral.vue";
import NotificacoesTarefa from "@/components/Notificacoes.vue";

export default defineComponent({
  name: 'App',
  components: {NotificacoesTarefa, BarraLateral},
  data: () => ({
    modoEscuroAtivo: false
  }),
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
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

.texto {
  color: var(--texto-primario);
}

@media screen and (max-width: 764px) {
  .conteudo {
    flex: none;
    width: auto!important;
    height: 100vh;
  }
}


</style>
