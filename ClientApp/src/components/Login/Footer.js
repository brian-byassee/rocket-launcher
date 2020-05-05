import React from 'react';

// icons retrieved from https://icons8.com/icons
import js from './js-icon.png';
import react from './react-icon.png';
import material from './materialui-icon.png';
import git from './git-icon.png';
import bootstrap from './bootstrap-icon.png';
import sql from './sql-icon.png';

const Footer = () => (
  <div className="Footer">
    <img src={js} />
    <img src={react} />
    <img src={material} />
    <img src={git} />
    <img src={bootstrap} />
    <img src={sql} />
    {/* icon retrieved from https://commons.wikimedia.org/wiki/File:.NET_Core_Logo.svg */}
    <img width="60" alt=".NET Core Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png" />
  </div>
);

export default Footer;

