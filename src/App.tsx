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
                        <DefaultInput type='text'/>
                    </div>

                    <div className="FormRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="FormRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0 0</p>
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