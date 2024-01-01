import img1 from '../../../assets/images/banner/5.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/1.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {


    return (
        <div className="carousel max-h-screen w-full">

            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full " />

                <div className='absolute text-white top-0 flex items-center h-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-10 md:pl-24'>
                    <div className='lg:w-3/4 space-y-8'>
                        <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-3'>
                            <button className='btn text-white bg-[#FF3811]'>Discover More</button>
                            <button className='btn text-white btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-10 bottom-5 ">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full " />

                <div className='absolute text-white top-0 flex items-center h-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-10 md:pl-24'>
                    <div className='lg:w-3/4 space-y-8'>
                        <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-3'>
                            <button className='btn text-white bg-[#FF3811]'>Discover More</button>
                            <button className='btn text-white btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-10 bottom-5 ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full " />

                <div className='absolute text-white top-0 flex items-center h-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-10 md:pl-24'>
                    <div className='lg:w-3/4 space-y-8'>
                        <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-3'>
                            <button className='btn text-white bg-[#FF3811]'>Discover More</button>
                            <button className='btn text-white btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-10 bottom-5 ">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full " />

                <div className='absolute text-white top-0 flex items-center h-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-10 md:pl-24'>
                    <div className='lg:w-3/4 space-y-8'>
                        <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-3'>
                            <button className='btn text-white bg-[#FF3811]'>Discover More</button>
                            <button className='btn text-white btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-10 bottom-5 ">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full " />

                <div className='absolute text-white top-0 flex items-center h-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-10 md:pl-24'>
                    <div className='lg:w-3/4 space-y-8'>
                        <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-3'>
                            <button className='btn text-white bg-[#FF3811]'>Discover More</button>
                            <button className='btn text-white btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-10 bottom-5 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full " />

                <div className='absolute text-white top-0 flex items-center h-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-10 md:pl-24'>
                    <div className='lg:w-3/4 space-y-8'>
                        <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-3'>
                            <button className='btn text-white bg-[#FF3811]'>Discover More</button>
                            <button className='btn text-white btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-10 bottom-5 ">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;