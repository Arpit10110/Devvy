import { Link } from "react-router-dom";

const GradientCard = ({ heading, subheading, redirectTo }:any) => {
  return (
    <>
        <div className="w-[30%] hover:scale-[1.03] transition-all   bg-gradient-to-r from-blue-500 to-purple-600 rounded-[1rem] items-center flex justify-center " >
            <div className="flex justify-center items-center flex-col gap-[2rem] " >
                <h2 className="text-[3rem] text-center font-bold font-tektur " >{heading}</h2>
                <p className="text-[2rem] text-center font-semibold " >{subheading}</p>
                <Link to={redirectTo} className="text-[2rem] border-[2px] px-[1rem] py-[0.4rem] rounded-[5px] font-bold bg-[#ffffff1f] font-tektur text-center"  >See More</Link>
            </div>
        </div>  
    </>
  );
};

export default GradientCard;
