import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/containter';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import DefaultInput from './components/DefaultInput';
import Cycles from './components/Cycles';
import DefaultButton from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

function App(){
    return (
        <>
            <Container>
                <Logo/>
            </Container>

            <Container>
                <Menu/>
            </Container>

            <Container>
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
                        < DefaultButton icon={<PlayCircleIcon/>} color='green'/>
                        < DefaultButton icon={<StopCircleIcon/>} color='red'/>
                    </div>
                </form> 
            </Container>
        </>
    )
}

export { App };