import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";


const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 border my-10">
            <div className="hero-content flex-col lg:flex-row border ">

                <div className="md:w-1/2 relative border-2">
                    <img src={person} className="w-10/12  rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-3 bottom-5 rounded-lg shadow-2xl" />
                </div>

                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;