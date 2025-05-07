import React, { memo } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdAccessTime, MdGroup, MdChecklist } from 'react-icons/md'
import { useTheme } from '../../context/useTheme'

function TripCard({ imageUrl, title, dates, daysLeft, distanceKm, onPress }) {
    const {theme}=useTheme()
  return (
    <div
      onClick={onPress}
      className={`relative mx-4 rounded-xl overflow-hidden cursor-pointer   text-white`}
      style={{ width: 'calc(100% - 32px)' }}
    >
      {/* Title above card */}
      <p className={`mb-2 text-[18px] md:text-[20px] ${theme ==="dark"?'text-white':'text-black'} font-medium`}>Your Upcoming Trip</p>

      {/* Card image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[20.625rem] md:h-[24rem] lg:h-[26rem] object-cover rounded-xl"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 rounded-xl flex flex-col justify-end">

        {/* Top right arrow */}
        <FiArrowUpRight
          size={30}
          className="absolute top-12 right-4 md:top-6 md:right-6 lg:top-16 lg:right-8 text-white bg-black/30 rounded-full p-1"
        />

        {/* Title & dates */}
        <h2 className="text-[44px] md:text-[48px] lg:text-[52px] absolute top-12 left-2 md:top-10 md:left-4 lg:top-12 lg:left-6 font-bold">
          {title}
        </h2>
        <p className="text-[14px] md:text-[16px] absolute top-[6rem] left-2 md:top-[5.5rem] md:left-4 lg:top-[7rem] lg:left-6 text-gray-300">
          {dates}
        </p>

        {/* Bottom info row */}
        <div className="flex gap-4 justify-center items-center mt-4 flex-wrap md:gap-6 lg:gap-8">
          <div className="flex items-center gap-1 text-white text-xs md:text-sm">
            <MdAccessTime color="#4ade80" size={16} />
            <div>
              <p>{daysLeft} Days</p>
              <span className="text-gray-400">Duration</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white text-xs md:text-sm">
            <MdGroup color="#4ade80" size={16} />
            <div>
              <p>4 (2M,2F)</p>
              <span className="text-gray-400">Group Size</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white text-xs md:text-sm">
            <MdChecklist color="#4ade80" size={16} />
            <div>
              <p>14</p>
              <span className="text-gray-400">Activities</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default memo(TripCard)
