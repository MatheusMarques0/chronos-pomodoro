import './styles/theme.css'
import './styles/global.css'
import { Home } from './pages/home/main';
import { useState } from 'react';
import type { taskStateModel } from './models/TaskStateModel';

/*export type taskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number; 
    formattedSecondesRemaining: string; 
    activeTask: TaskModel | null;
    currentCycle: number; 
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}
*/
const initialState: taskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondesRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15
    }
}

function App(){
    const [state, setState] = useState(initialState) //a gente não precisa desses useState no App, estamos criando ele dentro de App porque vamos jogar ele em componentes filhos de app
    return (
        <Home state={state} setState={setState}/>
    )
}

export { App };