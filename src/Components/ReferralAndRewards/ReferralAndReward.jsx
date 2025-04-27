import { Box, Button, TextField } from "@mui/material"
import { AiFillExclamationCircle } from "react-icons/ai"
import { BiDiamond, BiRightArrow } from "react-icons/bi"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoIosContacts } from "react-icons/io"
import { MdOutlineMailOutline } from "react-icons/md"
import { TfiEmail } from "react-icons/tfi"
import referral from '../../assets/Referal.png'
function ReferralAndReward () {
  return (
    <div className="w-11/12 mx-auto  my-20 px-10"><h2 className="text-5xl text-center font-gil-bold">
    Referral And<span className="text-primary"> Rewards</span>
  </h2>
  <p className="text-paragraph mt-8 text-center">
  A great topic! Referral and rewards programs are
    <br />
    strategies used by businesses to incentivize customer loyalty and word-of-
    <br />mouth marketing.
  </p>
  <div className="grid grid-cols-3 gap-5 my-20">
    <div>
        <h3 className="text-3xl font-gil-bold mb-2">Overview</h3>
        <div className="flex justify-between gap-3 w-full">
            <div className="flex justify-between items-center gap-2 border p-4 rounded-xl ">
            <IoIosContacts className="text-3xl"  />
            <div>
                <h5 className="text-2xl font-gil-bold">17804</h5>
                <p className="text-pTag font-gil-medium">Agents on Platform</p>
            </div>
            </div>
            <div className="flex justify-between items-center gap-2 border p-4 rounded-xl ">
            <MdOutlineMailOutline className="text-3xl"  />
            <div>
                <h5 className="text-2xl font-gil-bold">01</h5>
                <p className="text-pTag font-gil-medium">Our Invited User</p>
            </div>
            </div>
        </div>
        <Box
        sx={{
          width: "100%",
          height: '270px',
          borderRadius: 1,
          bgcolor: '#66B3FB',
          marginTop:'10px',
          padding: '20px', 
          borderRadius:'16px'
        }}
      >
      <h5 className="text-pTag font-gil-bold mb-3">Your Referral Link</h5>
        <TextField fullWidth defaultValue={"https://soft.royal.com/sign-up?ref=53f639cc-5096-4597-899d-7c28221caa04"}></TextField>
        <Button variant="contained" fullWidth sx={{background:"black", marginTop:"20px", marginBottom:"20px" }}>Copy</Button>
        <Button variant="contained" fullWidth>Show My Referral QR Code</Button>
      </Box>
    </div>
    <div>
        <h3 className="text-3xl font-gil-bold mb-2">Referral Point</h3>
        <Box
        sx={{
          width: "100%",
          height: '175px',
          bgcolor: '#EDF3F7',
          marginTop:'10px',
          marginBottom:"20px",
          padding: '20px', 
          borderRadius:'16px'
        }}
      >
      <div className="flex justify-between items-center border rounded-xl bg-white p-5 mb-5">
        <p className="font-gil-medium">Exchange rate:</p>
        <p className="flex items-center gap-1">1<TfiEmail/>
        <FaArrowRightLong/>
        100<BiDiamond/></p>
      </div>
      <div className="flex justify-between items-start gap-2">
      <AiFillExclamationCircle className="text-3xl" />
      <p className="font-gil-medium text-xl">Points are accrued only
      after verification of the invited user</p>
      </div>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: '175px',
          bgcolor: '#EDF3F7',
          marginTop:'10px',
          padding: '20px', 
          borderRadius:'16px'
        }}
      >
      <div className="flex justify-between items-center border rounded-xl bg-white p-5 mb-5">
        <p className="font-gil-medium">Exchange rate:</p>
        <p className="flex items-center gap-1">2<TfiEmail/>
        <FaArrowRightLong/>
        150<BiDiamond/></p>
      </div>
      <div className="flex justify-between items-start gap-2">
      <AiFillExclamationCircle className="text-3xl" />
      <p className="font-gil-medium text-xl">Points are accrued only
      after verification of the invited user</p>
      </div>
      </Box>
    </div>
    <div>
    <h3 className="text-3xl font-gil-bold mb-2">The game prize</h3>
    <img src={referral} className=" h-[370px] rounded-xl" />
    </div>
  </div>
  </div>
  )
}

export default ReferralAndReward