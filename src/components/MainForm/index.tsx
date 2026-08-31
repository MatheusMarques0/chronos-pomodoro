import { PlayCircleIcon } from "lucide-react"
import Cycles from "../Cycles"
import DefaultButton from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import type { HomeProps } from "../../pages/home/main"

export function MainForm({ state }: HomeProps){
    return (
        <form className='form' action="">
            <div className="FormRow">
                <DefaultInput labelText='task' id='menuInput' type='text'
                placeholder='Digite algo'
                />
            </div>
        
            <div className="FormRow">
                <p>O próximo é intervalo é de {state.config.workTime} minutos</p>
            </div>
        
            <div className="FormRow">
                <Cycles/>
            </div>
        
            <div className="FormRow">
                < DefaultButton icon={<PlayCircleIcon/>}/>
            </div>
        </form> 
    )
}