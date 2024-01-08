import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navlink = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/about">About</NavLink> </li>
        <li> <NavLink to="/services">Services</NavLink> </li>
        <li> <NavLink to="/blog">Blog</NavLink> </li>
        <li> <NavLink to="/contact">Contact</NavLink> </li>
        {
            user &&
                <li> <NavLink to="/bookings">My Bookings</NavLink> </li>
        }
    </>

    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlink
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src="/src/assets/logo.svg" className="w-3/5" alt="website logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlink
                    }
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link className="btn text-[#FF3811] btn-outline hover:bg-white hover:text-[#FF3811]">Appointment</Link>
                <>
                    {
                        user?.email ? <Link onClick={handelLogout} className="btn text-[#FF3811] btn-outline hover:bg-white hover:text-[#FF3811]">Log out</Link>
                            :
                            <Link to={"/login"} className="btn text-[#FF3811] btn-outline hover:bg-white hover:text-[#FF3811]">Log in</Link>
                    }
                </>
            </div>
        </div>
    );
};

export default Navbar;