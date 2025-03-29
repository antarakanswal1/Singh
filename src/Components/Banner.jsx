import React from 'react'
import dining from '../assets/dining.png'
import living from '../assets/living.png'
import bedroom from '../assets/bedroom.png'

const Banner = () => {
  return (
    <div>
        <div className="max-w-7xl mx-auto p-6 border-2 border-white rounded-lg">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Browse The Range</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={dining} alt="Dining" className="w-full h-56 object-cover" />
          <div className="py-3 text-center text-lg font-semibold text-gray-900">Dining</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={living} alt="Living" className="w-full h-56 object-cover" />
          <div className="py-3 text-center text-lg font-semibold text-gray-900">Living</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={bedroom} alt="Bedroom" className="w-full h-56 object-cover" />
          <div className="py-3 text-center text-lg font-semibold text-gray-900">Bedroom</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner