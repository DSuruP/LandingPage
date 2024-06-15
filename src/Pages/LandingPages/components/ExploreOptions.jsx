import React, { useState } from 'react';
import ExploreOptionCard from './ExploreOptionCard';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const options = [
  {
    head: "Popular cuisines near me",
    content: "Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meContinental food near meDesserts food near meItalian food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meRolls food near meSandwich food near meShake food near meSouth Indian food near meStreet food near me"
  },
  {
    head: "Popular restaurant types near me",
    content: "Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meClubs near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meKiosks near meLounges near mePaan Shop near meQuick Bites near meSweet Shops near me"
  },
  {
    head: "Top Restaurant Chains",
    content: "Bikanervala        Burger         KingHaldiram's       KFCMcDonald's"
  },
  {
    head: "Cities We Deliver To",
    content: "Delhi  NCR Kolkata Mumbai Bengaluru Pune Hyderabad Chennai Lucknow Kochi Jaipur Ahmedabad Chandigarh Goa Indore Gangtok Nashik Ooty Shimla Ludhiana Guwahati Amritsar Kanpur Allahabad Aurangabad Bhopal Ranchi Visakhapatnam Bhubaneswar Coimbatore Mangalore Vadodara Nagpur Agra Dehradun Mysore Puducherry Surat Varanasi Patna Udaipur Srinagar Khajuraho Neemrana Cuttack Trivandrum Haridwar Leh Pushkar Rajkot Madurai Kozhikode Alappuzha Thrissur Manipal Vijayawada Jodhpur Kota Ajmer Mussoorie Rishikesh Jalandhar Jammu Manali Dharamshala"
  }
];

const ExploreOptions = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
  
    const handleAccordionToggle = (index) => {
      setOpenAccordion(openAccordion === index ? null : index);
    };
  
    return (
      <div className="">
        <p className='text-4xl mt-20 text-center'>Explore options near me</p>
        <div className="pt-3 grid grid-cols-1 gap-4 md:w-[1200px] mx-auto">
          {options.map((option, index) => (
            <ExploreOptionCard
              key={index}
              head={option.head}
              content={option.content}
              arrow={openAccordion === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              onClick={() => handleAccordionToggle(index)}
              isOpen={openAccordion === index}
            />
          ))}
        </div>
      </div>
    );
}

export default ExploreOptions