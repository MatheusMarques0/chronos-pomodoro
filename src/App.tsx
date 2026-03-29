import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/containter';
import { Heading } from './components/Heading';

function App(){
    return (
        <>
            <Container>
                <section>
                    <Heading>
                        LOGO
                    </Heading>
                </section>
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