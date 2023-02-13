import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../Context/Context';

const Login = () => {
    const { signIN } = useContext(authContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handlesub = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        // console.log(email, pass);
        signIN(email, pass)
            .then(res => {
                const user = res.user
                console.log(user);
                setError('')
                navigate('/')
                toast.success('Log in Successfully')
            })
            .then(err => {
                if (err) {
                    toast.error('something went wrong,please try again')
                }
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesub} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            {error}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;