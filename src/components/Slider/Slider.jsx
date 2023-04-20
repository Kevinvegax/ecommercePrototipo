import "./Slider.scss";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {

  return (
    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
                <div>
                    <img src={"img/slider1.jpg"} alt="" />
                </div>
                <div>
                <img src="img/slider1.jpg" alt=""/>
                </div>
                <div>
                <img src="img/slider1.jpg" alt=""/>
                </div>
    </Carousel>
  );
};

export default Slider;
