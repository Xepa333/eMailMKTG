import React from 'react';

const Logo: React.FC = () => {
  const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Viatris.svg';

  return <img src={logoUrl} alt="Viatris Logo" className="h-8 w-auto" />;
};

export default Logo;