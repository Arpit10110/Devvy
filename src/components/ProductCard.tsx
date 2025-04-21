
const ProductCard = ({img,price,title,tagline,coins}:any) => {
  return (
    <>
        <div className='w-[30%] bg-[#ffffff13]  rounded-[1rem]  p-[1rem] hover:scale-[1.03] transition-all  ' >
            <div className='w-full h-[50vh] ' >
                <img className='w-full h-[50vh] object-cover ' src={img} alt="" />
            </div>
            <div className='flex flex-col gap-[0.5rem] justify-center items-center ' >
                <h1 className='text-[2rem] font-tektur font-bold text-center ' >{title}</h1>
                <p className='text-[1.5rem] text-center font-semibold ' >{tagline}</p>
                <div className='flex gap-[3rem] ' >
                    <h1 className='text-[2rem] font-tektur font-bold' >{price}</h1>
                    <h1 className='text-[2rem] font-tektur font-bold' >🪙{coins}</h1>
                </div>
                <button className="font-tektur my-[1rem] bg-[#ffffff1a] px-[2rem] py-[0.5rem] text-[1.5rem] rounded-[5px] font-semibold cursor-pointer " >Add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductCard