const HeaderComponent = function(){
    return (
        <>
            <h1>Amazon Shopping</h1>
        </>
    )
}

const NavigationComponent = () => (
    <>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </>
)

const FooterComponent = () => (
    <>
        <div>&copy; copyright</div>
    </>
)

ReactDOM.render(
    <>
        <HeaderComponent/>
        <NavigationComponent/>
        <FooterComponent/>
    </>,
    document.getElementById("container")
)