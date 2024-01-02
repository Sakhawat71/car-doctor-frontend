import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {

    const {img,price,titel} = service;
    console.log(service)

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="service" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{titel}</h2>
                <div className="card-actions justify-between items-center">
                    <h3 className='text-xl font-semibold text-[#FF3811]'>Price: {price}</h3>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
};

export default ServiceCard;