type DefaultInputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>

export function DefaultInput({ id
    , type,
     labelText,
      ...rest }: DefaultInputProps){
    return(
        <>
        {labelText && <label htmlFor={id}>{labelText}</label>} {/*Se tivesse mais de uma linha iria precisar usar ()*/ }
        {/*Se tiver label text, faça isso:*/}
        <input id={id} type={type} {...rest} />
        </>
    )
}

export default DefaultInput