<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">
          Nome do Projeto
        </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@/store";
import {ADICIONAR_PROJETO, ALTERA_PROJETO, NOTIFICAR} from "@/store/tipo_mutation";
import {TipoNotificacao} from "@/interfaces/INotificacao";

export default defineComponent({
  name: 'FormularioProjeto',
  props: {
    id: {
      type: String
    }
  },
  data: () => ({
    nomeDoProjeto: ''
  }),
  methods: {
    salvar() {
      if(this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONAR_PROJETO, this.nomeDoProjeto);
      }
      this.nomeDoProjeto = '';
      this.store.commit(NOTIFICAR, {
        titulo: 'Novo projeto foi salvo',
        texto: 'Prontinho ;) seu projeto já está disponível.',
        tipo: TipoNotificacao.SUCESSO
      })
      this.$router.push('/projetos')
    }
  },
  mounted() {
    if(this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id === this.id);
      this.nomeDoProjeto = projeto?.nome || ''
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