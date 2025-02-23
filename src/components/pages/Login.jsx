import { useState } from "react";

function Login() {

  const [userame, setUserame] = useState("");
  const [password, setPassword] = useState("");

  function login (){
    if(userame !== "" && password !== ""){
      console.log(userame);
      console.log(password);
    }
  }

  return (
    <div className="container flex align-center justify-center">
        <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-column">
        <h1>Login</h1>
        <div className="username-field row">
            <input onChange={(e)=>{setUserame(e.target.value)}} type="text"  name="username" id="username" required placeholder="Username" />
            <i className="fa-solid fa-user"></i>
        </div>
        <div className="password-field row">
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" required placeholder="Password" />
            <i className="fa-solid fa-lock"></i>
        </div>
        <div className="Instruction-field flex align-center">
        <div className="checkbox flex align-center">
            <input type="checkbox"  name="remember" value="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
        </div>
        <a href="/"  title="Forgot Password?">Forgot password ?</a>
        </div>
        <input type="submit" onClick={login} value="Login" />
        <div className="new-account flex align-center justify-center">
            <p>Don't have an account ?</p>
            <a href="/"  title="Register">Register</a>
        </div>
    </form>
    </div>
  );
}

export default Login;