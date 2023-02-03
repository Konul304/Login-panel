import React, { useState, useRef } from "react"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = (props) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name !== '' && user.email !== '' && user.password !== '') {
            return props.onFormSwitch('login');
        }
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
                            <h4 className="card-header">Register</h4>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>

                                    <div className="form-group row">
                                        <label className="col-md-6 col-form-label text-md-right mb-2 ">Full name</label>
                                        <div className="col-md-6">
                                            <input onChange={handleChange} type="text" className="form-control" name="name" required />
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="col-md-6 col-form-label text-md-right mb-2">E-mail Address</label>
                                        <div className="col-md-6">
                                            <input onChange={handleChange} type="text" className="form-control" name="email" required />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="password" className="col-md-6 col-form-label text-md-right mb-4">Password</label>
                                        <div className="col-md-6">
                                            <input onChange={handleChange} type="password" className="form-control" name="password" required />
                                        </div>
                                    </div>

                                    <div className="form-group row ms-1 me-1">
                                        <button type="submit" className="btn btn-success position-relative top-0 start-50 translate-middle-x">
                                            Register
                                        </button>
                                    </div>
                                    <a href="#" className="btn btn-link position-relative top-0 start-50 translate-middle-x text-decoration-none">
                                        Forgot Password?
                                    </a>
                                </form>
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