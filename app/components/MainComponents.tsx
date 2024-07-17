'use client'

import React, { ReactNode } from 'react';
import Header from './Header';
import QuickMenu from './quickMenu/QuickMenu';
import { useState, useEffect } from 'react';

interface MainComponentsProps {
    children: ReactNode;
    footerPage?: string;
}

const MainComponents = ({ children, footerPage }: MainComponentsProps) => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const onExpand = (bool: boolean) => {
        setIsMenuExpanded(bool);
    };

    useEffect(() => {
        if (isMenuExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuExpanded]);

    return (
        <main className={`flex flex-col max-w-full h-screen w-screen ${isMenuExpanded && 'overflow-hidden'}`}>
            <div className='w-full max-w-[91.88%] flex justify-center self-center'>
                <Header />
            </div>
            <div className='w-full flex flex-col items-center self-center'>
                {children}
            </div>
            <QuickMenu currentPage={footerPage} onExpand={onExpand} />
        </main>
    );
}

export default MainComponents;