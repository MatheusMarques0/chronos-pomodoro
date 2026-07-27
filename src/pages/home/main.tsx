import { Container } from "../../components/containter";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { taskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

type HomeProps = {
    state: taskStateModel,
    setState: React.Dispatch<React.SetStateAction<taskStateModel>>
}

//agora tempos o estado e a função que configura o estado dentro da home

export function Home(props: HomeProps){
    const {state, setState} = props
    return (
        <MainTemplate>
            <Container>
                <CountDown/>
            </Container>

            <Container>
                <MainForm/>
            </Container>
        </MainTemplate> 
    )
}