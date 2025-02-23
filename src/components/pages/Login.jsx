function Login() {
  return (
    <div className="container flex align-center justify-center">
        <form className="flex flex-column">
        <h1>Login</h1>
        <div className="username-field row">
            <input type="text"  name="username" id="username" required placeholder="Username" />
            <i className="fa-solid fa-user"></i>
        </div>
        <div className="password-field row">
            <input type="password" name="password" id="password" required placeholder="Password" />
            <i className="fa-solid fa-lock"></i>
        </div>
        <div className="Instruction-field flex align-center">
        <div className="checkbox flex align-center">
            <input type="checkbox"  name="remember" value="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
        </div>
        <a href="/" target="_blank" title="Forgot Password?">Forgot password ?</a>
        </div>
        <input type="submit" value="Login" />
        <div className="new-account flex align-center justify-center">
            <p>Don't have an account ?</p>
            <a href="/" target="_blank" title="Register">Register</a>
        </div>
    </form>
    </div>
  );
}

export default Login;