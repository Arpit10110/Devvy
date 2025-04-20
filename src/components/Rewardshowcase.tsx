import { topProducts } from '../data/homepagedata';
import ProductCard from './ProductCard';
import GradientCard  from "./GradientCard"
const Rewardshowcase = () => {
  return (
    <>
        <div className='mb-[8rem] cursor-default' >
            <div className='flex justify-center items-center' >
                <h1 className="text-[4rem] ml-[2rem]  font-tektur font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-violet-500 bg-clip-text text-transparent text-center w-fit  " >Rewardshowcase</h1>
            </div>
            <div className='flex flex-wrap justify-around mt-[7rem] gap-y-[5rem] ' >
              {
                 topProducts.map((i)=>{
                    return(
                        <ProductCard key={i.id} img={i.img} title={i.name} tagline={i.tagline} price={i.price} coins={i.coins} />
                    )
                 })
              }
              <GradientCard 
                heading="Exclusive Rewards" 
                subheading="Unlock epic rewards for your coding skills. Check out our store!" 
                redirectTo="/rewards" 
                />
            </div>
        </div>
    </>
  )
}

export default Rewardshowcase