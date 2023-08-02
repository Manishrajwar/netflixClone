
function section1(props){
    const image = props.image;
    const para = props.para;
    const title = props.title;
    const reverse = props.reverse;

    return (
        <div className="bg-black w-full overflow">
            <div className={`w-11/12 h-full max-w-[1200px] mx-auto flex ${reverse==="reverse"?('flex-row-reverse'):('flex-row')} items-center pb-32 pt-32`}>


  {/* left part */}
<div className="w-[50%] flex flex-col gap-3">
<h1 className="text-white font-extrabold text-[3.3rem] ">{title}</h1>
<p className="text-white font-semibold text-2xl"> {para} </p>
</div>





{/* right part */}
<div className='w-[50%]'>
<img src={image} className=" w-[80%]" alt="" />
</div>





            </div>



        </div>
    )
}

export default section1;