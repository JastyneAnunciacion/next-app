'use client'

import React, { ReactNode } from 'react';
import Header from './Header';
import QuickMenu from './footers/QuickMenu';
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
        <main className={`w-full flex flex-col max-w-full h-full ${isMenuExpanded ? 'overflow-hidden' : ''}`}>
            <Header />
            <div className='w-full max-w-md flex justify-center self-center p-4'>
                {children}
            </div>
            <QuickMenu currentPage={footerPage} onExpand={onExpand} />
        </main>
    );
}

export default MainComponents;