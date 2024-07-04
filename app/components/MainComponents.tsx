import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './footers/QuickMenu'

interface MainComponentsProps {
    children: ReactNode;
    footerPage?: string;
}

const MainComponents = ({ children, footerPage }: MainComponentsProps) => {
    return (
        <main className="w-[100vw] max-w-[100%] h-[100vh]">
            <Header />
            {children}
            <Footer currentPage={footerPage} />
        </main>
    )
}

export default MainComponents