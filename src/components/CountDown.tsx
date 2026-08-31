import type { HomeProps } from '../pages/home/main';
import styles from './CountDown.module.css';

export function CountDown({state}: HomeProps){
   return <div className={styles.container}>
    {state.formattedSecondesRemaining}
   </div> 
}