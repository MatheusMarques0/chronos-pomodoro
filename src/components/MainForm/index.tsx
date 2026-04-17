import { PlayCircleIcon } from "lucide-react"
import Cycles from "../Cycles"
import DefaultButton from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"

export function MainForm(){
    return (
        <form className='form' action="">
            <div className="FormRow">
                <DefaultInput labelText='task' id='menuInput' type='text'
                placeholder='Digite algo'
                />
            </div>
        
            <div className="FormRow">
                <p>Lorem ipsum dolor sit amet.</p>
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