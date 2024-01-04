import React, { useState } from 'react';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import './IconBar.scss';

const IconBar = () => {
  const [showIconBar, setShowIconBar] = useState(true);

  const toggleIconBar = () => {
    setShowIconBar(!showIconBar);
  };

  return (
    <div>
      {showIconBar && (
        <div className="icon-bar">
          <a href="https://www.facebook.com/mineralplanet.es/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.tiktok.com/@mineralplanet" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://www.instagram.com/mineral_planet_fuengirola" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" onClick={toggleIconBar}>
            <MdClose />
          </a>
        </div>
      )}
    </div>
  );
};

export default IconBar;
export const layout = {
  areaId: "content",
  sortOrder: 50,
};
