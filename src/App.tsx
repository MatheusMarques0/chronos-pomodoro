import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/containter';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import DefaultInput from './components/DefaultInput';
import Cycles from './components/Cycles';
import DefaultButton from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Heading } from './components/Heading';

function App(){
    /*todos os componentes que usam número saibam das mudança em seu valor.

    Sempre que você usar useState, não use atribuição diretamente.

    
    const [numero, setNumero] = useState(() => {
       console.log('lazy Inicialization')
        return 0
    })
    */
   const [numero, setNumero] = useState(0)

    function handleClick(){
        //setNumero(prevState => prevState + 1)
        setNumero(1)
    }

    return (
        <>
            <Heading>Número: {numero}</Heading>
            <button onClick={handleClick}>Aumenta</button>

            <Container>
                <Logo/>
            </Container>

            <Container>
                <CountDown/>
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
                        < DefaultButton icon={<PlayCircleIcon/>}/>
                    </div>
                </form> 
            </Container>

            <Container>
                <Footer/>
            </Container>
        </>
    )
}

export { App };