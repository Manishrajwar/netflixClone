import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

function Title(){
  
return (

    <div className="flex flex-col  w-full h-full justify-center items-center text-center gap-6">
       <div className="flex flex-col gap-2">

        <p className="text-white text-2xl font-bold">Welcome back!</p>
        <p className="text-white text-[3rem] font-extrabold">Unlimited movies , TV shows and more.</p>
        <p className="text-white text-2xl font-bold">watch anywhere. Cancel anytime</p>
       </div>
       <Link to="/ChoosePlan">
       <button className="bg-[#e50914] flex items-center gap-1 rounded-md p-3 text-white font-bold text-2xl hover:bg-[#c1060f] transition-all duration-150">Finish Sign Up 
       <AiOutlineDown className="-rotate-90 mt-1 font-bold" />
        </button>
       </Link>

    </div>
)
}

export default Title;