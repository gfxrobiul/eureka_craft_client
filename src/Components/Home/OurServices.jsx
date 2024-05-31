import { BiSolidDiscount } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import { TbCheckupList, TbTruckDelivery } from "react-icons/tb";

const OurServices = () => {
    return (
        <div>
              <h2 className="mx-auto text-center text-4xl lg:my-16 my-8  poppinsFont font-bold ">Our Services</h2>
              {/* container  */}
             <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-8">

                {/* 1st card */}
            <div className="flex gap-2 border-gray-400   hover:border-blue-500 hover:scale-105 transition-all border-2 p-5">
                <h2 className="text-[100px]"> <TbTruckDelivery /> </h2>
                <div className="mt-5">
                    <h3 className="text-xl">FREE SHIPPING</h3>
                    <h4 className="text-gray-500">Capped At $105 Per Order</h4>
                </div>
            </div>

             {/* 2nd card */}
             <div className="flex gap-5 border-gray-400   hover:border-blue-500 hover:scale-105 transition-all border-2 p-5">
             <h2 className="text-[100px]"> <TbCheckupList /> </h2>
                <div className="mt-5">
                    <h3 className="text-xl">7-DAY RETURN</h3>
                    <h4 className="text-gray-500">Shop With Confidence</h4>
                </div>
            </div>

             {/* 3rd card */}
             <div className="flex gap-2 border-gray-400   hover:border-blue-500 hover:scale-105 transition-all border-2 p-5">
             <h2 className="text-[100px]"> <MdOutlinePayments /> </h2>
                <div className="mt-5">
                    <h3 className="text-xl">CONVENIENT PAYMENT</h3>
                    <h4 className="text-gray-500">Fast And Safe
</h4>
                </div>
            </div>

             {/* 4th card */}
             <div className="flex gap-2 border-gray-400   hover:border-blue-500 hover:scale-105 transition-all border-2 p-5">
             <h2 className="text-[100px]"> <BiSolidDiscount /> </h2>
                <div className="mt-5">
                    <h3 className="text-xl">FREE DISCOUNT CODE</h3>
                    <h4 className="text-gray-500">Weekly Offer</h4>
                </div>
            </div>



            </div>
        </div>
       
    );
};

export default OurServices;