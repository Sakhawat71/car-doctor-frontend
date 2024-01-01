import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="hero  bg-white rounded-2xl my-10 py-4">
            <div className="hero-content flex-col lg:flex-row gap-10 lg:mx-10">

                <div className="md:w-3/4 lg:w-1/2 relative  border-black">
                    <img src={person} className="w-10/12 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 border-8 border-white absolute right-5 top-1/2 rounded-lg shadow-2xl" />
                </div>

                <div className="md:w-3/4 lg:w-1/2 space-y-5 lg:pl-10 mt-10 px-5 lg:px-0 text-left">
                    <h3 className="text-[#FF3811] font-bold text-xl">About Us</h3>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#151515]">We are qualified <br className=" md:block lg:block"/> & of experience <br className=" hidden lg:block"/> in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable.
                    </p>
                    <Link className="btn bg-[#FF3811] text-white hover:badge-outline hover:text-[#FF3811] ">Get More Info</Link>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;