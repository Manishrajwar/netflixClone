import { TfiCheck } from "react-icons/tfi";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";

function ChoosePlan() {
    
  return (
    <div className="w-full h-screen">
      <Navbar type={"Sign out"} id={"black"} />

      {/* this is for line */}
      <div className="w-full h-[1px] bg-black opacity-20"></div>

      <div className="flex flex-col h-[80%] gap-6 mx-auto w-11/12 max-w-[350px] items-center justify-center  ">
        <div className="w-[40px] h-[40px] rounded-full border-2 flex justify-center items-center border-[#e50914]">
          <TfiCheck className="text-[#e50914] font-bold text-xl" />
        </div>
        <p className="text-black font-semibold">STEP 1 OF 3</p>
        <p className="text-4xl opacity-80 font-bold ">Choose your plan.</p>

        <div className="flex flex-col gap-7 text-center text-xl">
          <div className="flex items-center gap-2">
            <TfiCheck className="text-[#e50914] font-bold h-5 w-5" />
            <p>No commitments, cancel anytime.</p>
          </div>
          <div className="flex items-center gap-2">
            <TfiCheck className="text-[#e50914] font-bold h-5 w-5" />
            <p className="text-left">Everything on Netflix for one low price.</p>
          </div>
          <div className="flex items-center gap-2">
            <TfiCheck className="text-[#e50914] font-bold h-5 w-5" />
            <p>No ads and no extra fees. Ever.</p>
          </div>

<Link to="/ChoosePlan2">
          <button className="bg-red-600 mx-auto mt-4  text-white text-center rounded-md w-[80%] py-4 hover:bg-red-500 transition-all  text-2xl font-lightbold duration-200" >
            Next
          </button>
</Link>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlan;
