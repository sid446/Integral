// components/BottomNav.jsx
import { FaHome, FaPlus, FaSearch } from 'react-icons/fa'
import { FiUser, FiHeart } from 'react-icons/fi'
import { useTheme } from '../context/useTheme'
import { useNavigate } from 'react-router-dom'

export default function BottomNav({ activeTab, setActiveTab }) {
  const { theme } = useTheme()
  const navigate = useNavigate()

  const bgInactive = theme === 'dark' ? 'bg-gray-900' : 'bg-white'
  const iconInactive = theme === 'dark' ? 'text-gray-400' : 'text-zinc-500'
  const bgActive = theme === 'dark' ? 'bg-[#D1F46233]' : 'bg-[#3643FB4D]'
  const iconActive = theme === 'dark' ? 'text-[#d3f462]' : 'text-[#3643FB]'

  // Mapping tab to route
  const tabRoutes = {
    home: '/',
    search: '/search',
    plus: '/travel-plan',
    heart: '',
    user: '/profile'
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${bgInactive} px-6 py-4 flex justify-between items-center shadow-lg md:hidden`}>
      {[
        { key: 'home', Icon: FaHome },
        { key: 'search', Icon: FaSearch },
        { key: 'plus', Icon: FaPlus },
        { key: 'heart', Icon: FiHeart },
        { key: 'profile', Icon: FiUser },
      ].map(({ key, Icon }) => (
        <div
          key={key}
          onClick={() => {
            setActiveTab(key)
            navigate(tabRoutes[key])
          }}
          className={`p-3 rounded-full ${activeTab === key ? bgActive : bgInactive}`}
        >
          <Icon
            className={`text-xl cursor-pointer ${
              key === 'plus'
                ? iconActive // ✅ always active color
                : activeTab === key
                ? iconActive
                : iconInactive
            }`}
          />
        </div>
      ))}
    </div>
  )
}
