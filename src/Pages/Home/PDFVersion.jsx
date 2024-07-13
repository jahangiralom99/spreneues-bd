import { IoMdArrowDropright } from "react-icons/io";
import pdf from "../../assets/pdf-version.jpg";
const PDFVersion = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-28">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="md:flex-1">
          <h2 className="text-xl font-bold">আপনার অনলাইন ব্যবসার সেল কমছে?</h2>
          <h2 className="text-xl font-bold mt-4">
            জেনে নিন পেছনের কারণ এবং সমাধান!
          </h2>
          <p className="mt-12 font-bold">
            আপনার অনলাইন সেল বাড়াতে পারছেন না? আমাদের বই "যে পাপে সেল কমে" পড়ুন
            এবং শিখুন কিভাবে সেল কমার পেছনের কারণ এবং সেগুলো সমাধান করতে পারেন।
          </p>
          <h1 className="text-3xl font-bold mt-10">
            কেন এই বই আপনার জন্য প্রয়োজনীয়?
          </h1>
          <div className="mt-8 space-y-6">
            <p className="flex items-center gap-5">
              <IoMdArrowDropright />
              <span className="font-bold">বাস্তব অভিজ্ঞতা:</span> লেখকের একযুগের
              অভিজ্ঞতা থেকে শিখুন।
            </p>
            <p className="flex items-center gap-5">
              <IoMdArrowDropright />
              <span className="font-bold">সহজ ভাষা:</span> সহজ ও প্রাঞ্জল ভাষায়
              লেখা।
            </p>
            <p className="flex items-center gap-5">
              {" "}
              <IoMdArrowDropright />
              <span className="font-bold">কার্যকর সমাধান:</span> প্রমাণিত কৌশল
              যা আপনি সহজেই প্রয়োগ করতে পারেন।
            </p>
            <p className="flex items-center gap-5">
              <IoMdArrowDropright />
              <span className="font-bold">আপডেটেড ইনফরমেশন:</span> বর্তমান
              মার্কেট ট্রেন্ড অনুযায়ী তথ্য।
            </p>
          </div>
          <div className="text-center mt-8 text-white">
            <button className="px-6 rounded-lg py-2 font-bold bg-[#FF0000] hover:bg-[#b11111]">
            আমি সেল বাড়াতে চাই
            </button>
          </div>
        </div>
        <div className="md:flex-1">
          <img className="md:w-[80%]" src={pdf} alt="pdf book image" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
        <div className="md:flex-1">
          <h2 className="text-xl font-bold">আপনার অনলাইন ব্যবসার সেল কমছে?</h2>
          <h2 className="text-xl font-bold mt-4">
            জেনে নিন পেছনের কারণ এবং সমাধান!
          </h2>
          <p className="mt-12 font-bold">
            আপনার অনলাইন সেল বাড়াতে পারছেন না? আমাদের বই "যে পাপে সেল কমে" পড়ুন
            এবং শিখুন কিভাবে সেল কমার পেছনের কারণ এবং সেগুলো সমাধান করতে পারেন।
          </p>
          <h1 className="text-3xl font-bold mt-10">
            কেন এই বই আপনার জন্য প্রয়োজনীয়?
          </h1>
          <div className="mt-8 space-y-6">
            <p className="flex items-center gap-5">
              <IoMdArrowDropright />
              <span className="font-bold">বাস্তব অভিজ্ঞতা:</span> লেখকের একযুগের
              অভিজ্ঞতা থেকে শিখুন।
            </p>
            <p className="flex items-center gap-5">
              <IoMdArrowDropright />
              <span className="font-bold">সহজ ভাষা:</span> সহজ ও প্রাঞ্জল ভাষায়
              লেখা।
            </p>
            <p className="flex items-center gap-5">
              {" "}
              <IoMdArrowDropright />
              <span className="font-bold">কার্যকর সমাধান:</span> প্রমাণিত কৌশল
              যা আপনি সহজেই প্রয়োগ করতে পারেন।
            </p>
            <p className="flex items-center gap-5">
              <IoMdArrowDropright />
              <span className="font-bold">আপডেটেড ইনফরমেশন:</span> বর্তমান
              মার্কেট ট্রেন্ড অনুযায়ী তথ্য।
            </p>
          </div>
          <div className="text-center mt-8 text-white">
            <button className="px-6 rounded-lg py-2 font-bold bg-[#FF0000] hover:bg-[#b11111]">
            আমি সেল বাড়াতে চাই
            </button>
          </div>
        </div>
        <div className="md:flex-1">
          <img className="md:w-[80%]" src={pdf} alt="pdf book image" />
        </div>
      </div>
    </div>
  );
};

export default PDFVersion;
