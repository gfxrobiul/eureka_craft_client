// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from "react-router-dom";

const Banner = () => {
    const bannerData = useLoaderData();
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {
        bannerData.map(data =>   <SwiperSlide key={data.id}>
            <div
              className="hero lg:h-[700px] mt-10"
              style={{
                backgroundImage: `url(${data.photo})`
              }}
            >
              <div className="hero-overlay bg-opacity-70"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="p-10  md:w-1/2">
                  <h1 className="mb-5 lg:text-5xl text-3xl font-bold">{data.title}</h1>
                  <p className="mb-5">{data.description}
                  </p>
                  {/* <button className="btn btn-secondary">Get Started</button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>)
      }
      </Swiper>
    </div>
  );
};

export default Banner;
