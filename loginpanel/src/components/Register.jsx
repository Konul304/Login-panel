import React, {useState} from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="container">
            <h2>Register</h2>
       <form className="register-form"  onSubmit={handleSubmit}>
        <label for="name">Full name</label>
        <input name="name" id="name" placeholder="full name" />
        <label for="email">email</label>
        <input type="email" placeholder="youremail@gmail.com" name="email"/>
        <label for="password">password</label>
        <input type="password" placeholder="***********" id="password" name="password"/>
        <button type="submit ">Log In</button>
       </form>
       <button className="link-btn" onClick={() => {
                return props.onFormSwitch('login');
            }}>Already have an account? Login here.</button>
       </div>
    )
}