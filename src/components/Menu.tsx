import styles from './Menu.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';

type AvaiableThemes = 'dark' | 'light'

export function Menu(){
  const [theme, setTheme] = useState<AvaiableThemes>('dark')

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    event.preventDefault()
  }

   return <nav className={styles.menu}>
    <h1>{theme}</h1>
    <a href="#" className={styles.menuLink} aria-label='ir para a Home ' title='Ir para a home'>
      <HouseIcon/>
    </a>
    <a href="#" className={styles.menuLink} aria-label='Ver histórico' title='Ver histórico'>
      <HistoryIcon/>
    </a>
    <a href="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
      <SettingsIcon/>
    </a>
    <a href="#" className={styles.menuLink} aria-label='Mudar Tema' title='Mudar Tema' onClick={handleThemeChange}>
      <SunIcon/>
    </a>
   </nav> 
}