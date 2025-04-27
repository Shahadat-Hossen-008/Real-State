import Certificate from "./Components/Certification/Certification"
import DiscoverPerfect from "./Components/DiscoverPerFectProperties/DiscoverPerfect"
import ExploreFeature from "./Components/ExploreFeature/ExploreFeature"
import FaqSection from "./Components/FAQSection/FaqSection"
import LuxeryAsset from "./Components/LuxuryAsset/LuxeryAsset"
import MarketProblemSolution from "./Components/MarketProblem/MarketProblemSolution"
import ReferralAndReward from "./Components/ReferralAndRewards/ReferralAndReward"


function Home() {
  

  return (
    <>
    <ExploreFeature/>
      <DiscoverPerfect/>
      <LuxeryAsset/>
      <MarketProblemSolution/>
      <Certificate/>
      <ReferralAndReward/>
      <FaqSection/>
    </>
  )
}

export default Home
