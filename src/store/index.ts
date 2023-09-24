import IProjetos from "@/interfaces/IProjetos";
import {createStore, Store, useStore as vuexUseStore} from "vuex";
import {InjectionKey} from "vue";
import {ADICIONAR_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR} from "@/store/tipo_mutation";
import {INotificacao} from "@/interfaces/INotificacao";
import notificacoes from "@/components/Notificacoes.vue";

interface Estado {
    projetos: IProjetos[];
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
        state: {
            projetos: [],
            notificacoes: []
        },
        mutations: {
            [ADICIONAR_PROJETO](state, nomeDoProjeto: string) {
                const projeto = {
                    id: new Date().toISOString(),
                    nome: nomeDoProjeto
                } as IProjetos;
                state.projetos.push(projeto);
            },
            [ALTERA_PROJETO](state, projeto: IProjetos) {
                const index = state.projetos.findIndex(proj => proj.id === projeto.id)
                state.projetos[index] = projeto
            },
            [EXCLUIR_PROJETO](state, id: string) {
                state.projetos = state.projetos.filter(proj => proj.id != id)
            },
            [NOTIFICAR](state, novaNotificacao: INotificacao) {
                novaNotificacao.id = new Date().getTime()
                state.notificacoes.push(novaNotificacao)
                setTimeout(() => {
                    state.notificacoes = state.notificacoes
                        .filter(notificacoes => notificacoes.id != notificacoes.id)
                }, 3000)
            }
        }
    })
;

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}