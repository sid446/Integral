import React, { memo } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { MdAccessTime } from 'react-icons/md'
import { useTheme } from '../../context/useTheme'


function AccommodationList({ data }) {
    const {theme}= useTheme()
  return (
    <div>
       <div className="flex justify-between items-center mx-4 my-3">
        <p className="text-white text-lg font-semibold">Accomodation</p>
        <p className={` ${theme==='dark'? 'text-green-400':'text-[#3643FB]'}  text-xs font-semibold cursor-pointer underline`}>See all</p>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide px-4   space-x-3">
        {data.map((item) => (
            <div  key={item.id} className={`flex flex-col h-[239px]  ${theme==='dark'? 'bg-[#4D4D4D] text-white ':'bg-white border-[2px] text-black'}  rounded-xl justify-between `}> 
          <div className="w-[198px]   flex-shrink-0">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-[124px] rounded-md object-cover"
            />
            <div className='px-2'>
            <p className=" text-sm font-medium mt-2">{item.name}</p>
            <p className="text-xs">
              <span className='font-semibold'>checks in:</span> {item.CheckIn} 
            </p>
            <p className=" text-xs">
            <span className='font-semibold' >checks out:</span> <span >{item.CheckOut} </span> 
            </p>
            </div>
            
          </div>
          <div className='flex justify-between px-2 py-3'>
            <p  className="text-xs ">{item.nights}</p>
            {item.status=== 'Confirmed' ? (
                <p className="text-green-400 text-xs flex items-center gap-1">
                    <MdCheckCircle size={12} /> {item.status}
                </p>
                ) : (
                <p className="text-red-400 text-xs flex items-center gap-1">
                    <MdAccessTime size={12} /> {item.status}
                </p>
                )}
            
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(AccommodationList)
