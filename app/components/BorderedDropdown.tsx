import React, { useState } from 'react';

interface DropdownItem {
  content: React.ReactNode;
  onClick: () => void;
}

interface dropdownProps {
  children: React.ReactNode;
  items: DropdownItem[];
}

const BorderedDropdown = ({ children, items }: dropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="relative bg-gray-800 text-white p-2 w-full h-10 flex items-center font-bold text-lg rounded-lg"
      >

        {!isOpen ? "▶ " : " ▼ "}
        <div className='pl-4'>
            {items && items[selectedItem].content}
        </div>

        {isOpen && (
          <div className="bg-gray-800 absolute left-0 top-11 flex flex-col rounded-lg p-2 w-full max-h-[260px] overflow-y-auto z-10 scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-900">
            {items.map((item, i) => (
              <div
                onClick={() => {
                    item.onClick();
                    setSelectedItem(i);
                }}
                className="flex p-1 gap-2 w-full hover:bg-gray-600 cursor-pointer rounded-lg items-center"
                key={i}
              >
                {item.content}
              </div>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default BorderedDropdown;
