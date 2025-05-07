import React, { memo, useState } from 'react'
import { useTheme } from '../../context/useTheme'

function TripHeader({ userName, onSettingsPress }) {
  const { theme, toggleTheme } = useTheme()  // ✅ get theme + setter
  const [menuOpen, setMenuOpen] = useState(false)

  const changeTheme = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="flex justify-between items-center p-4 relative">
      <div>
        <p className="text-xl font-semibold">Hello {userName}!</p>
        <p className="text-gray-400 text-sm">Ready for the trip?</p>
      </div>

      {/* Avatar / profile button */}
      <div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg z-50 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <button
              onClick={changeTheme}
              className="w-full text-left px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700"
            >
              Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(TripHeader)
