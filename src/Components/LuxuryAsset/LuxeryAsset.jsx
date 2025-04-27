import React from "react";
import { PiUserSoundThin } from "react-icons/pi";
import yacht from "../../assets/yacht.png";
import car from "../../assets/sedan.png";
import Luxury from "../../assets/luxaryasset.png";
function LuxeryAsset() {
  return (
    <div className="w-10/12 mx-auto my-20 px-10">
      <h2 className="text-5xl text-center font-gil-bold">
        Luxury <span className="text-primary">assets</span>
      </h2>
      <p className="text-paragraph mt-8 text-center">
        Luxury assets, particularly in the realm of real estate, refer to
        <br />
        high-end properties that are valued for their exclusivity, location,
        design,
        <br /> and amenities.
      </p>
      <div className="flex justify-between items-center mt-10 gap-8">
        <div
          className=" p-2 border-t-[40px] border-l-[40px] border-b-[40px]
         border-red-100 rounded-3xl "
        >
          <img
            src={Luxury}
            alt="luxury car"
            className="w-[520px] object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-start gap-3 mb-8">
            <img src={yacht} alt="yacht" className="w-[30px] h-[30px] mt-5" />
            <div>
              <h3 className="text-3xl font-gil-bold mb-2">Yachts</h3>
              <p className="text-paragraph">
                Real estate marketing solutions refer to the marketing
                strategies and tactics used to promote properties, attract
                potential buyers, and increase sales. Effective real estate
                marketing solutions can help agents and brokers differentiate
                themselves, build their brand, and stay ahead of the
                competition.
              </p>
            </div>
          </div>
          <div className="flex justify-start gap-3 mb-8">
            <img src={car} alt="car" className="w-[30px] h-[30px] mt-5" />
            <div>
              <h3 className="text-3xl font-gil-bold mb-2">Cars</h3>
              <p className="text-paragraph">
                Luxury cars refer to high-end vehicles that offer superior
                performance, aesthetics, and amenities. These cars are typically
                manufactured by prestigious brands such as Mercedes-Benz, BMW,
                and Audi, and are known for their unique features, comfort, and
                style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LuxeryAsset;
