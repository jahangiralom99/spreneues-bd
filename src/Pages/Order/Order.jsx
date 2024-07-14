/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { MdOutlineCallToAction } from "react-icons/md";
import image from "../../assets/WhatsApp-Image-2024-06-07-at-1.52.44-AM.jpeg";
import logo from "../../assets/logo_icon.webp";
import { FaLock } from "react-icons/fa";

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-24 bg-[#f4f8fa] p-8">
      <div className="space-y-8 max-w-screen-lg mx-auto">
        <h1 className="text-2xl font-bold text-center">
          "যে পাপে সেল কমে" উদ্যোক্তা প্যাকেজটি এখনই কিনুন এবং আপনার ব্যবসার সেল
          বৃদ্ধির যাত্রা শুরু করুন!
        </h1>
        <p className="font-semibold text-center">
          আপনার অর্ডার সম্পন্ন করতে নিচের ফর্মটি পূরণ করুন এবং আপনার পেমেন্ট
          প্রদান করুন। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই আপনি মেইলে প্যাকেজটির
          ডাউনলোড লিঙ্ক পাবেন।
        </p>
      </div>
      <div className="bg-white border rounded mt-12 max-w-screen-lg mx-auto  p-6">
        <p className="flex items-center gap-2">
          <MdOutlineCallToAction className="rotate-180 text-red-500" />
          Returning customer?{" "}
          <span className="text-red-500">Click here to login</span>
        </p>
        <div className="flex flex-col gap-8 md:flex-row justify-between mt-10 ">
          <div className="md:flex-1">
            <h2 className="font-bold">প্রয়োজনীয় তথ্য</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার নাম (optional)
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="নাম লিখুন"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  মোবাইল নাম্বার <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="number"
                  {...register("number", { required: true })}
                  placeholder="মোবাইল নাম্বার লিখুন"
                  id="number"
                  name="number"
                  autoComplete="number"
                />
                {errors.number && (
                  <p className="text-red-600">
                    মোবাইল নাম্বার তথ্যটি প্রয়োজনীয়
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  ইমেইল <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="ইমেইল এড্ড্রেস লিখুন"
                  id="email"
                  name="email"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-600">ইমেইল তথ্যটি প্রয়োজনীয়</p>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm mt-2">
                <input
                  className="accent-red-500"
                  type="checkbox"
                  name=""
                  id=""
                />
                Create an account?
              </div>
            </form>
          </div>
          <div className="md:flex-1">
            <h2 className="font-bold">আপনার অর্ডার</h2>
            <div className="flex  text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Product</p>
              <p>SubTotal</p>
            </div>
            <p className="border-b-2 border-dashed mt-2"></p>
            <div className="mt-5 flex items-center justify-between gap-3  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <img className="w-12 rounded" src={image} alt="" />
                <p>
                  যে পাপে সেল কমে - উদ্যোক্তা <br /> প্যাকেজ
                </p>
              </div>
              <div>
                <p>× 1 390.00৳ </p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5"></p>
            <div className="flex  text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>SubTotal</p>
              <p>390</p>
            </div>
            <p className="border-b-2 border-dashed mt-5 "></p>
            <div className="flex  text-sm font-bold justify-between items-center gap-3 mt-5">
              <p>Total</p>
              <p>390</p>
            </div>
            <div className="bg-[#f4f8fa] p-4 mt-5 rounded">
              <div className="flex items-center gap-3">
                <p>অনলাইন পেমেন্ট</p>
                <img src={logo} alt="" />
              </div>
              <p className="p-4 bg-white mt-4 text-sm">
                বিকাশ, নগদ, ক্রেডিট কার্ড, ডেবিট কার্ড দিয়ে পেমেন্ট করতে ক্লিক
                করুন
              </p>
            </div>
            <p className="mt-2 text-[#777] text-[12px] font-medium">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <span className="text-red-500">privacy policy.</span>
            </p>
            <div className="flex items-center gap-3 text-sm mt-5">
              <input className="accent-red-500" type="checkbox" name="" id="" />
              <p>
                I have read and agree to the website{" "}
                <span className="text-red-500">terms and conditions *</span>
              </p>
            </div>
            <div className="text-center mt-12 md:mt-12">
              <button className="px-6 w-full flex items-center justify-center flex-col font-bold text-white rounded-lg py-2 bg-[#FF0000] hover:bg-[#b11111]">
                <FaLock />
                অর্ডার করুন 390.00৳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
