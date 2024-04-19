import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex items-center justify-center h-8 w-14 bg-${isToggled ? 'blue' : 'gray'}-500 text-white font-bold rounded-full`}
    >
      <div
        className="absolute h-6 w-6 bg-white rounded-full"
        style={{ left: isToggled ? 'calc(100% - 30px)' : '4px' }}
      ></div>
    </button>
  );
};

export default ToggleButton;
