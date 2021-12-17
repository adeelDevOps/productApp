import image1 from "../Images/image1.jpg";
import image2 from "../Images/slider-image2.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export const Header = () => {
    const slideImages = [
        {
          url: {image1},
          caption: ''
        },
        {
            url: {image2},
            caption: ''
        },
      ];
  return (
    <header>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* <div className="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block text-primary"></div>
          </div> */}
          <div className="carousel-item active">
            <img src={image2} class="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block text-primary"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
};
