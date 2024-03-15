"use client"
import React, { useEffect, useState } from 'react'
import "./header.css"
const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY === 0;
            setHasShadow(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(
                prevScrollPos > currentScrollPos ||
                currentScrollPos < 10
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    return (
        <header className={`${visible ? 'headerVisible' : 'hideHeader'}`}>

        </header>
    )
}

export default Header