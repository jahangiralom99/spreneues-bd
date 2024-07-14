/* eslint-disable react/no-unescaped-entities */
import profile from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="max-w-screen-xl bg-[#f4f8fa] mx-auto px-6 mt-12 rounded-xl">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between p-8">
        <div className="md:flex-1 space-y-7">
          <h1 className="text-4xl font-extrabold ">আমি তানভীর রেজোয়ান,</h1>
          <h4 className="text-[#869498] ">ডিজিটাল মার্কেটিং স্ট্রাটেজিস্ট</h4>
          <p className="font-bold">
            ২০১০ সাল থেকে বাংলাদেশে ও আন্তর্জাতিক বাজারে ইকমার্স, এফ কমার্স ও
            অনলাইন বিজনেস এর সেলস গ্রোথ নিয়ে কাজ করার অভিজ্ঞতার আলোকে লিখেছি,
            "যে পাপে সেল কমে। "
          </p>
          <hr />
          <h1 className="text-3xl font-bold">
            পনের <span className="text-red-500">দশ হাজার</span> শতাধিক
          </h1>
          <div className="flex items-center text-[#869498] text-sm gap-8 justify-between">
            <p>বছরের অভিজ্ঞতা</p>
            <p>এর অধিক উদ্যোক্তার প্রশিক্ষক</p>
            <p>জাতীয় ও আন্তর্জাতিক ব্যবসায়ের সেলস গ্রোথে অবদান</p>
          </div>
          <div className="text-center md:mt-12">
            <button className="px-6 text-xl font-bold text-white rounded-lg py-3 bg-[#FF0000] hover:bg-[#b11111]">
              কিনুন আমার লেখা বই যে পাপে সেল কমে
            </button>
          </div>
        </div>
        <div className="md:flex-1">
          <img className="rounded-full" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
