import img1 from '../../../assets/images/homeCarousel/1.jpg';
import img2 from '../../../assets/images/homeCarousel/2.jpg';
import img3 from '../../../assets/images/homeCarousel/3.jpg';
import img4 from '../../../assets/images/homeCarousel/4.jpg';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className='ml-20 mt-32'>
                            <h2 className='text-6xl font-bold text-[white] mb-7'>Affordable <br />Price For Car <br />Servicing </h2>
                            <p className='text-lg text-[white] mb-7'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle text-4xl bg-[#FF3811] mr-5">
                            <FaCircleArrowLeft></FaCircleArrowLeft>
                        </a>
                        <a href="#slide2" className="btn btn-circle text-4xl bg-[#FF3811]">
                            <FaCircleArrowRight></FaCircleArrowRight>
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className='ml-20 mt-32'>
                            <h2 className='text-6xl font-bold text-[white] mb-7'>Affordable <br />Price For Car <br />Servicing </h2>
                            <p className='text-lg text-[white] mb-7'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  
                        <a href="#slide1" className="btn btn-circle text-4xl bg-[#FF3811] mr-5">
                            <FaCircleArrowLeft></FaCircleArrowLeft>
                        </a>
                        <a href="#slide3" className="btn btn-circle text-4xl bg-[#FF3811]">
                            <FaCircleArrowRight></FaCircleArrowRight>
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className='ml-20 mt-32'>
                            <h2 className='text-6xl font-bold text-[white] mb-7'>Affordable <br />Price For Car <br />Servicing </h2>
                            <p className='text-lg text-[white] mb-7'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle text-4xl bg-[#FF3811] mr-5">
                            <FaCircleArrowLeft></FaCircleArrowLeft>
                        </a>
                        <a href="#slide4" className="btn btn-circle text-4xl bg-[#FF3811]">
                            <FaCircleArrowRight></FaCircleArrowRight>
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className='ml-20 mt-32'>
                            <h2 className='text-6xl font-bold text-[white] mb-7'>Affordable <br />Price For Car <br />Servicing </h2>
                            <p className='text-lg text-[white] mb-7'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle text-4xl bg-[#FF3811] mr-5">
                            <FaCircleArrowLeft></FaCircleArrowLeft>
                        </a>
                        <a href="#slide1" className="btn btn-circle text-4xl bg-[#FF3811]">
                            <FaCircleArrowRight></FaCircleArrowRight>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;