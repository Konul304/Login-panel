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
        <div className="bg-success-subtle min-vh-100 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <h4 className="card-header">Login</h4>
                            <div className="card-body">
                                <form action="" method="" />
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

                                <div>
                                    <button type="submit" className="btn btn-success position-relative top-0 start-50 translate-middle-x ps-5 pe-5 ">
                                        Login
                                    </button>
                                </div>
                                <a href="#" className="btn btn-link mb-2 position-relative top-0 start-50 translate-middle-x">
                                    Forgot Password?
                                </a>
                                <form />
                            </div>
                        </div>
                    </div>
                </div >
                <Link to="/register"><button className="btn ml-0 mr-0 mt-2 position-relative top-0 start-50 translate-middle-x"
                    onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button></Link>
            </div >
        </div>
    )
}
    // <div className="bg-success-subtle d-flex align-items-center flex-column min-vh-100 p-5">
    //     <h2>Login</h2>
    //     <form className="w-25 mt-2 d-flex flex-column p-5 border border-white bg-white rounded" onSubmit={handleSubmit}>
    //         <label className="form-label">Email</label>
    //         <input className="border border-secondary rounded p-2 form-outline mb-4" type="email" placeholder="youremail@gmail.com" name="email" />
    //         <label className="form-label">Password</label>
    //         <input className="border border-secondary rounded p-2 form-outline mb-4" type="password" placeholder="***********" id="password" name="password" />
    //         <button className="text-capitalize btn btn-success ml-0 mr-0" type="submit ">Log In</button>
    //     </form>
    //     <Link to="/register"><button className="btn ml-0 mr-0 mt-2" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button></Link>
    // </div>
                                // <div className="form-group row">
                                //     <div className="col-md-6 offset-md-4">
                                //         <div className="checkbox">
                                //             <label>
                                //                 <input type="checkbox" name="remember" />Remember me
                                //             </label>
                                //         </div>
                                //     </div>
                                // </div>