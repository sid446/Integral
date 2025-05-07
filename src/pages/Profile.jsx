import { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { User, Edit, MapPin, Star, Bookmark, Clock, LogOut, Settings, Camera } from 'lucide-react';

export default function Profile({ activeTab }) {
  const { theme ,toggleTheme} = useTheme();
  const isDark = theme === 'dark';
  const [activeSection, setActiveSection] = useState('saved');
  
  // Mock data for profile
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    username: '@alexjohnson',
    bio: 'Travel enthusiast. Coffee addict. Always looking for new places to explore!',
    location: 'San Francisco, CA',
    joinedDate: 'January 2023',
    profileImage: null, // Will use placeholder
  });

  // Mock data for saved places
  const [savedPlaces, setSavedPlaces] = useState([
    {
      id: '1',
      name: 'Golden Gate Park',
      type: 'Park',
      address: '501 Stanyan St, San Francisco, CA',
      rating: 4.8,
      savedDate: '2 weeks ago',
    },
    {
      id: '2',
      name: 'Tartine Bakery',
      type: 'Bakery',
      address: '600 Guerrero St, San Francisco, CA',
      rating: 4.7,
      savedDate: '1 month ago',
    },
    {
      id: '3',
      name: 'Palace of Fine Arts',
      type: 'Landmark',
      address: '3601 Lyon St, San Francisco, CA',
      rating: 4.9,
      savedDate: '3 days ago',
    }
  ]);

  // Mock data for visited places
  const [visitedPlaces, setVisitedPlaces] = useState([
    {
      id: '4',
      name: 'Ferry Building',
      type: 'Shopping',
      address: '1 Ferry Building, San Francisco, CA',
      rating: 4.6,
      visitDate: 'April 15, 2024',
    },
    {
      id: '5',
      name: 'Dolores Park',
      type: 'Park',
      address: 'Dolores St &, 19th St, San Francisco, CA',
      rating: 4.8,
      visitDate: 'March 22, 2024',
    }
  ]);

  // Function to remove item from saved places
  const removeSavedPlace = (id) => {
    setSavedPlaces(savedPlaces.filter(place => place.id !== id));
  };

  // Function to remove item from visited places
  const removeVisitedPlace = (id) => {
    setVisitedPlaces(visitedPlaces.filter(place => place.id !== id));
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <TopNav />
      
      <main className="flex-1 max-w-screen-lg mx-auto px-4 w-full pb-20 pt-4 md:pt-16">
        {/* Profile Header */}
        <div className={`rounded-xl p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={profile.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User size={40} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                )}
              </div>
              <button 
                className={`absolute bottom-0 right-0 rounded-full p-2 ${
                  isDark ? 'bg-gray-700' : 'bg-gray-100'
                }`}
              >
                <Camera size={16} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
              </button>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h1 className="text-xl font-bold">{profile.name}</h1>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {profile.username}
                </span>
              </div>
              
              <p className="mb-4">{profile.bio}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <MapPin size={16} className={`mr-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {profile.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className={`mr-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Joined {profile.joinedDate}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Edit Profile Button */}
            <button className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              isDark 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition`}>
              <Edit size={16} />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex border-b mb-6 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveSection('saved')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
              activeSection === 'saved'
                ? isDark
                  ? 'text-[#d3f462] border-b-2 border-[#d3f462]'
                  : 'text-[#3643FB] border-b-2 border-[#3643FB]'
                : isDark
                ? 'text-gray-400 hover:text-gray-300'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <Bookmark size={16} />
              <span>Saved Places</span>
            </div>
          </button>
          
          <button
            onClick={() => setActiveSection('visited')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
              activeSection === 'visited'
                ? isDark
                  ? 'text-[#d3f462] border-b-2 border-[#d3f462]'
                  : 'text-[#3643FB] border-b-2 border-[#3643FB]'
                : isDark
                ? 'text-gray-400 hover:text-gray-300'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Visited Places</span>
            </div>
          </button>
          
          <button
            onClick={() => setActiveSection('settings')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
              activeSection === 'settings'
                ? isDark
                  ? 'text-[#d3f462] border-b-2 border-[#d3f462]'
                  : 'text-[#3643FB] border-b-2 border-[#3643FB]'
                : isDark
                ? 'text-gray-400 hover:text-gray-300'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <Settings size={16} />
              <span>Settings</span>
            </div>
          </button>
        </div>
        
        {/* Saved Places Section */}
        {activeSection === 'saved' && (
          <div>
            <h2 className="font-semibold text-lg mb-4">
              Saved Places ({savedPlaces.length})
            </h2>
            
            {savedPlaces.length === 0 ? (
              <div className={`rounded-lg p-8 text-center ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <Bookmark size={40} className={`mx-auto mb-4 ${isDark ? 'text-gray-700' : 'text-gray-300'}`} />
                <h3 className="text-lg font-medium mb-2">No saved places yet</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Places you save will appear here
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedPlaces.map(place => (
                  <div
                    key={place.id}
                    className={`rounded-xl overflow-hidden shadow-md ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">{place.name}</h3>
                        <div className="flex gap-1">
                          <button 
                            onClick={() => removeSavedPlace(place.id)}
                            className={`p-1 rounded-full ${
                              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            }`}
                          >
                            <Bookmark size={16} className={isDark ? 'text-[#d3f462]' : 'text-[#3643FB]'} fill="currentColor" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-1">
                        <MapPin size={14} className={`mr-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        <p className={`text-sm truncate ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {place.address}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isDark 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {place.type}
                        </span>
                        
                        <div className="flex items-center">
                          <Star size={14} className="text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{place.rating}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          Saved {place.savedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Visited Places Section */}
        {activeSection === 'visited' && (
          <div>
            <h2 className="font-semibold text-lg mb-4">
              Visited Places ({visitedPlaces.length})
            </h2>
            
            {visitedPlaces.length === 0 ? (
              <div className={`rounded-lg p-8 text-center ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <MapPin size={40} className={`mx-auto mb-4 ${isDark ? 'text-gray-700' : 'text-gray-300'}`} />
                <h3 className="text-lg font-medium mb-2">No visited places yet</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Places you mark as visited will appear here
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visitedPlaces.map(place => (
                  <div
                    key={place.id}
                    className={`rounded-xl overflow-hidden shadow-md ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">{place.name}</h3>
                        <div className="flex gap-1">
                          <button 
                            onClick={() => removeVisitedPlace(place.id)}
                            className={`p-1 rounded-full ${
                              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            }`}
                          >
                            <Clock size={16} className={isDark ? 'text-[#d3f462]' : 'text-[#3643FB]'} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-1">
                        <MapPin size={14} className={`mr-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        <p className={`text-sm truncate ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {place.address}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isDark 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {place.type}
                        </span>
                        
                        <div className="flex items-center">
                          <Star size={14} className="text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{place.rating}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          Visited {place.visitDate}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Settings Section */}
        {activeSection === 'settings' && (
          <div>
            <h2 className="font-semibold text-lg mb-4">Settings</h2>
            
            <div className={`rounded-xl overflow-hidden shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Account Settings */}
                <div className="p-4">
                  <h3 className="font-medium mb-3">Account</h3>
                  
                  <div className={`rounded-lg p-3 mb-2 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition cursor-pointer`}>
                    <div className="flex items-center">
                      <User size={18} className="mr-3" />
                      <span>Personal Information</span>
                    </div>
                  </div>
                  
                  <div className={`rounded-lg p-3 mb-2 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition cursor-pointer`}>
                    <div className="flex items-center">
                      <Settings size={18} className="mr-3" />
                      <span>Preferences</span>
                    </div>
                  </div>
                  
                  <div className={`rounded-lg p-3 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition cursor-pointer`}>
                    <div className="flex items-center">
                      <LogOut size={18} className="mr-3" />
                      <span>Sign Out</span>
                    </div>
                  </div>
                </div>
                
                {/* App Settings */}
                <div className="p-4">
                  <h3 className="font-medium mb-3">App Settings</h3>
                  
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center">
                      <span>Dark Mode</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={isDark}
                        className="sr-only peer"
                        onChange={toggleTheme} // Theme toggle would go here
                      />
                      <div className={`w-11 h-6 rounded-full peer ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3643FB]`}></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center">
                      <span>Notifications</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={true}
                        className="sr-only peer"
                        onChange={() => {}}
                      />
                      <div className={`w-11 h-6 rounded-full peer ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3643FB]`}></div>
                    </label>
                  </div>
                </div>
                
                {/* About */}
                <div className="p-4">
                  <h3 className="font-medium mb-3">About</h3>
                  
                  <div className={`rounded-lg p-3 mb-2 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition cursor-pointer`}>
                    <span>App Version 1.0.0</span>
                  </div>
                  
                  <div className={`rounded-lg p-3 mb-2 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition cursor-pointer`}>
                    <span>Terms of Service</span>
                  </div>
                  
                  <div className={`rounded-lg p-3 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition cursor-pointer`}>
                    <span>Privacy Policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <BottomNav activeTab={activeTab} />
    </div>
  );
}