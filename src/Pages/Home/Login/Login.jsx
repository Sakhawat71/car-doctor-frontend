import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginPic from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email,password})

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                //jwt
                const userJwt = { email };
                axios.post('http://localhost:5000/jwt', userJwt, { withCredentials: true })
                    .then(data => {
                        // console.log(res.data) 
                        // console.log(data.data.success)
                        if (data.data?.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content block lg:flex gap-x-20 ">
                <div className="lg:w-1/2 hidden lg:block">
                    <img src={loginPic} alt="login image" />
                </div>

                <div className="card lg:w-1/2 shadow-2xl bg-base-100">
                    <h1 className='font-bold text-3xl mt-5 text-center text-[#444]'>Login</h1>

                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:text-[#FF3811]">Sign in</button>
                        </div>
                        <div className='text-center mt-4'>

                            <p>Have an account? <Link to={'/signup'} className='text-[#FF3811] font-semibold'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;