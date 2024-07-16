'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';

const slides = [
    {
        imgSrc: '/images/game-icon-1.png'
    },
    {
        imgSrc: '/images/game-icon-2.png'
    },
    {
        imgSrc: '/images/game-icon-3.png'
    },
    {
        imgSrc: '/images/game-icon-4.png'
    },
    {
        imgSrc: '/images/game-icon-5.png'
    },
    {
        imgSrc: '/images/game-icon-6.png'
    },
    {
        imgSrc: '/images/game-icon-7.png'
    },

];

const BigBannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
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
            setCurrentSlide(prev => (prev === Math.ceil(slides.length / 2) - 1 ? 0 : prev + 1));
        }, 5500); //
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    return (
        <div className='flex gap-[11px] mb-[26px] items-center justify-center flex-col w-full'>
            <div className="overflow-hidden w-full h-full">
                <div className="flex w-full" ref={sliderRef} style={{ transition: 'transform 0.5s ease' }}>
                    {slides.map((slide, index) => (
                        <button className={`${index % 2 == 0 ? 'ml-[1%] mr-[0.75%]' : 'ml-[0.75%] mr-[1%]'} shrink-0 w-[48.25%] h-auto flex items-center justify-center`}>
                            <Image src={slide.imgSrc} alt='Banner Image' layout='responsive' width={100} height={100} className='rounded-lg' />
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-[5px] items-center">
                {slides.slice(0, Math.ceil(slides.length / 2)).map((slide, index) => (
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
