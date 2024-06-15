import React from 'react'

const OneCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-12 -mt-24 ml-24 mr-24 relative">
            <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">Favourite</p>
                <p className="text-gray-500 mt-4">
                    Zomato (/zoʊmɑːtoʊ/) is an Indian multinational restaurant aggregator and food delivery company.
                    It was founded by Deepinder Goyal and Pankaj Chaddah in 2008.[5]
                    Zomato provides information, menus and user-reviews of restaurants as well as food delivery options from partner restaurants in more than 1,000 Indian cities and towns, as of 2022–23.[6]
                    Zomato rivals Swiggy in food delivery and hyperlocal space.
                </p>
            </div>
            <div className="text-center mt-12">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go somewhere
                </button>
            </div>
        </div>
    )
}

export default OneCard