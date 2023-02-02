import React, { useState } from "react"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
        <div className="bg-success-subtle d-flex align-items-center text-center flex-column min-vh-100">
            <h2>Login</h2>
            <form className="d-flex flex-column p-5 border border-white bg-white" onSubmit={handleSubmit}>
                <label className="form-label">email</label>
                <input type="email" placeholder="youremail@gmail.com" name="email" />
                <label className="form-label">password</label>
                <input type="password" placeholder="***********" id="password" name="password" />
                <button className="text-capitalize btn btn-success ml-0 mr-0 mt-2" type="submit ">Log In</button>
            </form>
            <Link to="/register"><button className="btn ml-0 mr-0 mt-2" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button></Link>
        </div>
    )
}