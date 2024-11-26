import styles from './input.module.css'



export default function Input({typeInput,placeholderInput, refInput}){
    return(
        <input type={typeInput} placeholder={placeholderInput} className={styles.input} ref={refInput}  />
    )
}
