import React, {useState} from "react"

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        let nameValue = document.getElementsByName('name')[0].value
        setName(nameValue);
        let emailValue = document.getElementsByName('email')[0].value
        setEmail(emailValue);
        let passValue = document.getElementsByName('password')[0].value
        setPass(passValue);
        console.log(name);
        console.log(pass);
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
        <button type="submit ">Register</button>
       </form>
       <button className="link-btn" onClick={() => {
                return props.onFormSwitch('login');
            }}>Already have an account? Login here.</button>
       </div>
    )
}