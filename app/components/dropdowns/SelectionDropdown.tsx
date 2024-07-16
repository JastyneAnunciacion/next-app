import React, { useState } from 'react';
import Image from 'next/image';
import basePath from '../../utilities/basepath';

interface SelectionDropdownItem {
  content: React.ReactNode;
  onClick: () => void;
}

interface SelectionDropdownProps {
  items: SelectionDropdownItem[];
  hasArrow?: boolean,
  placeArrowOnRight?: boolean;
  placeHolderText?: string;
  dropDownButtonWidthPixel?: number,
  dropDownButtonHeightPixel?: number,
  dropDownArrowWidthPixel?: number,
  dropDownArrowHeightPixel?: number
}

const SelectionDropdown = ({
  items,
  hasArrow = true,
  placeArrowOnRight = false,
  placeHolderText = '',
  dropDownButtonWidthPixel = 28,
  dropDownButtonHeightPixel = 28,
  dropDownArrowWidthPixel = 10,
  dropDownArrowHeightPixel = 13
}: SelectionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="relative w-full h-full">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="relative bg-[#241b42] text-white p-4 w-full h-full flex justify-between items-center rounded-lg"
      >
        {hasArrow && !placeArrowOnRight && (
          <div
            style={{ width: `${dropDownButtonWidthPixel}px`, height: `${dropDownButtonHeightPixel}px` }}
            className='flex-shrink-0 bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] rounded-lg items-center justify-center flex'>
            <Image src={`${basePath}/images/${isOpen ? 'down-arrow-image.png' : 'right-arrow-image.png'}`} alt="Arrow" width={40} height={40} />
          </div>
        )}
        <div className='flex gap-1'>
          {placeHolderText && (
            <div className='text-gray-400'>
              {placeHolderText}
            </div>
          )}
          {items && items[selectedItem].content}
        </div>
        {hasArrow && placeArrowOnRight && (
          <div
            style={{ width: `${dropDownButtonWidthPixel}px`, height: `${dropDownButtonHeightPixel}px` }}
            className='flex-shrink-0 border rounded-lg items-center justify-center flex'>
            <Image src={`${basePath}/images/${isOpen ? 'up-thin-arrow-image.png' : 'down-thin-arrow-image.png'}`} alt="Arrow" width={dropDownArrowWidthPixel} height={dropDownArrowHeightPixel} />
          </div>
        )}

        {isOpen && (
          <div className="bg-[#241b42] absolute left-0 bottom-0 transform translate-y-full flex flex-col rounded-lg p-2 w-full max-h-[260px] overflow-y-auto z-20 scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-900">
            {items.map((item, i) => (
              <div
                onClick={() => {
                  item.onClick();
                  setSelectedItem(i);
                  setIsOpen(false);
                }}
                className="flex p-1 gap-2 w-full hover:bg-[#402977] cursor-pointer rounded-lg items-center"
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

export default SelectionDropdown;
