import React from 'react'

const ExploreOptionCard = ({ head, content, arrow, onClick, isOpen }) => {
  return (
    <div className="bg-gray-100 rounded-lg cursor-pointer">
      <div className="p-6 flex justify-between items-center" onClick={onClick}>
        <p className="text-xl font-semibold">{head}</p>
        {arrow}
      </div>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-lg">{content}</p>
        </div>
      )}
    </div>
  )
}

export default ExploreOptionCard