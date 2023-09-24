import IProjetos from "@/interfaces/IProjetos";

export default interface ITarefas {
    id: string,
    duracaoEmSegundo: number,
    descricao: string,
    projeto: IProjetos
}