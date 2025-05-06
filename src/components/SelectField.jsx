
import React, { useId } from 'react';
import { useTheme } from '../context/useTheme';

export default function SelectField({
  label,
  icon: Icon,
  placeholder,
  options,
  value,
  onChange
}) {
  const { theme } = useTheme();
  const id = useId();

 
  const bgClasses =
    theme === 'dark'
      ? 'bg-[#333333] text-white focus:ring-blue-500'
      : 'bg-white text-black focus:ring-blue-600';
  const labelColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className="mb-7">
      <label htmlFor={id} className={`block mb-1 text-lg font-semibold ${labelColor}`}>
        {label}
      </label>
      <div className={`relative ${theme==='dark'?"":'border  border-gray-500'}  rounded`}>
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        )}
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={`
            w-full
            ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3
            rounded-lg
            ${bgClasses}
            focus:outline-none focus:ring-2
            transition
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
