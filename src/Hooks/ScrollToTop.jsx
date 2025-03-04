import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    let { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [location.pathname])
    return null;
}
