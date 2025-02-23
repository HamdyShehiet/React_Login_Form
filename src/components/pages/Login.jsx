function Login() {
  return (
    <>
        <form>
        <h2>Login</h2>
        <div class="username-field">
            <input type="text"  name="username" id="username" required placeholder="Username" />
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="password-field">
            <input type="password" name="password" id="password" required placeholder="Password" />
            <i class="fa-solid fa-lock"></i>
        </div>
        <div class="Ins-field">
        <div class="checkbox">
            <input type="checkbox"  name="remember" value="remember" id="remember" />
            <label for="remember" >Remember me</label>
        </div>
        <a href="/" target="_blank" title="Forgot Password?">Forgot password ?</a>
        </div>
        <input type="submit" value="Login" />
        <div class="new-account">
            <p>Don't have an account ?</p>
            <a href="/" target="_blank" title="Register">Register</a>
        </div>
    </form>
    </>
  );
}

export default Login;