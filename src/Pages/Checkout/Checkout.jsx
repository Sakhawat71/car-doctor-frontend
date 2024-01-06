import { useLoaderData } from "react-router-dom";

const Checkout = () => {

    const service = useLoaderData();
    console.log(service)

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col ">

                <div className="card shrink-0 w-full max-w-7xl shadow-2xl  bg-[#F3F3F3]">
                    <form className="card-body ">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                            <div className="form-control mb-2">
                                
                                <input name="first-name" type="text" placeholder="First Name" className="input w-full " required />
                            </div>
                            <div className="form-control mb-2">
                                
                                <input name="last-name" type="text" placeholder="Last Name" className="input w-full " required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                            <div className="form-control mb-2">
                                
                                <input type="tel" name="phone" placeholder="Your Phone" className="input w-full " required />
                            </div>
                            <div className="form-control mb-2">
                                
                                <input type="email" name="email" placeholder="Your Email" className="input w-full " required />
                            </div>
                        </div>

                        <div className="form-control mb-2">
                            
                            <textarea name="message" className="textarea w-full h-40" placeholder="Your Message" required></textarea>
                        </div>


                        <div className="form-control mb-2 mt-6">
                            <button className="btn btn-block text-white text-xl bg-[#FF3811] hover:text-[#FF3811]">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;