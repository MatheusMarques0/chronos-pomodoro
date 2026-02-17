import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

function App(){
    return (
        <div>
            <Heading> 
                Olá mundo 1
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia nobis est magni? Neque tempore provident voluptatem labore, inventore ipsa ipsam aliquid ratione nemo dicta natus recusandae animi cupiditate velit?</p>
            
        </div>
    )
}

export { App };