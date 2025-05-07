import React, { memo } from 'react'
import { useTheme } from '../../context/useTheme'   
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const monthNames = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function ActivityList({ data, onPressItem }) {

    const {theme}=useTheme()
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 1)); // Jan 1st 2025

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const generateDates = () => {
    const year = 2025;
    let dates = [];
    for (let month = 0; month < 12; month++) {
      const numDays = getDaysInMonth(month, year);
      for (let day = 1; day <= numDays; day++) {
        const dateObj = new Date(year, month, day);
        dates.push({
          month: monthNames[month],
          dayName: daysOfWeek[dateObj.getDay()],
          date: day,
          isFirst: day === 1,
          isLast: day === numDays
        });
      }
    }
    return dates;
  };

  const dates = generateDates();

  const isSelected = (dateObj) =>
    selectedDate.getDate() === dateObj.date &&
    selectedDate.getMonth() === monthNames.indexOf(dateObj.month);

  return (
    <div className="flex-1 ">
      {/* Title + See All */}
      <div className="flex justify-between items-center mx-6 mt-6 mb-3 ">
        <p className={` ${theme==='dark'?"text-white":"text-black"} text-lg font-semibold`}>Activities</p>
        <p className={` ${theme==='dark'? 'text-green-400':'text-[#3643FB]'}  text-xs font-semibold underline    cursor-pointer`}>See all</p>
      </div>

      {/* Day Plan selector */}
      <div className={`flex ${theme==='dark'? 'bg-[#3a3a3a]':'bg-white border-2'} flex-col gap-2 overflow-x-auto px-4 py-4  rounded-2xl text-white w-full`}>
      {/* Top buttons */}
      <div className="flex items-center gap-4">
        <button className={` ${theme==='dark'? 'bg-[#D1F462]':'bg-[#313DDF] text-white'}  text-black font-semibold px-3 py-1 rounded-xl`}>
          Day Plan
        </button>
        <span className={`px-3 py-1 rounded-xl border  font-medium text-sm  ${theme==='dark'? 'border-[#D1F462] text-[#D1F462]':'border-[#313DDF] text-[#313DDF]'} `}>
          14 Activities
        </span>
      </div>

      {/* Date selector */}
      <div className="flex items-center gap-1 pt-2 overflow-x-auto">
  {dates.map((d, index) => {
    const isCurrentSelected = isSelected(d);
    const showMonthLabel = isCurrentSelected; // dynamically show month only next to selected

    return (
      <div key={`${d.month}-${d.date}`} className="flex items-stretch  scrollbar-hide ">
        {showMonthLabel && (
          <div
            className={`flex flex-col justify-center ${
              isCurrentSelected ? ' text-black rounded-l-xl' : 'bg-gray-500 text-white rounded-xl'
            } px-1 py-1 ${theme==='dark'? 'bg-[#D1F462] text-black':'bg-[#313DDF] text-white'}`}
          >
            <span className="text-[0.6rem] font-semibold leading-none">
              {d.month}
            </span>
          </div>
        )}

        {/* Day box */}
        <button
          onClick={() =>
            setSelectedDate(new Date(2025, monthNames.indexOf(d.month), d.date))
          }
          className={`px-3 py-1 flex flex-col  items-center mr-1
            
             ${
            isCurrentSelected
              ? ` border ${theme==='dark'? ' border-[#D1F462] bg-[#292929] text-white':'border-[#313DDF] bg-white text-black'}   t rounded-r-xl`
              : ` ${theme==='dark'?'bg-[#4D4D4D] text-gray-300':'bg-zinc-300 text-zinc-700'}  rounded-xl`
          } `
           }
        >
          <span className="text-[0.7rem]">{d.dayName}</span>
          <span className="text-sm font-semibold">{d.date}</span>
        </button>

        {/* Last day of month → keep vertical next month label */}
        {d.isLast && (
          <div className="bg-gray-400 rounded-r-lg px-1 py-4 flex flex-col justify-center items-center">
            <span
              className="text-[0.6rem] font-semibold text-black"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {monthNames[(monthNames.indexOf(d.month) + 1) % 12]}
            </span>
          </div>
        )}
      </div>
    );
  })}
</div>


      
    </div>


      {/* Day Info */}
      <div className='flex mt-4 mb-3 gap-2'>
      <div className={`mb-2 bg-[#D3F462] text-black ${theme==='dark'?'bg-[#D3F462] text-black':'bg-[#313DDF] text-white'} p-1 rounded-xl text-sm font-semibold`}>
        Day1 27.01.2025 
      </div>
      <div className=' mb-2 p-1 '>
        <p className={` text-sm font-semibold leading-tight  ${theme==='dark'?'text-[#D3F462]':' text-[#313DDF]'} `}>
        <FontAwesomeIcon icon={faPersonHiking}   /> 4 Activities</p>
      </div>
      </div>

      {/* Activity Cards */}
      <div className={`px-2 flex flex-col  ${theme==='dark'?'border border-yellow-400':''} py-2 rounded-lg gap-3`}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex ${theme==='dark'?"bg-gray-800  ":"border-2 "} rounded-lg  overflow-hidden cursor-pointer hover:scale-[1.01] transition`}
            onClick={() => onPressItem(item.id)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-24 h-24 object-cover"
            />
            <div className="flex-1 p-3">
              <p className={`${theme==='dark'?"text-white  ":"text-black"} text-sm font-semibold leading-tight`}>
                {item.title}
              </p>
              <p className={` ${theme==='dark'?"text-gray-300  ":"text-black"} text-xs mt-1`}>
                Timing: {item.time}
              </p>
              <p className={`${theme==='dark'?"text-gray-300  ":"text-black"} text-xs`}>
                Duration: {item.duration}
              </p>
              <p className={`${theme==='dark'?"text-gray-300  ":"text-black"} text-xs`}>
                Pick up: {item.pickup}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(ActivityList)
