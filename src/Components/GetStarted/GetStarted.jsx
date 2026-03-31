import React from 'react';
import Profile from '../../../assets/user.png'
import Package from '../../../assets/package.png'
import Rocket from '../../../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-gray-100 py-10 grid grid-cols-1 justify-items-center place-items-center'>
            <div>
                <p className='font-bold text-3xl'>Get Started In 3 Steps</p>
             <p className='text-gray-400 text-sm'>Start using premium digital tools in minutes, not hour</p>
            </div>


<div className='pt-10 grid grid-cols-1 gap-5 sm:grid-cols-3'>
        
    <div className="card bg-base-100 w-96 relative shadow-sm">
         <div className='absolute right-4 top-3 h-8 w-8 font-semibold  bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white rounded-full py-2 px-2  flex items-center'>01</div>
  <figure className="pt-8">
   <div className="w-18 h-18 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
     <img
      src={Profile}
      alt="Profile"
      className="w-12 h-12 object-contain " />
</div>  
</figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Account</h2>
    <p className='text-gray-400'> Sign up for free in seconds. No credit card <br />
    required to get started</p>
</div>
   </div>


    <div className="relative card bg-base-100 w-96 shadow-sm">
  <div className='absolute right-4 top-3 h-8 w-8 font-semibold  bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white rounded-full py-2 px-2  flex items-center'>02</div>
  <figure className="pt-8">
   <div className="w-18 h-18 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
     <img
      src={Package}
      alt="Package"
      className="w-12 h-12 object-contain " />
</div>  
</figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p className='text-gray-400'> Browse our catalog and select the tools <br /> that fit your needs.
    </p>
</div>
   </div>


  
    <div> <div className="relative  card bg-base-100 w-96 shadow-sm">
        <div className='absolute right-4 top-3 h-8 w-8 font-semibold  bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white rounded-full py-2 px-2  flex items-center'>03</div>

  <figure className="pt-8">
   <div className="w-18 h-18 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
     <img
      src={Rocket}
      alt="Rocket"
      className="w-12 h-12 object-contain " />
</div>  
</figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p className='text-gray-400'> Download and start using your premium <br />
   tools immediately.</p>
   
</div></div>
   </div>


     </div>
 </div>
    );
};

export default GetStarted;