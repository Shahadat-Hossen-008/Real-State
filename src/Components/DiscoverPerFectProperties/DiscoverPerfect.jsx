import { CiClock1 } from "react-icons/ci"
import discover from "../../assets/discover.jpg"
import { Button } from "@mui/material"
import { TbTargetArrow } from "react-icons/tb"
import { LiaHandshake } from "react-icons/lia"
function DiscoverPerfect () {
  return (
    <div className="w-10/12 mx-auto px-20">
        <h2 className="text-5xl text-center font-gil-bold">Discover the
        <br/>
        Perfect <span className="text-primary">Properties</span> with Ease</h2>
        <div className="flex justify-between items-center gap-10">
            <div className="mt-20 flex-1">
                <div className="flex justify-start gap-3 mb-8">
                <CiClock1 className="text-5xl mt-4 " />
                <div>
                    <h3 className="text-3xl font-gil-bold mb-2">Ready to Move In</h3>
                    <p className="text-paragraph">Exciting times! Being "ready to move" in real estate typically means you're prepared to find and purchase a new property.</p>
                </div>
                </div>
                <div className="flex justify-start gap-3 mb-8">
                <TbTargetArrow className="text-5xl mt-4 " />
                <div>
                    <h3 className="text-3xl font-gil-bold mb-2">Off Plan Properties</h3>
                    <p className="text-paragraph">Off-plan properties refer to real estate units that are being constructed or developed, but have not yet been completed or occupied.</p>
                </div>
                </div>
                <div className="flex justify-start gap-3 mb-8">
                <LiaHandshake className="text-5xl mt-4 " />
                <div>
                    <h3 className="text-3xl font-gil-bold mb-2">Secondary Market</h3>
                    <p className="text-paragraph">The secondary market in real estate refers to the existing pool of homes, commercial properties, and other types of properties that are already built and occupied.</p>
                    <Button variant="contained" className="!rounded-full !p-3 !mt-8">Explore Noe</Button>
                </div>
                </div>
                
            </div>
            <div className="flex-1 p-2 border-t-[40px] border-l-[40px] border-blue-300 rounded-3xl inline-block">
            <img src={discover} alt="discover properties" className="w-[520px] h-[420px] object-cover rounded-2xl"/>
            </div>
            <div>
            </div>
        </div>

    </div>
  )
}

export default DiscoverPerfect