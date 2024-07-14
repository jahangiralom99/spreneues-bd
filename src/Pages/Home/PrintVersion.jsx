/* eslint-disable react/no-unescaped-entities */
import { FaGripLinesVertical } from "react-icons/fa";
import video from "../../assets/Facebook_2.mp4";

const PrintVersion = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-12">
      <h1 className="text-3xl font-bold text-center ">
        বইটির প্রিন্ট ভার্সন যারা
      </h1>
      <h1 className="text-3xl font-bold text-center mt-4">
        পড়েছেন তারা কি বলছেন?
      </h1>
      <p className="max-w-screen-md mx-auto mt-5 text-center font-bold">
        যে পাপে সেল কমে" বইটি পড়ে আমাদের অনেক পাঠক তাদের মূল্যবান মতামত শেয়ার
        করেছেন। তাদের অভিজ্ঞতা এবং প্রতিক্রিয়া আমাদের জন্য অত্যন্ত
        গুরুত্বপূর্ণ। নিচে কয়েকজন পাঠকের রিভিউ শেয়ার করা হল:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-28 ">
        <div className="space-y-5 border p-6 ">
          <video className="lg:-mt-16 -mt-8" controls src={video}></video>
          <div className=" p-5">
            <p>
              <FaGripLinesVertical className="text-2xl text-[#fb862d]" />
            </p>
            <p>
              সৈয়দ মাহাদী, ইউ এস এ এর একটা প্রতিষ্ঠিত ইকমার্স ব্যাবসায়কে নেতৃত্ব
              দিচ্ছেন চিফ অপারেটিং অফিসার হিসেবে। যে পাপে সেল কমে বইটি সম্পর্কে
              তিনি তার মতামত জানালেন।
            </p>
          </div>
        </div>
        <div className="space-y-5 border p-6 ">
          <video className="lg:-mt-16 -mt-8" controls src={video}></video>
          <div className=" p-5">
            <p>
              <FaGripLinesVertical className="text-2xl text-[#fb862d]" />
            </p>
            <p>
              সৈয়দ মাহাদী, ইউ এস এ এর একটা প্রতিষ্ঠিত ইকমার্স ব্যাবসায়কে নেতৃত্ব
              দিচ্ছেন চিফ অপারেটিং অফিসার হিসেবে। যে পাপে সেল কমে বইটি সম্পর্কে
              তিনি তার মতামত জানালেন।
            </p>
          </div>
        </div>
        <div className="space-y-5 border p-6 ">
          <video className="lg:-mt-16 -mt-8" controls src={video}></video>
          <div className=" p-5">
            <p>
              <FaGripLinesVertical className="text-2xl text-[#fb862d]" />
            </p>
            <p>
              সৈয়দ মাহাদী, ইউ এস এ এর একটা প্রতিষ্ঠিত ইকমার্স ব্যাবসায়কে নেতৃত্ব
              দিচ্ছেন চিফ অপারেটিং অফিসার হিসেবে। যে পাপে সেল কমে বইটি সম্পর্কে
              তিনি তার মতামত জানালেন।
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 md:mt-12">
        <button className="px-6 font-bold text-white rounded-lg py-2 bg-[#FF0000] hover:bg-[#b11111]">
          আপনিও বইটি কিনুন, এখনই!
        </button>
      </div>
    </div>
  );
};

export default PrintVersion;
