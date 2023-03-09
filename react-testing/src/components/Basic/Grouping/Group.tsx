type FirstProps = {
    name? : string
}
export const Group = (props : FirstProps) => {
    return(
        <>
            <div>Hello {props.name}</div>
        </>
    )
}