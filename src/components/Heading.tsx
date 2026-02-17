import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode; /*Dita como vai ser o tipo de variavel no children (string, number, etc)*/
  /*ReactNode -> tudo que o react aceita*/
} /*A única coisa que queremos aqui é os childrens*/

export function Heading({ children }: HeadingProps){
   return <h1 className={styles.heading}>{children}</h1> 
}