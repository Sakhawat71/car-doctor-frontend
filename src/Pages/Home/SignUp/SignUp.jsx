import { Link } from "react-router-dom";
import loginPic from '../../../assets/images/login/login.svg'
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {


    const handelSignUp = e => {
        e.preventDefault();
        
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content block lg:flex gap-x-20 ">
                <div className="lg:w-1/2 border hidden lg:block">
                    <img src={loginPic} alt="login image" />
                </div>

                <div className="card border lg:w-1/2 shadow-2xl bg-base-100">
                    <h1 className='font-bold text-3xl mt-5 text-center text-[#444]'>Sign Up</h1>

                    <form onSubmit={handelSignUp} className="card-body">
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
                                <p className="text-lg font-medium">Or Sign Up with</p>
                                <Link><FaGoogle className="text-xl font-bold  mx-auto"/></Link>
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