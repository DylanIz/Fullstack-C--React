import React from 'react';
import stonksImage from '../../../public/stonks.webp';
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
    return (
        <div className="card">
            <img
                src={stonksImage}
                alt="Stonks"
            />
            <div className="details">
                <h2>AAPL</h2>
                <p>$110</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus.</p>
        </div>
    );
};

export default Card;
