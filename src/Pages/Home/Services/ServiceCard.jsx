import PropTypes from 'prop-types';
import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ service }) => {

    const {img,price,title} = service;
    console.log(service)

    return (
        <div className="card card-compact  bg-base-100 shadow-xl px-6 pt-4 pb-2">
            <figure className='rounded-xl'>
                <img className='w-full h-40 md:h-48 lg:h-56' src={img} alt="service" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-[#444] text-2xl font-bold">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <h3 className='text-xl font-semibold text-[#FF3811]'>Price: {price}</h3>
                    <button ><GoArrowRight className='text-2xl text-[#FF3811]'/></button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
};

export default ServiceCard;