import React, { FunctionComponent } from 'react';
import Image from 'next/image';

const Logo: FunctionComponent = () => (
  <div className="header-home menu logo">
    <Image src='/images/logo.png' alt="Logo" height={35} width={35}/>
    <p className="header-home menu logo title">
      <span id="span-title-1">React Pure</span>
      <span id="span-title-2">Loaders</span>
    </p>
  </div>
);

export default Logo;
