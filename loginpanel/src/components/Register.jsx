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
        <div className="bg-success-subtle min-vh-100 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <h4 className="card-header">Register</h4>
                            <div className="card-body">
                                <form action="" method="" />

                                <div className="form-group row">
                                    <label className="col-md-5 col-form-label text-md-right mb-2 ">Full name</label>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" name="fullname" required />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label className="col-md-5 col-form-label text-md-right mb-2">E-mail Address</label>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" name="email-address" required />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" className="col-md-5 col-form-label text-md-right mb-2">Password</label>
                                    <div class="col-md-6">
                                        <input type="password" className="form-control" name="password" required />
                                    </div>
                                </div>

                                <div >
                                    <button type="submit" className="btn btn-success position-relative top-0 start-50 translate-middle-x">
                                        Register
                                    </button>
                                </div>
                                <a href="#" className="btn btn-link position-relative top-0 start-50 translate-middle-x">
                                    Forgot Password?
                                </a>
                                <form />
                            </div>
                        </div>
                    </div>
                </div >
                <Link to="/login"><button className="btn position-relative top-0 start-50 translate-middle-x" onClick={() => {
                    return props.onFormSwitch('login');
                }}>Already have an account? Login here.</button></Link>
            </div >
        </div>
    )
}
{/* <div className="bg-success-subtle d-flex align-items-center flex-column min-vh-100 p-5">
            <h2>Register</h2> 
            <form className="w-25 d-flex flex-column p-5 border border-white ml-0 mr-0 mt-2 bg-white mt-3 rounded" onSubmit={handleSubmit}>
                <label className="form-label">Full name</label>
                <input className="border border-secondary rounded p-2 form-outline mb-4"
                name="name" id="name" placeholder="Full name" />
                <label className="form-label">Email</label>
                <input className="border border-secondary rounded p-2 form-outline mb-4"
                type="email" placeholder="youremail@gmail.com" name="email" />
                <label className="form-label">Password</label>
                <input className="border border-secondary rounded p-2 form-outline mb-4"
                type="password" placeholder="***********" id="password" name="password" />
                <button className="text-capitalize btn btn-success ml-0 mr-0"
                type="submit ">Register</button>
            </form>
        </div> */}
{/* <div className="form-group row">
            <div className="col-md-6 offset-md-4 mb-2">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="remember" />Remember me
                    </label>
                </div>
            </div>
        </div> */}