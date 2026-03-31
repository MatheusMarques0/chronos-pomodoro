import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/containter';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

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
                <CountDown />
            </Container>
        </>
    )
}

export { App };