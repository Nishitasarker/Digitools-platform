import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-black'>

    <footer className="footer grid grid-cols-2   sm:grid-cols-5 sm:justify-items-center bg-black text-gray-200 p-10 sm:px-25">
  <div> 
   <p className='text-gray-400 font-bold text-2xl'> DigiTools</p>
   <p className='text-grey-300'>
    Premium digital tools for creators, <br />
    professionals, and businesses. Work smarter <br />
    with our suite of powerful tools.
   </p>
  </div>
  <nav>
    <h6 className=" footer-title ">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className=" footer-title ">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className=" footer-title ">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="  footer-title ">Social</h6>
    <div className="grid grid-flow-col gap-4">
      {/* <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a> */}
      <a href=""><IoLogoInstagram  className='h-7 w-7 rounded-full inline-block  p-1 border-2 border-white-500 ' /></a>
      <a>
       <FaSquareFacebook className='h-7 w-7 rounded-full inline-block  p-1 border-2 border-white-500 ' /> 
      </a>
      <a>
        <FaXTwitter className='h-7 w-7 rounded-full inline-block  p-1 border-2 border-white-500 '/>

      </a>
    </div>
  </nav>
 
</footer>

<hr  className="w-[85%] mx-auto  h-[1.5px] bg-gray-500 text-black" />

<div className='py-5 bg-black text-gray-400 grid grid-cols-1 sm:flex justify-between  px-10 sm:px-25'>
<div>
  &copy;2026 Digitools. All rights reserved.
</div>

<div>
  <ul className='flex gap-2'>
    <li>Privacy Policy</li>
    <li>Terms of Service</li>
    <li>Cookies</li>
  </ul>
</div>
</div>
            
 </div>
    );
};

export default Footer;