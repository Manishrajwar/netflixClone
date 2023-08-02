import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => {
    
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }


  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    navigate("/ChoosePlan");
  }
  return (
   
    <form className="flex flex-col w-full">
    
        <label>
          <p className="font-bold text-xl ">Email:</p>
          <input
          required
            type="email"
            name="email"
            placeholder="enter your email"
            value={formData.email}
            onChange={changeHandler}
            className="border-2 border-black w-[80%] h-12 text-center"
            />
        </label>

        <label >
          <p className="font-bold text-xl ">Password</p>
          <input
          required
          placeholder="create password"
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="border-2 border-black w-[80%] h-12 text-center"
            />
        </label>

        <p className="text-blue-700 cursor-pointer hover:underline">Forget your password?</p>
<br />
        <button className="bg-red-600 text-white w-[80%] text-center rounded-md h-12 hover:bg-opacity-80 transition-all  text-xl duration-200" onClick={submitHandler}>Submit</button>
      </form>
       
   
  );
}

export default Form;
