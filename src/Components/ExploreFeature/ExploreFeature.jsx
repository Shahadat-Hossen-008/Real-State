import explore from "../../assets/ExploreFeature.png";

function ExploreFeature() {
  return (
    <div className="w-10/12 mx-auto my-20 px-10">
      <div className="flex justify-between items-center gap-10">
        <div className="flex-1">
          <h2 className="text-5xl font-gil-bold">
          Explore Our Exclusive<br/>
           <span className="text-primary">Real Estate</span> Feature
          </h2>
          <p className="text-paragraph my-8">A real estate feature sheet is a list of features and updates for your seller's home. The Multiple Listing Services (MLS) has a lot of great information already built in but having a feature sheet can help your sellers showcase their home in a more personal way.</p>
          {/* here showing main point */}
          <div className="flex  items-center gap-20">
          <div >
           <div className=" flex  items-center gap-2 py-2"> <span className="rounded-full bg-primary text-white  w-8 h-8 flex justify-center items-center">1</span><p className="text-paragraph">Properties</p></div>
           <div className=" flex  items-center gap-2 py-2"> <span className="rounded-full bg-primary text-white  w-8 h-8 flex justify-center items-center">2</span><p className="text-paragraph">Luxury Asset</p></div>
           <div className=" flex items-center gap-2 py-2"> <span className="rounded-full bg-primary text-white  w-8 h-8 flex justify-center items-center">3</span><p className="text-paragraph">Market Insights</p></div>
           <div className=" flex  items-center gap-2 py-2"> <span className="rounded-full bg-primary text-white  w-8 h-8 flex justify-center items-center">4</span><p className="text-paragraph">Marketing Tool</p></div>
          </div>
          <div>
           <div className=" flex items-center gap-2 py-2"> <span className="rounded-full bg-primary text-white  w-8 h-8 flex justify-center items-center">5</span><p className="text-paragraph">Professional Service</p></div>
           <div className=" flex items-center gap-2 py-2"> <span className="rounded-full bg-primary text-white  w-8 h-8 flex justify-center items-center">6</span><p className="text-paragraph">Networking & event</p></div>
           <div className=" flex items-center gap-2 py-2"> <span className="rounded-full bg-primary text-white  w-8 h-8 flex justify-center items-center">7</span><p className="text-paragraph">Education & Resource</p></div>
           <div className=" flex items-center gap-2 py-2"> <span className="rounded-full bg-primary text-white  w-8 h-8 flex justify-center items-center">8</span><p className="text-paragraph">Referral & Reward</p></div>
          </div>
          </div>
        </div>
        <div className="w-full flex-1">
            <img src={explore} alt="explore feature" className="w-[600px] h-[400px]" />
        </div>
      </div>
    </div>
  );
}

export default ExploreFeature;
