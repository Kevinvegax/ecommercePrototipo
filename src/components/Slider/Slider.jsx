import "./Slider.scss";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {

  return (
    <Carousel>
                <div>
                    <img src={"img/slider1.jpg"} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="img/slider1.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="img/slider1.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  );
};

export default Slider;
