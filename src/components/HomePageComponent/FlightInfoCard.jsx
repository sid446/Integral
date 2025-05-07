import React, { memo } from 'react'

function FlightInfoCard({ flight }) {
  return (
    <div className="relative bg-blue-600 rounded-xl text-white overflow-hidden m-4 p-4">
      {/* See all */}
      <p className="absolute top-2 right-4 text-xs text-green-300 font-semibold cursor-pointer">
        See all
      </p>

      {/* Flight Details */}
      <p className="text-sm font-semibold">Flight Details</p>
      <p className="text-sm mb-4">{flight.date}</p>

      {/* Flight Route */}
      <div className="flex items-center gap-2">
        <div>
          <p className="text-2xl font-bold">{flight.from}</p>
          <p className="text-xs text-gray-200">Delhi, India</p>
        </div>
        <p className="text-2xl">→</p>
        <div>
          <p className="text-2xl font-bold">{flight.to}</p>
          <p className="text-xs text-gray-200">Narita, Tokyo</p>
        </div>
      </div>

      {/* Plane Image */}
      <img
        src="src/assets/plane.png"
        alt="plane"
        className="
          absolute
          -bottom-[10rem] -right-[9rem]
          md:-bottom-32 md:-right-20
          lg:-bottom-40 lg:-right-20
          w-[25rem]
          object-contain
          md:w-[20rem] lg:w-[25rem]
          
          scale-x-[-1]
        "
      />
    </div>
  )
}

export default memo(FlightInfoCard)
