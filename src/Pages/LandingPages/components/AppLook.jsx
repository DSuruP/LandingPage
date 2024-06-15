import React, { useState, useEffect } from 'react';

const AppLook = () => {
    const [selectedOption, setSelectedOption] = useState("email");
    const [inputValue, setInputValue] = useState('');
    const [phoneCode, setPhoneCode] = useState('+91');
    const [phoneCodes] = useState([
        '+91', '+1', '+44', '+61' // Add more phone codes as needed
    ]);

    useEffect(() => {
        setInputValue('');
    }, [selectedOption]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handlePhoneCodeChange = (event) => {
        setPhoneCode(event.target.value);
    };

    const handleButtonClick = () => {
        // Handle button click action here
        console.log("Button clicked");
    };
  return (
    <div className="flex flex-wrap justify-center p-4 sm:p-12">
        <div className="p-2">
            <img className='w-48 h-48' src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="Zomato App"></img>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto p-4 m-0.5">
            <p style={{ fontFamily:'inherit', fontSize: '3rem' }}>Get the Zomato app</p>
            <p style={{ fontFamily:'sans-serif', fontSize: '1rem' }}>We will send you a link, open it on your phone to download the app</p>
            <div className="flex items-center mb-4">
                <input type="radio" id="option1" name="appOption" value="email" checked={selectedOption === "email"} onChange={handleOptionChange} />
                <label htmlFor="option1" className="ml-2">Email</label>
                <input type="radio" id="option2" name="appOption" value="phone" checked={selectedOption === "phone"} onChange={handleOptionChange} className="ml-4" />
                <label htmlFor="option2" className="ml-2">Phone</label>
            </div>
            {selectedOption === "email" && (
                <div className="flex flex-col sm:flex-row items-center">
                    <input type="text" placeholder="Enter your email" value={inputValue} onChange={handleInputChange} className="flex-1 p-2 rounded mb-2 sm:mr-2 sm:mb-0 border border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button onClick={handleButtonClick} className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition-all duration-300">Share App Link</button>
                </div>
            )}
            {selectedOption === "phone" && (
                <div className="flex flex-col sm:flex-row items-center">
                    <select value={phoneCode} onChange={handlePhoneCodeChange} className="w-full sm:w-20 p-2 mr-2 sm:mr-2 rounded-l mb-2 sm:mb-0 border border-gray-300 focus:outline-none focus:border-blue-500">
                        {phoneCodes.map((code, index) => (
                            <option key={index} value={code}>{code}</option>
                        ))}
                    </select>
                    <input type="text" placeholder="Enter your phone number" value={inputValue} onChange={handleInputChange} className="flex-1 p-2 rounded-r mb-2 sm:mr-2 sm:mb-0 border border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button onClick={handleButtonClick} className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition-all duration-300">Share App Link</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default AppLook