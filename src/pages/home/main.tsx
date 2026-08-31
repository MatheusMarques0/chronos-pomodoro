import { Container } from "../../components/containter";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { taskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

export type HomeProps = {
    state: taskStateModel,
    setState: React.Dispatch<React.SetStateAction<taskStateModel>>
}

export function Home(props: HomeProps){
    return (
        <MainTemplate>
            <Container>
                <CountDown
                    {...props}
                 />
            </Container>

            <Container>
                <MainForm
                    {...props}
                />
            </Container>
        </MainTemplate> 
    )
}