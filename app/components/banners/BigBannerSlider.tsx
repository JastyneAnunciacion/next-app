'use client'

import React, { useState, useEffect, useRef } from 'react'
import BigBanner from './BigBanner';
import basePath from '@/app/utilities/basepath';

const slides = [
    {
        imgSrc: '/images/big-image-1.jpg'
    },
    {
        imgSrc: '/images/big-image-2.jpg'
    },
    {
        imgSrc: '/images/big-image-1.jpg'
    },
    {
        imgSrc: '/images/big-image-2.jpg'
    }
];

const BigBannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5500); //
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    return (
        <div className='flex gap-[11px] mb-[26px] items-center justify-center flex-col w-full'>
            <div className="overflow-hidden w-full h-full]">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className='w-full flex-shrink-0 flex justify-center'>
                            <div className="w-full">
                                <BigBanner imgSrc={`${slide.imgSrc === "" ? "" : basePath + slide.imgSrc}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-[5px]">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`rounded-full flex ${currentSlide === index ? 'bg-[#E302AC] cursor-default w-[10px] h-[10px]' : 'bg-[#4B3E84] w-[8px] h-[8px] cursor-pointer'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default BigBannerSlider;
