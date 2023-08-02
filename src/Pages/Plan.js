import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Form from "../Components/Form";

function Plan(){
return(
   <Link to="/plan" >
      <div className="w-12/13 h-full max-w-[1500px] mx-auto  ">
      <Navbar type={"Sign in"} />
      </div>
  
  {/* this is for line */}
  <div className="w-full h-[1px] bg-black opacity-20"></div>

  <div className="w-full h-[90vh] gap-4 flex flex-col items-center justify-center cursor-auto">
   <div className="flex flex-col gap-5 w-[450px]">

      <p>STEP 1 OF 3</p>
      <h1 className="font-bold text-3xl opacity-80">
        Welcome back! <br />
        Joining Netflix is easy.
      </h1>
      <p className="font-bold text-xl">Enter your password and you'll be watching in <br /> no time.</p>

  <Form/>
   </div>
      </div>



   </Link>
)
}

export default Plan;