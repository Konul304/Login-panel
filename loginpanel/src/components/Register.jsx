import React, { useState } from "react"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handleSubmit = (e) => {
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
        if (name !== '' && email !== '' && pass !== '') {
            return props.onFormSwitch('login');
        }
    }

    return (
        <div className="bg-success-subtle d-flex align-items-center flex-column min-vh-100">
            <h2>Register</h2>
            <form className="d-flex flex-column p-5 border border-white ml-0 mr-0 mt-2 bg-white" onSubmit={handleSubmit}>
                <label className="form-label">Full name</label>
                <input name="name" id="name" placeholder="full name" />
                <label className="form-label">email</label>
                <input type="email" placeholder="youremail@gmail.com" name="email" />
                <label className="form-label">password</label>
                <input type="password" placeholder="***********" id="password" name="password" />
                <button className="text-capitalize btn btn-success ml-0 mr-0 mt-2"
                    type="submit ">Register</button>
            </form>
            <Link to="/login"><button className="btn ml-0 mr-0 mt-2" onClick={() => {
                return props.onFormSwitch('login');
            }}>Already have an account? Login here.</button></Link>
        </div>
    )
}