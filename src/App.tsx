import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/containter';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

function App(){
    return (
        <>
            <Container>
               <Logo/>
            </Container>

            <Container>
                <section>
                    <Heading>
                        MENU
                    </Heading>
                </section>
            </Container>
        </>
    )
}

export { App };