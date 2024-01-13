import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(data => setServices(data.data))
    }, [])



    return (
        <div className="my-10">
            <div className="text-center w-3/4 md:w-2/3 lg:w-1/2 mx-auto mb-10">
                <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
                <h2 className="text-3xl font-bold text-[#151515]">Our Service Area</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mx-8 md:mx-10 lg:mx-auto">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;