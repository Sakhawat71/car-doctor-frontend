import { Link, useLocation, useNavigate } from "react-router-dom";
import loginPic from '../../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const SignUp = () => {

    const {signUpWithEmailPass} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handelSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name,email,password})

        signUpWithEmailPass(email,password)
        .then(result => {
            const user = result.user;
            updateProfile(user , {
                displayName: name,
            })
            .then(()=>{
                console.log('profile update with name')
            })
            .catch(error => {
                console.log('name can`t update',error)
            })
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content block lg:flex gap-x-20 ">
                <div className="lg:w-1/2 hidden lg:block">
                    <img src={loginPic} alt="login image" />
                </div>

                <div className="card lg:w-1/2 shadow-2xl bg-base-100">
                    <h1 className='font-bold text-3xl mt-5 text-center text-[#444]'>Sign Up</h1>

                    <form onSubmit={handelSignUp} className="card-body pt-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:text-[#FF3811]">Sign Up</button>
                        </div>
                        <div className='text-center mt-2'>
                            <div className="">
                                <p className="text-lg font-medium flex text-center items-center justify-center my-3">Or Sign Up with 
                                <span><Link><FcGoogle className="ml-2 text-3xl"/></Link></span></p>
                                
                            </div>
                            <p>Already have an account? <Link to={"/login"} className='text-[#FF3811] font-semibold'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;