import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import work1 from "./../assets/work1.png";
import work2 from "./../assets/work2.png";
import work3 from "./../assets/work3.png";
import work4 from "./../assets/work4.png";
import Workcard from "./Workcard";
function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const videos = [
    {
      img: work1,
      video: "https://www.youtube.com/watch?v=yneYAJioTzw",
    },
    {
      img: work3,
      video: "https://youtu.be/WEr-BVxL4e0?si=pU_SBfBtlXFBceC-",
    },
    {
      img: work2,
      video: "https://youtu.be/-VPVWGfVsDM?si=29rO7ybYnPccnlEw",
    },
    {
      img: work4,
      video: "https://youtu.be/WEr-BVxL4e0?si=pU_SBfBtlXFBceC-",
    },
  ];
  const videos1 = [
    {
      img: work1,
      video: "https://www.youtube.com/watch?v=yneYAJioTzw",
    },
    {
      img: work3,
      video: "https://youtu.be/WEr-BVxL4e0?si=pU_SBfBtlXFBceC-",
    },
    {
      img: work2,
      video: "https://youtu.be/-VPVWGfVsDM?si=29rO7ybYnPccnlEw",
    },
    {
      img: work4,
      video: "https://youtu.be/WEr-BVxL4e0?si=pU_SBfBtlXFBceC-",
    },
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {videos.map((item, index) => (
          <Workcard item={item} index={index} />
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
