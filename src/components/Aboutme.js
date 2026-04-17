import React from 'react';

const Aboutme = () => {
  return (
    <div>
      <h2 className="text-xl mb-4 bg-[#33ff33] text-black px-2 inline-block">WHOAMI</h2>
      <p className="leading-relaxed">
        I am a Janelle Yoanna S. Villanueva <span className="font-bold underline text-white">BSIT student</span> a passionate web developer who enjoys building clean and user-friendly applications.
      </p>
      <p className="mt-4">
        {`>`} Focus: Web Development / Database Management / React Development
      </p>
    </div>
  );
};

export default Aboutme;