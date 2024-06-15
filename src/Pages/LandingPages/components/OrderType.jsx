import React from 'react'
import Card from './Card'

const OrderType = () => {
    return (
        <div>
            <div className="pt-14 mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:w-[1200px] mx-auto">
                <Card
                    imageUrl="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                    title="Order Online"
                    description="Stay home and order to your doorstep"
                    className="md:mx-2"
                />
                <Card
                    imageUrl="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                    title="Dining"
                    description="View the city's favourite dining venues"
                    className="md:mx-2"
                />
                <Card
                    imageUrl="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                    title="Nightlife and Clubs"
                    description="Explore the city’s top nightlife outlets"
                    className="md:mx-2"
                />
            </div>
        </div>
    )
}

export default OrderType
