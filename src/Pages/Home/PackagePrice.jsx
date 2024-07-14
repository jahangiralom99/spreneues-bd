import img from "../../assets/sdsdsds-1-768x380.png";

const PackagePrice = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-12">
      <h1 className="text-4xl font-extrabold text-center">
        এই প্যাকেজটির মূল্য কত?
      </h1> <div className="text-center mt-12 md:mt-0">
        <button className="px-6 font-bold text-white rounded-lg py-2 bg-[#FF0000] hover:bg-[#b11111]">
          আমি রিসোর্স গুলো চাই
        </button>
      </div>
      <div className="mt-12 flex flex-col gap-8 md:flex-row items-center justify-between">
        <div className="md:flex-1">
          <img src={img} alt="" />
        </div>
        <div className="md:flex-1 ">
          <div className="space-y-3 font-bold">
            <p>
              পিডিএফ বইঃ <span className="text-red-500">২০০ টাকা</span>{" "}
            </p>
            <p>
              ওয়েবিনার রেকর্ডঃ <span className="text-red-500">২০০ টাকা</span>
            </p>
            <p>
              ১৫ টি প্রায়োগিক টেম্পলেটঃ{" "}
              <span className="text-red-500">১৫X ১০০ = ১৫০০ টাকা</span>{" "}
            </p>
            <p>
              মোট প্যাকেজ মূল্যঃ <span className="text-red-500">১৯০০ টাকা</span>
            </p>
          </div>
          <h1 className="text-red-500 mt-12 text-3xl font-extrabold">
            অফার মূল্যঃ ৩৯০ টাকা (সীমিত সময়ের জন্য)
          </h1>
        </div>
      </div>
      <div className="text-center mt-12 md:mt-0">
        <button className="px-6 font-bold text-white rounded-lg py-2 bg-[#FF0000] hover:bg-[#b11111]">
          আমি রিসোর্স গুলো চাই
        </button>
      </div>
    </div>
  );
};

export default PackagePrice;
