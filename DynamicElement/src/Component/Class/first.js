class HeaderComponent extends React.Component {
    render() {
        return (
            <>
                <h1>Amazon Shopping</h1>
            </>
        )
    }
}

class NavigationComponent extends React.Component {
    render() {
        return (
            <>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </>
        )
    }
}

class FooterComponent extends React.Component {
    render() {
        return (
            <>
                <div>&copy; copyright</div>
            </>
        )
    }
}

ReactDOM.render(
    <>
        <HeaderComponent />
        <NavigationComponent />
        <FooterComponent />
    </>,
    document.getElementById("container")
)