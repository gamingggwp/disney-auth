import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlick() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
        <Sliders {...settings}>
          <Wrap>
              <img loading="laze" src="/images/slider01.jpg" alt="" />
          </Wrap>
          <Wrap>
              <img loading="laze" src="/images/slider02.jpg" alt="" />
          </Wrap>
          <Wrap>
              <img loading="laze" src="/images/slider03.jpg" alt="" />
          </Wrap>
          <Wrap>
              <img loading="laze" src="/images/slider04.jpg" alt="" />
          </Wrap>
        </Sliders>
    );
}
export default ImgSlick
const Sliders = styled(Slider)`
  margin-top = 20px;
  ul li button {
      &: before{
          font-size: 10px;
          color: white;
      }
  }
  li.slick-active button: before{
      color: orange;
  }

  .slick-list{
      overflow: visible; //hidden
  }

  button{
      z-index: -2;
  }

`
const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        &:hover {
            border: 2px solid rgba(249, 249, 249, 0.8);
        }
    }
`

// export default function SimpleSlider() {
//     var settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//     };
//     return (
//       <Slider {...settings}>
//         <div>
//             <img loading="laze" src="/images/slider01.jpg" alt="" />
//         </div>
//         <div>
//             <img loading="laze" src="/images/slider02.jpg" alt="" />
//         </div>
//         <div>
//             <img loading="laze" src="/images/slider03.jpg" alt="" />
//         </div>
//         <div>
//             <img loading="laze" src="/images/slider04.jpg" alt="" />
//         </div>
//       </Slider>
//     );
//   }
