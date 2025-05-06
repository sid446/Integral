// src/components/OptionButton.jsx
import React from 'react';
import { useTheme } from '../context/useTheme';

export default function OptionButton({
  selected,
  onClick,
  icon: Icon,
  label
}) {
  const { theme } = useTheme();

  const baseClasses = selected
    ? 'bg-blue-600 text-white'
    : theme === 'dark'
      ? 'bg-[#333333] text-gray-300 hover:bg-gray-600'
      : 'bg-white text-gray-800 hover:bg-gray-100';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`
        flex items-center justify-center gap-2 py-4 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition 
        ${theme==='dark'?"":'border  border-gray-500'}
        ${baseClasses}
      `}
    >
      {Icon && <Icon className="text-lg" />}
      <span className="text-sm">{label}</span>
    </button>
  );
}
