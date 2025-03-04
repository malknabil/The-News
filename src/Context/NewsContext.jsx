import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const NewsContext = createContext();

export default function NewsContextProvider(props) {

    const [Newww, setNewww] = useState(null)

    useEffect(() => {
        if (Newww) {
            localStorage.setItem('Article', JSON.stringify(Newww));
        }
    }, [Newww]);

    useEffect(() => {
        const savedArticle = JSON.parse(localStorage.getItem('Article'));
        if (savedArticle) {
            setNewww(savedArticle);
        }
    }, []);

    return (
        <NewsContext.Provider value={{ Newww, setNewww }}>
            {props.children}
        </NewsContext.Provider>
    );
};
