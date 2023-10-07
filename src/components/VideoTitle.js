

function VideoTitle({title,desc}){
    return(
        <div className=" px-[3rem] pt-[15%] absolute ">
            <div className="bg-gradient-to-r from-black">
            <h1 className="text-[3rem] font-Roboto font-semibold text-white ">{title}</h1>
            <p className="mb-12 w-[30rem] text-[18px] text-white">{desc}</p>
            <button className="border rounded-md px-6 py-2 bg-white hover:bg-slate-200"><i className="fa-solid fa-play mr-[5px]"></i> Play</button>
            <button className="border rounded-md px-6 py-2 ml-4 bg-gray-300">
                <i className="fa-solid fa-circle-info mr-[5px]"></i> More Innfo</button>

                </div>
        </div>
    )
}

export default VideoTitle;