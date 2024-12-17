import React from "react";
import Slider from "react-slick";
import yatra1 from "../../assets/images/Hotels/yatra1.webp"
import yatra2 from "../../assets/images/Hotels/yatra2.webp"
import yatra3 from "../../assets/images/Hotels/yatra3.webp"
import yatra4 from "../../assets/images/Hotels/yatra4.webp"

const SlickSlider = () => {

  var settings = {

    infinite: true,
    speed: 500,
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
      <div>

        <div className="">
          <div
            className="slider-container"
            style={{ width: "96%", margin: "auto" }}
          >
            <Slider {...settings} className="slick-hotel ">

              <div className="slick-img">
                <img src={yatra2} />
              </div>
              <div className="slick-img">
                <img src={yatra3} />
              </div>

              <div className="slick-img">
                <img src={yatra2} />
              </div>
              <div className="slick-img">
                <img src={yatra3} />
              </div>




            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlickSlider;
