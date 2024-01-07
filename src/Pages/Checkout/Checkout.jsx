import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Checkout = () => {

    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const {_id,price,title,img} = service;
    console.log(service)

    const handelCheckout = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const order = {
            customarName: name,
            email,
            date,
            phone,
            message,
            serviceId: _id,
            price,
            title,
            img
        }
        console.log(order)

        axios.post(`https://car-doctor-server-nu-ecru.vercel.app/bookings`,order)
        .then(data => {
            console.log(data.data.insertedId)
            if(data.data.insertedId){
                alert('added')
                console.log('added')
            }
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">

                <div className="card shrink-0 w-full max-w-7xl shadow-2xl  bg-[#F3F3F3]">
                    <form onSubmit={handelCheckout} className="card-body p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                            <div className="form-control mb-2">

                                <input name="name" type="text" defaultValue={user?.displayName} placeholder="Name" className="input w-full " required />
                            </div>
                            <div className="form-control mb-2">

                                <input name="date" type="date" className="input w-full " required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                            <div className="form-control mb-2">

                                <input type="tel" name="phone" placeholder="Your Phone" className="input w-full " required />
                            </div>
                            <div className="form-control mb-2">

                                <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input w-full " required />
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