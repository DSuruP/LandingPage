import React from 'react';

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-white rounded-t-lg shadow-md">
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-xl text-gray-800 mb-2" style={{ fontFamily:'inherit', fontSize: '1.5rem' }}>{title}</h3>
            <p className="text-gray-600" style={{ fontFamily: 'initial', fontSize: '1rem' }}>{description}</p>
        </div>
    );
};

export default Card;
