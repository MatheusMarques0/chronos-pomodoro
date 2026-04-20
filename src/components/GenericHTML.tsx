import styles from "./GeneticHTML.module.css"

type GenericHTMLProps = {
children: React.ReactNode
}

export function GenericHTML({children}: GenericHTMLProps) {
    return <div className={styles.GeneticGTML}>{children}</div>
}