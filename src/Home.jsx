import AboutUs from "./Components/AboutUs/AboutUs"
import Certificate from "./Components/Certification/Certification"
import DiscoverPerfect from "./Components/DiscoverPerFectProperties/DiscoverPerfect"
import ExploreFeature from "./Components/ExploreFeature/ExploreFeature"
import FaqSection from "./Components/FAQSection/FaqSection"
import LuxeryAsset from "./Components/LuxuryAsset/LuxeryAsset"
import MarketProblemSolution from "./Components/MarketProblem/MarketProblemSolution"
import OurAgentAndDeveloper from "./Components/OurAgentAndDeveloper/OurAgentAndDeveloper"
import ReferralAndReward from "./Components/ReferralAndRewards/ReferralAndReward"


function Home() {
  

  return (
    <>
    <OurAgentAndDeveloper/>
    <ExploreFeature/>
      <DiscoverPerfect/>
      <LuxeryAsset/>
      <MarketProblemSolution/>
      <Certificate/>
      <ReferralAndReward/>
      <AboutUs/>
      <FaqSection/>
    </>
  )
}

export default Home
