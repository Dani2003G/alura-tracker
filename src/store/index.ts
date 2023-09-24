import IProjetos from "@/interfaces/IProjetos";
import {createStore, Store, useStore as vuexUseStore} from "vuex";
import {InjectionKey} from "vue";
import {ADICIONAR_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO} from "@/store/tipo_mutation";
import {INotificacao, TipoNotificacao} from "@/interfaces/INotificacao";

interface Estado {
    projetos: IProjetos[];
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [
            {
                id: 1,
                texto: 'Uma notificação de sucesso',
                titulo: 'Sucesso',
                tipo: TipoNotificacao.SUCESSO
            },
            {
                id: 2,
                texto: 'Uma notificação de atenção',
                titulo: 'Atenção',
                tipo: TipoNotificacao.ATENCAO
            },
            {
                id: 3,
                texto: 'Uma notificação de falha',
                titulo: 'Falha',
                tipo: TipoNotificacao.FALHA
            },
        ]
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
        }
    }
});

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}