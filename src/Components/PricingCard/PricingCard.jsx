import React from 'react';

const PricingCard = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center place-items-center py-15'>
   <div className='pb-8'>
     <p className='text-3xl font-bold'>Simple, Transparent Pricing</p>
     <p className='text-center text-gray-500 text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
     </div>


     <div className='grid grid-cols-1 gap-8 sm:grid-cols-3 items-stretch'>


      <div className="card w-full h-full flex flex-col bg-gray-100 shadow-sm">
  <div className="card-body ">
       <div className="flex flex-col flex-1">
      <h2 className="text-xl font-bold">Starter</h2>
      <p className='text-sm text-gray-400 '>Parfect for getting started</p>
     <p className='text-2xl font-bold'>$0 <span className='text-sm font-normal text-gray-400'>/Month</span></p>
          </div>


    <ul className=" flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community Support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
    </ul>
    <div className="mt-20">
      <button className="bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white text-lg font-semibold rounded-4xl px-24 py-2">Get Started Free</button>
    </div>
  </div>
</div> 



      <div className="card  w-96 bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white  shadow-sm">
  <div className="card-body relative">
    <div className='absolute left-35 -top-4  font-semibold  bg-yellow-100  text-yellow-500 rounded-full py-2 px-2  flex items-center'>Most Popular</div>

       <div className="flex flex-col flex-1">
      <h2 className="text-xl font-bold">Pro</h2>
      <p className='text-sm text-gray-400 pb-5'>Best for professionals</p>
     <p className='text-2xl font-bold'>$29 <span className='text-sm font-normal text-gray-400'>/Month</span></p>
          </div>


    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
    </ul>
    <div className="mt-8  bg-white rounded-4xl">
      <button className="text-lg font-semibold px-24  py-2 bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-transparent bg-clip-text ">Start Pro Trial</button>
    </div>
  </div>
</div> 



      <div className="card w-96 bg-gray-100 shadow-sm">
  <div className="card-body">
       <div className="flex flex-col flex-1">
      <h2 className="text-xl font-bold">Enterprise</h2>
      <p className='text-sm text-gray-400 pb-5'>For teams and businesses</p>
     <p className='text-2xl font-bold'>$99 <span className='text-sm font-normal text-gray-400'>/Month</span></p>
          </div>

    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
    </ul>
    <div className="mt-8">
      <button className="bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white text-lg font-semibold rounded-4xl px-24 py-2">Contact Sales</button>
    </div>
  </div>
</div>  

        
     </div>
            
        </div>
    );
};

export default PricingCard;