import React, { use }  from 'react';

const CardSection = ({modelPromise}) => {
     const CardSection = use(modelPromise)
        console.log(CardSection)
    return (
        <>
        <div className='grid grid-cols-1 justify-items-center place-items-center pb-10'>
           <p className='text-3xl font-bold'>Premium Digital Tools</p> 
           <p className='text-center text-gray-500 text-sm'>
            Choose from our curated collection of premium digital products designed <br />
           to boost your productivity and creativity.
           </p>
        </div>


       <div className=' pb-10 grid grid-cols-1 justify-items-center  gap-5 md:grid-cols-3 px-10'>
     {CardSection.map(allCard=>

        <div >
             <div className="card w-96 bg-gray-100 shadow-sm ">
  <div className="card-body relative ">
    <div className={`absolute right-4 top-4 font-semibold rounded-full py-1 px-3 flex items-center text-xs 
    ${allCard.tagType === 'Popular' ? 'text-purple-500 bg-purple-100' 
    : allCard.tagType === 'New' ? 'text-green-500 bg-green-100' 
    : 'text-yellow-500 bg-yellow-100'}`}>{ allCard.tagType}</div>

    <div className='w-16 h-16 rounded-full  border-2 border-gray-200 flex items-center justify-center overflow-hidden '>
        <img src={allCard.icon}  className='w-12 h-12 object-contain ' alt="" />
    </div>

       <div className="flex flex-col flex-1">
      <h2 className="text-xl font-bold mt-2">{allCard.name}</h2>
      <p className='text-sm text-gray-400 pb-2'>{allCard.description}</p>
     <p className='text-2xl font-bold'>${allCard.price} <span className='text-sm font-normal text-gray-400'>/{allCard.period}</span></p>
          </div>

    <ul className="mt-2 flex flex-col gap-2 text-xs">
        {allCard.features.map((feature) =>
      <li >
        
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>)}

      {/* <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>50+ writing templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Grammer checker</span>
      </li> */}
      
    </ul>
    <div className="mt-2 mx-auto">
      <button className="bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white text-lg font-semibold rounded-4xl px-32 py-1">Buy Now</button>
    </div>
  </div>
</div>  
        </div>

     )}
      

       </div>


        </>
    );
};

export default CardSection;