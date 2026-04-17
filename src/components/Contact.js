import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-xl mb-4 bg-[#33ff33] text-black px-2 inline-block">UPLINK</h2>
      <div className="space-y-4">
        <p>Ready to collaborate? Send a message to the terminal.</p>
        <div className="flex gap-2">
          <span className="text-white">Email:</span>
          <a href="mailto:your-email@example.com" className="hover:underline">janelleyoannav@gmail.com</a>
        </div>
        <div className="flex gap-2">
          <span className="text-white">GitHub:</span>
          <span className="hover:underline cursor-pointer">/Hughnyel</span>
        </div>
        <div className="mt-4 animate-bounce">_</div>
      </div>
    </div>
  );
};

export default Contact;