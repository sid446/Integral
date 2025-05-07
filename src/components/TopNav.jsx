// components/TopNav.jsx
import { FaHome, FaPlus, FaSearch } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { useTheme } from '../context/useTheme'
import { useNavigate } from 'react-router-dom'

export default function TopNav() {
  const { theme } = useTheme()
  const navigate = useNavigate() // ✅ react-router hook

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white'
  const iconColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const iconHover = theme === 'dark' ? 'hover:text-[#d3f462]' : 'hover:text-[#3643FB]'
  const borderBottom = theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'

  return (
    <div
      className={`hidden md:flex fixed top-0 left-0 right-0 ${bgColor} ${borderBottom} px-8 py-3 justify-between items-center shadow z-50`}
    >
      {/* Left - welcome */}
      <div>
        <p className={`text-sm font-medium ${iconColor}`}>Welcome, Chhavi!</p>
      </div>

      {/* Center icons */}
      <div className="flex gap-8 items-center">
        <FaHome
          onClick={() => navigate('/')}
          className={`text-xl cursor-pointer ${iconColor} ${iconHover} transition`}
        />
        <FaPlus
          onClick={() => navigate('/travel-plan')} // ✅ navigate to travel-plan
          className={`text-xl cursor-pointer ${theme === 'dark' ? 'text-[#d3f462]' : 'text-[#3643FB]'}`}
        />
        <FaSearch
        onClick={() => navigate('/search')}
          className={`text-xl cursor-pointer ${iconColor} ${iconHover} transition`}
        />
      </div>

      {/* Right - profile icon */}
      <div>
        <FiUser
        onClick={() => navigate('/profile')}
          className={`text-xl cursor-pointer ${iconColor} ${iconHover} transition`}
        />
      </div>
    </div>
  )
}
