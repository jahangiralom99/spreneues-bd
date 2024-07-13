/* eslint-disable react/no-unescaped-entities */
import { LiaHandPointRight } from "react-icons/lia";
import logo from "../../assets/Spreneurs-Logo-Horizental-white-2048x728.png";
import banner_image from "../../assets/banner-img.jpg";
import { IoMdStar } from "react-icons/io";

const Banner = () => {
  return (
    <div className="bg-images ">
      <div className="max-w-screen-xl mx-auto px-6">
        <img className="w-96 pt-3" src={logo} alt="" />
        <div className="flex flex-col md:flex-row gap-12 items-center  justify-between  p-6">
          <div className="space-y-6 text-white flex-1 p-4">
            <h1 className="font-extrabold text-5xl text-white">
              যে পাপে সেল কমে
            </h1>
            <p className="text-sm font-bold">উদ্যোক্তা প্যাকেজ</p>
            <h4 className="text-xl font-bold">
              অনলাইন বিজনেস এ কাঙ্ক্ষিত সেল না <br />
              আসার প্রধান ২০ টি কারণ ও তার প্রতিকার।
            </h4>
            <p className="font-bold text-sm">এই প্যাকেজ এ যা থাকছেঃ</p>
            <p className="flex items-center gap-4">
              <LiaHandPointRight />
              "যে পাপে সেল কমে" বইয়ের পিডিএফ
            </p>
            <p className="flex items-center gap-4">
              <LiaHandPointRight className="text-2xl" />
              "যে পাপে সেল কমে" ওয়ার্কশপের ভিডিও রেকর্ড বিজনেস প্লান, কন্টেন্ট
              প্লান, স্মার্ট গোল, সেলস ক্যালকুলেটর, কন্টেন্ট
            </p>
            <p className="flex items-center gap-4">
              <LiaHandPointRight className="text-2xl" />
              ক্যালেন্ডার সহ ১০ টিরও বেশি প্রায়োগিক কার্যকরী টেম্পলেট। যেগুলোর
              ব্যাবহার আপনার সেল গ্রোথ সহজ করবে।
            </p>
            <hr className="border border-white" />
          </div>
          <div className="flex-1">
            <img className="rounded-xl" src={banner_image} alt="" />
            <div className="text-white flex flex-col md:flex-row items-center gap-5 md:gap-16 mt-12">
              <div className="flex items-center text-2xl gap-1">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              <div>
                <button className="px-6 rounded-lg py-2 bg-[#FF0000] hover:bg-[#b11111]">
                  প্যাকেজটি কিনতে চাই
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
