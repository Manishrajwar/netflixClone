import { AiFillCaretDown } from "react-icons/ai";

function Card(props){
    const title = props.title;
    const price = props.price;
    const quality = props.quality;
    const resolution = props.resolution;
    const device = props.device;
    const redColor = props.redColor;
    const id = props.id;
    const setRedColor = props.setRedColor;
return (
    <div className="flex flex-col gap-6 text-center">
         {/* box */}
         <div onClick={()=>setRedColor(id)} className={`w-[120px] h-[120px] cursor-default
         ${id===redColor?('bg-[#e50914]'):('bg-red-400')} grid place-content-center text-white font-bold text-xl relative`}>{title}
         <div className={`absolute text-[#e50914]  text-3xl bottom-[-1.2rem] left-[3rem] ${id===redColor?('flex'):('hidden')}`}><AiFillCaretDown/></div>
         </div>

          <p className={`font-bold ${id===redColor?('text-[#e50914]'):('text-black opacity-70')} text-lg `}>{price}</p>
          <p className={`font-bold text-lg ${id===redColor?('text-[#e50914]'):('text-black opacity-70')}`}>{quality}</p>
          <p className={`font-bold text-lg ${id===redColor?('text-[#e50914]'):('text-black opacity-70')}`}>{resolution}</p>

          <p className={`font-bold text-lg ${id===redColor?('text-[#e50914]'):('text-black opacity-70')}`}>{device}</p>


    </div>
)
}

export default Card;