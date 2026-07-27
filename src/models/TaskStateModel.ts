import type { TaskModel } from "./TaskModel"

// Estado --> Componente -- Props --> Filhos
//Você sempre levra um estado do maior pro menor
//Por enqunato, vamos colocar os nossos estados em um CONTEXTO, todos os componentes que usam esses estados podem usar esse contexto.

export type taskStateModel = {
    tasks: TaskModel[]; // histórico, MainForm
    secondsRemaining: number; //contador, histórico, MainForm, Button
    formattedSecondesRemaining: string; // Título, CountDown
    activeTask: TaskModel | null; //CountDown, Histórico, MainForm, Button
    currentCycle: number; // Home
    config: /* configuração do sistema em sim, MainForm*/{
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}