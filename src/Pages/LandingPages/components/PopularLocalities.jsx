import React from 'react';
import NormalCard from './NormalCard';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const PopularLocalities = () => {
    return (
        <div className="mt-20">
            <p className='text-4xl mt-20 text-center'>Popular localities in and around Indore</p>
            <div className="pt-2 grid grid-cols-1 gap-4 md:grid-cols-3 md:w-[1200px] mx-auto">
                <NormalCard
                    title="Vijay Nagar"
                    description="1228 places"
                    icon={<IoIosArrowForward />}
                />
                <NormalCard
                    title="New Palasia"
                    description="159 places"
                    icon={<IoIosArrowForward />}
                />
                <NormalCard
                    title="Old Palasia"
                    description="234 places"
                    icon={<IoIosArrowForward />}
                />
            </div>
            <div className="pt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:w-[1200px] mx-auto">
                <NormalCard
                    title="Bhawar Kuan"
                    description="417 places"
                    icon={<IoIosArrowForward />}
                />
                <NormalCard
                    title="Rau"
                    description="154 places"
                    icon={<IoIosArrowForward />}
                />
                <NormalCard
                    title="By Pass Road (North)"
                    description="183 places"
                    icon={<IoIosArrowForward />}
                />
            </div>
            <div className="pt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:w-[1200px] mx-auto">
                <NormalCard
                    title="South Tukoganj"
                    description="62 places"
                    icon={<IoIosArrowForward />}
                />
                <NormalCard
                    title="Sapna Sangeeta"
                    description="124 places"
                    icon={<IoIosArrowForward />}
                />
                <NormalCard
                    iconDown={<IoIosArrowDown />}
                />
            </div>
        </div>
    );
};

export default PopularLocalities;
