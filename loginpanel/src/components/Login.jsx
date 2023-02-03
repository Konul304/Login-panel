import React, { useState, useRef } from "react"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = (props) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user.email)
    }

    const handleChange = (e) => {
        setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return (
        <div className="bg-success-subtle min-vh-100 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <h4 className="card-header">Login</h4>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-md-6 col-form-label text-md-right mb-2">E-mail Address</label>
                                        <div className="col-md-6">
                                            <input onChange={handleChange} type="email" name="email" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-6 col-form-label text-md-right mb-4">Password</label>
                                        <div className="col-md-6">
                                            <input onChange={handleChange} type="password" name="password" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="form-group row ms-1 me-1">
                                        <button type="submit" className="btn btn-success position-relative top-0 start-50 translate-middle-x">
                                            Login
                                        </button>
                                    </div>
                                    <a href="#" className="btn btn-link mb-2 position-relative top-0 start-50 translate-middle-x text-decoration-none">
                                        Forgot Password?
                                    </a>
                                </form>
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
   