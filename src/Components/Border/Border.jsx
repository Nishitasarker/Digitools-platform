import React from 'react';

const Border = () => {
    return (
        <section className='pb-15'>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white font-semibold   py-10">
          <div>
           <p className='font-bold text-4xl text-white'>50K+</p>
           <p className='text-gray-300'>Active Users</p>
          </div>

          <div>
            <p className='font-bold text-4xl text-white'>200+</p>
           <p className='text-gray-300'>Premium Tools</p>
          </div>

          <div>
            <p className='font-bold text-4xl text-white'>4.9</p>
           <p className='text-gray-300'>Rating</p>
          </div>

          </div>
        </section>
    );
};

export default Border;