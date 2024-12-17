import React from 'react'
import Slider from "react-slick";
import { FaRegCircleRight } from "react-icons/fa6";

const Farecation = () => {
    var settings = {

        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,

                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="container-fluid container-xl mt-5 mb-5">
                <div className="row c-pp">
                    <div className="col-12 text-center">
                        <h3 className="ti-control">Greatest Reward, Luxury Travel,
                            Explore the <span className="color_red">Globe</span> with
                            Farecation
                        </h3>
                    </div>

                    <div className="">
                        <div
                            className="slider-container"
                            
                        >
                            <Slider {...settings} className="slick-hotel">

                                <div className="swiper-slide" >
                                    <div className="destination_container1" >
                                        <div className="destination_img1 relative">
                                            <img src="https://www.farecation.com/imgs/japan-image.png" />
                                            <div className="sav_i">Save Upto 10%</div>
                                        </div>
                                        <div className="destination_content_1">
                                            <div className="d-flex gap-2 align-items-center justify-content-between">
                                                <p className="destination_title p-0">Travel To Japan</p>
                                                <p className="destination_location p-0"><img src="https://www.farecation.com/imgs/loc-i.png" /> Asia</p>
                                            </div>
                                            <a href="https://www.farecation.com/asia/japan" className="des_read"><FaRegCircleRight /> Know More
                                                About</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" >
                                    <div className="destination_container1" >
                                        <div className="destination_img1 relative">
                                            <img src="https://www.farecation.com/imgs/cal-img.png" />
                                            <div className="sav_i">Save Upto 10%</div>
                                        </div>
                                        <div className="destination_content_1">
                                            <div className="d-flex gap-2 align-items-center justify-content-between">
                                                <p className="destination_title p-0">Travel To California</p>
                                                <p className="destination_location p-0"><img src="https://www.farecation.com/imgs/loc-i.png" /> USA</p>
                                            </div>
                                            <a href="https://www.farecation.com/usa/california" className="des_read"><FaRegCircleRight /> Know More
                                                About</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" >
                                    <div className="destination_container1" >
                                        <div className="destination_img1 relative">
                                            <img src="https://www.farecation.com/imgs/san-image.png" />
                                            <div className="sav_i">Save Upto 10%</div>
                                        </div>
                                        <div className="destination_content_1">
                                            <div className="d-flex gap-2 align-items-center justify-content-between">
                                                <p className="destination_title p-0">Travel To San Jose</p>
                                                <p className="destination_location p-0"><img src="https://www.farecation.com/imgs/loc-i.png" /> USA</p>
                                            </div>
                                            <a href="https://www.farecation.com/usa/san-jose" className="des_read"><FaRegCircleRight /> Know More
                                                About</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" >
                                    <div className="destination_container1" >
                                        <div className="destination_img1 relative">
                                            <img src="https://www.farecation.com/imgs/mexico-image.png" />
                                            <div className="sav_i">Save Upto 10%</div>
                                        </div>
                                        <div className="destination_content_1">
                                            <div className="d-flex gap-2 align-items-center justify-content-between">
                                                <p className="destination_title p-0">Travel To Mexico</p>
                                                <p className="destination_location p-0"><img src="https://www.farecation.com/imgs/loc-i.png" /> USA</p>
                                            </div>
                                            <a href="https://www.farecation.com/usa/mexico" className="des_read"><FaRegCircleRight /> Know More
                                                About</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" >
                                    <div className="destination_container1" >
                                        <div className="destination_img1 relative">
                                            <img src="https://www.farecation.com/imgs/on-image.png" />
                                            <div className="sav_i">Save Upto 10%</div>
                                        </div>
                                        <div className="destination_content_1">
                                            <div className="d-flex gap-2 align-items-center justify-content-between">
                                                <p className="destination_title p-0">Travel To Ontario</p>
                                                <p className="destination_location p-0"><img src="https://www.farecation.com/imgs/loc-i.png" /> Canada</p>
                                            </div>
                                            <a href="https://www.farecation.com/canada/ontario" className="des_read"><FaRegCircleRight /> Know More
                                                About</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" >
                                    <div className="destination_container1" >
                                        <div className="destination_img1 relative">
                                            <img src="https://www.farecation.com/imgs/torn-image.png" />
                                            <div className="sav_i">Save Upto 10%</div>
                                        </div>
                                        <div className="destination_content_1">
                                            <div className="d-flex gap-2 align-items-center justify-content-between">
                                                <p className="destination_title p-0">Travel To Toronto</p>
                                                <p className="destination_location p-0"><img src="https://www.farecation.com/imgs/loc-i.png" /> Canada</p>
                                            </div>
                                            <a href="https://www.farecation.com/canada/toronto" className="des_read"><FaRegCircleRight /> Know More
                                                About</a>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Farecation