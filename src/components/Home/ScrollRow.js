import Slider from "react-slick";
import ScrollRowBox from "./ScrollRowBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollRowCSS from "./ScrollRow.module.css";
import './ScrollRow.css';
import React, { useRef  } from 'react'

function ScrollRow(props) {
    const customSlider = useRef();

    const next = () => {
        customSlider.current.slickNext()
      }
    
      const previous = () => {
        customSlider.current.slickPrev()
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      
    return (
        <div className={ScrollRowCSS.container}>
            <h2> Multiple items </h2>
            <Slider {...settings} ref={customSlider}>
              <ScrollRowBox />
              <ScrollRowBox />
              <ScrollRowBox />
              <ScrollRowBox />
              <ScrollRowBox />
              <ScrollRowBox />
            </Slider>

            <div className={ScrollRowCSS.prevNxtBtnContainer}>
                <div className={ScrollRowCSS.viewAllBtn}>
                <button className="button" onClick={null}>
                    View All
                </button>
                </div>
                <button className="button" onClick={previous}>
                    Previous
                </button>
                <button className="button" onClick={next}>
                    Next
                </button>
            </div>

        </div>
  );
    
}

export default ScrollRow

