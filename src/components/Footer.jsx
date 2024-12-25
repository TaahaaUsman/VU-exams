import React from 'react';
import { facebook, twitter, youtube } from '../constents';

const Footer = () => {
  return (
    <footer className="bg-white mt-32 flex items-center justify-between px-8 h-24">
      <div className="text-gray-700 hidden sm:block">
        © 2011 Virtual University of Pakistan.
        <br /> Developed by IT Department, Virtual University of Pakistan.
      </div>
      <div className="w-full flex gap-5 justify-end">
        <a href="https://www.youtube.com/user/vu" target="_blank">
          <img src={youtube} alt="Facebook" className="h-10 w-10" />
        </a>
        <a
          href="https://web.facebook.com/VirtualUniversityOfPakistan?_rdc=1&_rdr"
          target="_blank"
        >
          <img src={facebook} alt="Facebook" className="h-10 w-10" />
        </a>
        <a href="https://twitter.com/vupakistan" target="_blank">
          <img src={twitter} alt="Twitter" className="h-10 w-10" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
