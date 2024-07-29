'use client'

import React, { useState, useRef, useEffect } from 'react'
import SportsQuickBetCard from './SportsQuickBetCard'

const GAP_SIZE = 16; // Gap size between slides in pixels

const SportsQuickBetCardSlides = () => {
    const slides = Array(12).fill({ imgSrc: '' }); // Example slides with placeholder data

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth;
            const newScrollLeft = index * (slideWidth + GAP_SIZE);
            sliderRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
            setCurrentSlide(index);
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth;
            const scrollLeft = sliderRef.current.scrollLeft;
            const index = Math.floor((scrollLeft + GAP_SIZE / 2) / (slideWidth + GAP_SIZE));
            setCurrentSlide(index);
        }
    };

    useEffect(() => {
        const currentSlider = sliderRef.current;
        if (currentSlider) {
            currentSlider.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (currentSlider) {
                currentSlider.removeEventListener('scroll', handleScroll);
            }
        }
    }, []);

    return (
        <div className='flex flex-col items-center my-3'>
            <div className="relative overflow-x-scroll w-full" ref={sliderRef}>
                <div className="flex" style={{ gap: `${GAP_SIZE}px` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className='flex-shrink-0 w-full'>
                            <div className="w-[min(30rem,100%)] flex justify-center items-center">
                                <SportsQuickBetCard />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center mt-3 gap-1">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`flex items-center justify-center ${currentSlide === index ? 'bg-gray-900 cursor-default w-7 h-2 rounded-lg' : 'bg-gray-600 w-3 h-1 rounded-lg cursor-pointer'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default SportsQuickBetCardSlides;
