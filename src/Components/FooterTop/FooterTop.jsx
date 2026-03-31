import React from 'react';
import "./FooterTop.css"
const FooterTop = () => {
    return (
        <div className='  bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white  py-12 flex flex-col items-center '>
            <p className='pb-1 text-2xl font-bold'>Ready To Transform Your WorkFlow?</p>
            <div className='px-22 sm:px-0 flex flex-col justify-start sm:justify-center items-center text-gray-100'>
                <p>Join thousands of professionals who are already using Digitools to work smarter </p>
              <p >Start your free trial today</p> 
            </div>          
         <div className='pt-5 pb-3 flex gap-5'>
             <button className='border px-3 py-1 bg-white rounded-4xl' >
             <span className="bg-linear-to-r from-[#4F39F6] to-[#a327d8] text-transparent bg-clip-text">Explore Products</span> 
             </button>
             <button className='border-1 border-gray-200 px-3 py-1 rounded-4xl'>View Pricing</button>
           </div>

           <div className='flex gap-8 listed'>
           <p> 14-day free trial</p>
            <ul className='flex gap-8'> 
            <li>No credit card required</li>
            <li>Cancel anytime</li>
           </ul>
           </div>
           
        </div>
    );
};

export default FooterTop;