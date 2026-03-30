import React from 'react';
import { BiBadge } from "react-icons/bi";
import { IoPlayOutline } from "react-icons/io5";
import Hero from "../../../../assets/banner.png"


const HeroSection = () => {

    return (
        <div className='my-10 sm:my-20 grid grid-cols-1 gap-10 sm:grid-cols-2 justify-items-center  mx-auto items-center'>


 {/* left side */}

            <div className='px-10' >

                <div className='flex my-2 gap-1 my-0 text-center items-center inline-flex bg-green-100  px-2 py-1 rounded-2xl' > 
                    <BiBadge className='text-[#4f39f6] font-bold text-xl'/>
                    <p className='bg-linear-to-r from-[#4f39f6] to-[#a91bbe] text-transparent bg-clip-text font-medium'>New:AI-Powered Tools Available </p>
                </div>

                <div className='mb-3'>

                   <p className='mb-1 font-bold text-3xl text-gray-800'> Supercharge Your <br />
                    Digital Workflow</p>

                    <p className='mb-3 text-gray-500'>
                        Access premium AI tools,design assets, templates, and productivity <br />
                        software-all in one place.Start creating fast today. <br />
                        Explore Products
                    </p>
                </div>

                <div className='flex gap-5'>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white font-semibold rounded-4xl px-4 py-2'>Explore Products</button>
                   
                    <button className='flex gap-1 items-center border-2 border-[#8019f4] rounded-3xl px-2 py-1'> 
                    <IoPlayOutline  className='text-[#4f39f6] font-bold text-2xl' /> 
                    <span className='bg-linear-to-r from-[#4f39f6] to-[#a91bbe] text-transparent bg-clip-text text-xl font-medium'>Watch Demo</span></button>
                </div>

            </div>


{/* right side */}

            <div>
                <img src={Hero} className='w-100 h-120' alt="" />
            </div>
            
        </div>
    );
};

export default HeroSection;