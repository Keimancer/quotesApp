import React from 'react';
import { useState } from 'react';
import users from "../quotes.json";

const QuoteBox = () => {
    
    const colorPalette = [ "rgb(255, 78, 78)", "rgb(0, 40, 151)", "orange", "palevioletred", "purple", "rgb(110, 255, 110)" ]
    const colorArray = [ "red-color", "blue-color", "orange-color", "pink-color", "purple-color", "green-color" ];
    const backgroundArray = [ "red-bg", "blue-bg", "orange-bg", "pink-bg", "purple-bg", "green-bg" ];

    const randomIndex = Math.floor( Math.random() * users.length );
    const [ index, setIndex ] = useState( randomIndex );
    const [ colorIndex, setColorIndex ] = useState( 0 );
    const [ color, setColor ] = useState( colorArray[ colorIndex ] );
    const [ background, setBackground ] = useState( backgroundArray[ colorIndex ] );

    const changeQuote = () => {
        const randomIndex = Math.floor( Math.random() * users.length );
        setIndex( randomIndex );
        setColor( colorArray[ colorIndex ] );
        setBackground( backgroundArray[ colorIndex ] );
        document.body.style.backgroundColor = colorPalette[ colorIndex ];
        if ( colorIndex < 4 ){
            setColorIndex( colorIndex + 1 );
        } else {
            setColorIndex( 0 );
        }
    }

    return (
        <div className="quote-box">
            <div className="top-box">
                <i className={ `bx bxs-quote-left bx-lg ${ color }` }></i>
                <h4 className={ `quote ${ color }` }>{users[ index ].quote}</h4>
            </div>
            <h4 className={ `author ${ color }` }>{users[ index ].author}</h4>
            <button className={ `${ background }` } onClick={ changeQuote }>{ ">" }</button>      
        </div>
    );
};

export default QuoteBox;