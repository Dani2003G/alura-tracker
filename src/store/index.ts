import IProjetos from "@/interfaces/IProjetos";
import {createStore, Store, useStore as vuexUseStore} from "vuex";
import {InjectionKey} from "vue";
import {
    ADICIONAR_PROJETO,
    ADICIONAR_TAREFA,
    ALTERA_PROJETO,
    EXCLUIR_PROJETO,
    NOTIFICAR,
    REMOVE_TAREFA
} from "@/store/tipo_mutation";
import {INotificacao} from "@/interfaces/INotificacao";
import ITarefas from "@/interfaces/ITarefas";

interface Estado {
    projetos: IProjetos[];
    tarefas: ITarefas[];
    notificacoes: INotificacao[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
        state: {
            projetos: [],
            tarefas: [],
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
            [ADICIONAR_TAREFA](state, tarefa: ITarefas) {
                const tarefaIndex = {
                    id: new Date().toISOString(),
                    duracaoEmSegundo: tarefa.duracaoEmSegundo,
                    descricao: tarefa.descricao,
                    projeto: tarefa.projeto
                } as ITarefas
                state.tarefas.push(tarefaIndex)
            },
            [REMOVE_TAREFA](state, id: string) {
                state.tarefas = state.tarefas.filter(tarefa => tarefa.id != id)
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