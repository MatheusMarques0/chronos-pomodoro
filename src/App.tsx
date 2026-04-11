import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/containter';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import DefaultInput from './components/DefaultInput';

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
                        
                    </div>

                    <div className="FormRow">
                        <button>Enviar</button>
                    </div>
                </form> 
            </Container>
        </>
    )
}

export { App };