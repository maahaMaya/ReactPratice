function LoginComponent(){
    return(
        <>
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"/></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button>Login</button>
        </>
    )
}

export default LoginComponent;