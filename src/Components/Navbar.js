function Navbar(props){
    const type = props.type;
    const id = props.id;
return (

    <nav className="flex justify-between w-12/13 max-w-[1400px] mx-auto pt-4 items-center ">
        <h1 className="text-[#e50914] text-[3rem] font-bold">NETFLIX</h1>
        <button className={`${id==='red'?('bg-[#e50914] text-white  hover:bg-opacity-70 transition-all duration-200 rounded-md h-10  px-3 text-center'):('text-black text-xl opacity-80 hover:underline')}  font-bold border-none`}>{type}</button>
    </nav>
    )
}

export default Navbar;