import Navbar from "../Components/Navbar";
import { TfiCheck } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

function ChoosePlan2() {

    const [redColor , setRedColor] = useState("1");
    
  return (
    <div className="w-full h-screen">
      <Navbar type={"Sign out"} id={"black"} />

      {/* this is for line */}
      <div className="w-full h-[1px] bg-black opacity-20"></div>

      <div className="w-11/12 max-w-[1000px]  h-full pt-6 pl-8 pr-10 flex flex-col gap-8 mx-auto">
        

<div>

      <p className="text-black font-semibold">STEP 2 OF 3</p>
      <p className="text-3xl opacity-80 font-bold ">Choose the plan that’s right for you</p>

      <div className="flex flex-col gap-3 mt-3 text-center text-xl">
        <div className="flex items-center gap-2">
          <TfiCheck className="text-[#e50914] font-bold h-5 w-5" />
          <p>Watch all you want. Ad-free.</p>
        </div>
        <div className="flex items-center gap-2">
          <TfiCheck className="text-[#e50914] font-bold h-5 w-5" />
          <p className="text-left">Recommendations just for you.</p>
        </div>
        <div className="flex items-center gap-2">
          <TfiCheck className="text-[#e50914] font-bold h-5 w-5" />
          <p>Change or cancel your plan anytime.</p>
        </div>
</div>
      </div>

      {/* boxes */}

<div className="flex justify-between">
      {/* left */}
     <div className="flex flex-col gap-[2.08rem] " >
     <div className="w-[100px] h-[100px] bg-white grid place-content-center text-white font-bold text-xl "></div>
     <p>Monthly price</p>
     <p>Video quality</p>
     <p>Resolution</p>
     <p>Devices you can use to watch</p>
    
     </div>

     {/* right */}
     <div className="flex gap-6">
        <Card  title={"Mobile"} price={'₹ 149'} quality={"Good"} resolution={"480p"} device={"phone"} id={'1'} redColor={redColor} setRedColor={setRedColor} />
        <Card title={"Basic"} price={'₹ 199'} quality={"Good"} resolution={"720p"} device={"phone"} id={'2'} redColor={redColor} setRedColor={setRedColor} />
        <Card title={"standard"} price={'₹ 499'} quality={"Better"} resolution={"1080p"} device={"phone"} id={'3'} redColor={redColor} setRedColor={setRedColor} />
        <Card title={"Premium"} price={'₹ 649'} quality={"Best"} resolution={"4K+HDR"} device={"phone"} id={'4'} redColor={redColor} setRedColor={setRedColor} />
     </div>
</div>


<div className="flex flex-col gap-4">
    <p className="text-black opacity-70 text-sm">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
    <p className="opacity-70 text-sm">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
</div>

<div className="w-full text-center">
    <Link to="/ChoosePlan3">
<button className="bg-red-600 mt-4  text-white text-center rounded-md w-[50%] py-4 hover:bg-red-500 transition-all  text-2xl font-lightbold duration-200 mb-7" >
            Next
          </button>
    </Link>
</div>

    </div>
      </div>
  );
}

export default ChoosePlan2;
