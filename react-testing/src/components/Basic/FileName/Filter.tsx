type FirstProps = {
    name? : string
}
export const Filter = (props : FirstProps) => {
    return(
        <>
            <div>Hello {props.name}</div>
        </>
    )
}