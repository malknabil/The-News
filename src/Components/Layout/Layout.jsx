import React from 'react'
import Navbar from '../MyNavbar/MyNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../MyFooter/MyFooter';
import ScrollToTop from '../../Hooks/ScrollToTop';

export default function
    () {
    return (
        <>
            <Navbar/>
            <ScrollToTop />
            <div><Outlet/></div>
            <Footer/>
        </>
    )
}
