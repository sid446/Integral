
import React, { useId } from 'react';
import { useTheme } from '../context/useTheme';

export default function TextField({
  label,
  icon: Icon,
  placeholder,
  value,
  onChange
}) {

  const { theme } = useTheme();
  const id = useId();


  const bgClasses =
    theme === 'dark'
      ? 'bg-[#333333] text-white placeholder-white focus:ring-blue-500'
      : 'bg-white text-black placeholder-black  focus:ring-blue-600';

  
  const labelColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className="mb-6">
      <label htmlFor={id} className={`block mb-1 text-lg font-semibold   ${labelColor}`}>
        {label}
      </label>
      <div className={`relative ${theme==='dark'?"":'border rounded   border-gray-500'}`}>
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        )}
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full
            ${Icon ? 'pl-10' : 'pl-4'}  py-3
            rounded-lg
            ${bgClasses}
            focus:outline-none focus:ring-2
            transition
           
          `}
        />
      </div>
    </div>
  );
}
