import type { taskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null; //quando o timer chega no final
    interruptDate: number | null; // quando a task for interrompida
    type: keyof taskStateModel['config'];
}