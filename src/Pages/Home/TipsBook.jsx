/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/যে-পাপে-সেল-কমে-Final-images-1.jpg";
import image2 from "../../assets/যে-পাপে-সেল-কমে-Final-images-2.jpg";
import image3 from "../../assets/যে-পাপে-সেল-কমে-Final-images-3.jpg";
import image4 from "../../assets/যে-পাপে-সেল-কমে-Final-images-4.jpg";
import image5 from "../../assets/যে-পাপে-সেল-কমে-Final-images-5.jpg";
import image6 from "../../assets/যে-পাপে-সেল-কমে-Final-images-6.jpg";
import image7 from "../../assets/যে-পাপে-সেল-কমে-Final-images-0.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const TipsBook = () => {
  return (
    <div className="mt-28">
      <h1 className="text-4xl font-bold text-center px-5">যে পাপে সেল কমে" - আপনার ব্যবসার উন্নতির জন্য প্রয়োজনীয় পাঠ</h1>
      <p className="mt-8 px-5 text-center font-semibold">
        "যে পাপে সেল কমে" থেকে প্রথম কয়েকটি পেজ ফ্রি পড়ে দেখুন এবং আপনার ব্যবসার
        সেল বৃদ্ধির জন্য প্রয়োজনীয় টিপস ও কৌশল শিখুন। বইটির অনন্য বিষয়বস্তু এবং
        লেখকের বাস্তব অভিজ্ঞতা আপনাকে একটি সফল ব্যবসা গড়তে সাহায্য করবে।
      </p>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image7} alt="" />
          </SwiperSlide>
        </Swiper>
          </div>
         
    </div>
  );
};

export default TipsBook;
