import React, { useState } from 'react';
import { HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUsers, FaUserFriends } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';

import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import OptionButton from '../components/OptionButton';
import Button from '../components/Button';
import { useTheme } from '../context/useTheme';
import { useNavigate } from 'react-router-dom';  // ✅ import navigate

const durationOptions = [
  { value: '1-3', label: '1–3 days' },
  { value: '4-7', label: '4–7 days' },
  { value: '8-14', label: '8–14 days' },
  { value: '15+', label: '15+ days' },
];

const companions = [
  { value: 'solo', label: 'Solo', icon: AiOutlineUser },
  { value: 'couple', label: 'Couple', icon: FaUsers },
  { value: 'family', label: 'Family', icon: GiFamilyHouse },
  { value: 'friends', label: 'Friends', icon: FaUserFriends },
];

export default function TravelPlan() {
  const { theme, toggleTheme } = useTheme();
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travelWith, setTravelWith] = useState('');
  
  const navigate = useNavigate();  // ✅ initialize

  const handleContinue = () => {
    const formData = { destination, duration, travelWith };

    // ✅ temporarily save to localStorage (you can replace this with API call later)
    localStorage.setItem('travelPlanData', JSON.stringify(formData));

    console.log('Form saved:', formData);

    // ✅ navigate to home
    navigate('/');
  };

  const containerBg = theme === 'dark'
    ? 'bg-custom-gradient'
    : 'bg-gradient-to-b from-white via-gray-50 to-gray-100';

  return (
    <div className={`
      ${containerBg}
      flex justify-center
      min-h-screen
      px-4 sm:px-6 md:px-8 lg:px-16
      py-4 sm:py-4
    `}>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl ">
        
        <div className="flex justify-end mb-6 ">
          <button
            type="button"
            onClick={toggleTheme}
            className={`
              text-xs sm:text-sm
              px-2 sm:px-3 py-1 rounded
              transition
              ${theme === 'dark'
                ? 'bg-gray-600 text-white hover:bg-gray-500'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
            `}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="pb-[4rem] flex flex-col justify-between h-full">
          <div>
            <h1 className={`
              font-bold text-[1.4rem] sm:text-3xl md:text-4xl
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
            `}>
              Plan Your Journey, Your Way!
            </h1>
            <p className={`
              mb-8
              ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              text-sm sm:text-md md:text-lg
            `}>
              Let’s create your personalised travel experience
            </p>

            <TextField
              label="Where would you like to go?"
              icon={HiOutlineLocationMarker}
              placeholder="Enter Destination"
              value={destination}
              onChange={e => setDestination(e.target.value)}
            />

            <SelectField
              label="How long will you stay?"
              icon={HiOutlineCalendar}
              placeholder="Select Duration"
              options={durationOptions}
              value={duration}
              onChange={e => setDuration(e.target.value)}
            />

            <div className="mb-8">
              <p className={`
                mb-3 text-lg sm:text-xl md:text-2xl font-semibold
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              `}>
                Who are you traveling with?
              </p>
              <div className="grid grid-cols-2 gap-4">
                {companions.map(({ value, label, icon }) => (
                  <OptionButton
                    key={value}
                    selected={travelWith === value}
                    onClick={() => setTravelWith(value)}
                    icon={icon}
                    label={label}
                  />
                ))}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            onClick={handleContinue}  // ✅ use handler
          >
            Continue
          </Button>

        </div>
      </div>
    </div>
  );
}
