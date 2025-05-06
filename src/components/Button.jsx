import React from 'react';

export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="

        w-full py-3 rounded-lg font-semibold shadow-lg
        bg-blue-600 hover:bg-blue-700 text-white
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition
      "
    >
      {children}
    </button>
  );
}
