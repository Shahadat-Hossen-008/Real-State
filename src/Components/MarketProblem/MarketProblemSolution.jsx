
import marketing from "../../assets/marketing.png";
import speaker from "../../assets/speaker.png";
import repair from "../../assets/repair.png";
import { Button } from "@mui/material";

function MarketProblemSolution () {
  return (
    <div className="w-10/12 mx-auto my-20 px-10">
      <h2 className="text-5xl text-center font-gil-bold">
      Marketing <span className="text-primary">problem</span> solution 
      </h2>
      <p className="text-paragraph mt-8 text-center">
      Luxury assets, particularly in the realm of real estate, refer to
        <br />
        high-end properties that are valued for their exclusivity, location, design,
        <br /> and amenities.
      </p>
      <div className="flex justify-between items-center mt-10 gap-8">
        <div className="flex-1">
          <div className="flex justify-start gap-3 mb-8">
            <img src={speaker} alt="speaker" className="w-[30px] h-[30px] mt-5" />
            <div>
              <h3 className="text-3xl font-gil-bold mb-2">Marketing Solution</h3>
              <p className="text-paragraph">
              Real estate marketing solutions refer to the marketing strategies and tactics used to promote properties, attract potential buyers, and increase sales. Effective real estate marketing solutions can help agents and brokers differentiate themselves, build their brand, and stay ahead of the competition.
              </p>
            </div>
          </div>
          <div className="flex justify-start gap-3 mb-8">
            <img src={repair} alt="repair" className="w-[30px] h-[30px] mt-5" />
            <div>
              <h3 className="text-3xl font-gil-bold mb-2">Marketing Tools</h3>
              <p className="text-paragraph">
              Real estate marketing tools are essential for attracting and retaining clients in the competitive real estate industry. These tools help agents and brokers to effectively promote their properties, engage with potential buyers and sellers, and streamline their workflow.
              </p>
          <Button variant="contained" className="!rounded-full !p-3 !mt-8">Explore More</Button>
            </div>
          </div>
        </div>
        <div
          className=" p-2 border-t-[40px] border-l-[40px] border-b-[40px]
         border-red-100 rounded-3xl "
        >
          <img
            src={marketing}
            alt="marketing"
            className="w-[520px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default MarketProblemSolution