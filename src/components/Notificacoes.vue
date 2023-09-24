<template xmlns:article="http://www.w3.org/1999/html">
  <div class="notificacoes">
    <article class="message" :class="contexto[notificao.tipo]" v-for="notificao in notificacoes" :key="notificao.id">
      <div class="message-header">
        {{ notificao.titulo }}
      </div>
      <div class="message-body">
        {{ notificao.texto }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">

import {computed, defineComponent} from "vue";
import {useStore} from "@/store";
import {TipoNotificacao} from "@/interfaces/INotificacao";

export default defineComponent({
  name: 'NotificacoesTarefa',
  data: () => ({
    contexto: {
      [TipoNotificacao.SUCESSO]: 'is-success',
      [TipoNotificacao.ATENCAO]: 'is-warning',
      [TipoNotificacao.FALHA]: 'is-danger',
    }
  }),
  setup() {
    const store = useStore();
    return {
      notificacoes: computed(() => store.state.notificacoes)
    }
  }
})

</script>

<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105;
}
</style>