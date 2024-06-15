import React from 'react';

const NormalCard = ({ title, description, icon, iconDown }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="flex justify-end items-center">
                {icon && <div className="text-gray-400" style={{ marginTop: '-3rem' }}>{icon}</div>}
            </div>
            <div className="flex justify-center items-center mt-auto">
                {iconDown && (
                    <div className="flex items-center">
                        <span className="text-black text-xl font-semibold mr-2">See more</span>
                        <div style={{ marginTop: '0.1rem' }}>{iconDown}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NormalCard;
