import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import HeroSection from "./Components/Navbar/HeroSection/HeroSection"
import Border from "./Components/Border/Border"
import CardSection from './Components/CardSection/CardSection'
import Footer from './Components/Footer/Footer'
import FooterTop from './Components/FooterTop/FooterTop'
import GetStarted from './Components/GetStarted/GetStarted'
import PricingCard from './Components/PricingCard/PricingCard'
import Cart from './Components/Cart/Cart'


const getModels = async() => {
    const res= await fetch("/Models.json")
    return res.json()
}

const modelPromise = getModels()


function App() {
  const [activeTab,setActiveTab] = useState("CardSection");

  const [Carts, setCarts] = useState([])

    // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar cartCount={Carts.length}></Navbar>
    <HeroSection></HeroSection>
    <Border></Border> 


     <div className='grid grid-cols-1 justify-items-center place-items-center pb-10'>
           <p className='text-3xl font-bold'>Premium Digital Tools</p> 
           <p className='text-center text-gray-500 text-sm'>
            Choose from our curated collection of premium digital products designed <br />
           to boost your productivity and creativity.
           </p>
           
           <div className="tabs tabs-box mt-7 rounded-full ">
  <input type="radio" name="my_tabs_1" className={`tab rounded-full py-1 ${activeTab === "CardSection" ? "bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white  font-semibold   " : ""}`} defaultChecked
  aria-label="Products"  onClick={()=> setActiveTab("CardSection")}/>
  
  <input type="radio" name="my_tabs_1" className={`tab rounded-full py-1 ${activeTab === "Cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white  font-semibold   " : ""}`} aria-label={`Carts(${Carts.length})`}  
  onClick={()=> setActiveTab("Cart")}/>
  </div>
        </div>   
    
    
   {activeTab==="CardSection" && <CardSection modelPromise={modelPromise} Carts={Carts} setCarts={setCarts}></CardSection>}
    {activeTab==="Cart" && <Cart Carts={Carts} setCarts={setCarts}></Cart>}

    <GetStarted></GetStarted>
    <PricingCard></PricingCard>
     <FooterTop></FooterTop>
     <Footer></Footer>
    </>
  )
}

export default App
