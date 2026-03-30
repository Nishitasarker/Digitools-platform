import React from 'react';

const Navbar = () => {
    return (
        <div >
     <div className=" navbar bg-base-100 shadow-sm flex  justify-between  px-2 sm:px-10 md:px-25">
  <div >
    <a className=" text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#a327d8] text-transparent bg-clip-text">DigiTools</a>
  </div>

  <div className='hidden lg:flex'>
    <ul className='menu menu-horizontal px-1 gap-2 mx-auto'>
        <li><a href=""> Products</a></li>
        <li><a href=""> Features</a></li>
        <li><a href=""> Pricing</a></li>
        <li><a href=""> Testimonials</a></li>
        <li><a href=""> FAQ</a></li>
    </ul>
  </div>

  <div className="flex items-center  mr-0">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          {/* <span className="badge badge-sm indicator-item">8</span> */}
        </div>
      </div>
      {/* <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div> */}
    </div>

    <button className='mr-2'>Login</button>

    <button className=" bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white font-semibold rounded-4xl px-3 py-0.5">Get Started</button>
    {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
  </div>

</div>

</div>
    );
};

export default Navbar;