import { Button } from "@mui/material"
import chilGuy from "../../assets/chilmood.jpg"
function AboutUs () {
  return (
    <div className="w-9/12 mx-auto my-20 px-10">
        <div className="grid grid-cols-4  gap-4 relative">
            <div className=" w-full col-span-2 relative">
                <img src={chilGuy} alt="chillingGuy" className="w-[520px] h-[500px] object-cover rounded-xl" />
                <div className="absolute inset-0 bg-white p-4 rounded-xl shadow-lg w-[247px] h-[100px] -top-12 left-56">
                <p className="font-gil-medium">Agents</p>
                    <h4 className="text-3xl font-gil-medium">7530</h4>
                    <p className="text-paragraph">Compared to ($3400 last year)</p>
                </div>
                <div className="absolute inset-0 bg-white p-5 rounded-xl shadow-lg w-[267px] h-[140px] top-80 -left-24">
                <p className="font-gil-medium">Developer</p>
                    <h4 className="text-3xl font-gil-medium">12350</h4>
                    <p className="text-paragraph">Compared to ($3400 last year)</p>
                </div>
            </div>
            <div className="col-span-1">
            <h2 className="text-5xl text-center font-gil-bold">About <span className="text-primary">Us</span></h2>
            <div className="absolute inset-0 shadow-lg rounded-xl bg-white top-20 left-80 p-5 h-[350px]">
                <p className="text-pTag mb-8">real estate company typically provides an overview of the organization's mission, history, values, and team members. It's an opportunity for potential clients to get to know the company's culture and what sets them apart from others in the industry</p>
                <p className="text-pTag mb-8">This section may include information on the company's expertise, services offered, and community involvement. Additionally, it may highlight any notable achievements or awards received by the company.</p>
                <Button variant="contained" className="!rounded-full !p-3 !mt-8">Explore More</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs