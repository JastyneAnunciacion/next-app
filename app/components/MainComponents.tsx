import React, { ReactNode } from 'react'
import Header from './Header'
import QuickMenu from './footers/QuickMenu'

interface MainComponentsProps {
    children: ReactNode;
    footerPage?: string;
}

const MainComponents = ({ children, footerPage }: MainComponentsProps) => {
    return (
        <main className="w-[100vw] max-w-[100%] h-[100vh]">
            <Header />
            {children}
            <QuickMenu currentPage={footerPage} />
        </main>
    )
}

export default MainComponents