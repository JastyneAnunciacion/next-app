'use client'

import React from 'react'
import { useState } from 'react'
import basePath from '../utilities/basepath';
import BigBanner from './BigBanner';
import Image from 'next/image';

const slides = [
    {
        imgSrc: ''
    },
    {
        imgSrc: ''
    },
    {
        imgSrc: ''
    },
    {
        imgSrc: ''
    }
];


const BigBannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };
    return (
        <div className='flex items-center justify-center flex-col'>
            <div className="relative overflow-hidden w-full">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className='w-full flex-shrink-0 flex justify-center'>
                            <div className="w-[min(30rem,100%)]">
                                <BigBanner imgSrc={`${slide.imgSrc === "" ? "" : basePath + slide.imgSrc}`} />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 cursor-pointer w-8 h-8 bg-gray-900 flex items-center justify-center rounded-full'>
                        <Image onClick={prevSlide} src={`${basePath}/images/left-arrow-image.png`} alt="Right Arrow" width={30} height={30} />
                    </div>
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 cursor-pointer w-8 h-8 bg-gray-900 flex items-center justify-center rounded-full'>
                        <Image onClick={nextSlide} src={`${basePath}/images/right-arrow-image.png`} alt="Right Arrow" width={30} height={30} />
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center mt-1 gap-1">
                {slides.map((slide, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className={`rounded-full flex items-center justify-center ${currentSlide === index ? 'bg-gray-600 cursor-default w-3 h-3' : 'bg-gray-900 w-2 h-2 cursor-pointer'}`} />
                ))}
            </div>
        </div>
    )
}

export default BigBannerSlider