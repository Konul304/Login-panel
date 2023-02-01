import React, {useState} from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="container">
            <h2>Login</h2>
       <form className="login-form" onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input type="email" placeholder="youemail@gmail.com" name="email"/>
        <label for="password">password</label>
        <input type="password" placeholder="*******" id="password" name="password"/>
        <button type="submit ">Log In</button>
       </form>
       <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
       </div>
    )
}