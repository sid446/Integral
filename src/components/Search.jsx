import { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Search, MapPin, Star, Clock, X } from 'lucide-react';

export default function PlaceSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('home'); 
  
  
  const isDark = theme === 'dark';
  const apiKey = import.meta.env.API_KEY;

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Save recent searches to localStorage
  const saveSearch = (searchTerm) => {
    const updatedSearches = [
      searchTerm,
      ...recentSearches.filter(s => s !== searchTerm)
    ].slice(0, 5);
    
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      // Save search to recent searches
      saveSearch(query);
      
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`
      );
      
      if (!res.ok) {
        throw new Error(`API responded with status: ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data.status === 'OK') {
        setResults(data.results);
      } else {
        setError(`Error: ${data.status}${data.error_message ? ` - ${data.error_message}` : ''}`);
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to search places. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setError('');
  };

  const useRecentSearch = (term) => {
    setQuery(term);
    setTimeout(() => handleSearch(), 100);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <TopNav />
      
      <main className="flex-1 max-w-screen-lg mx-auto px-4 w-full pb-24 pt-4 md:pt-16">
        <h1 className={`font-bold text-2xl md:text-3xl mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Discover Places
        </h1>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className={`flex items-center rounded-xl overflow-hidden shadow-md ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="pl-4">
              <Search className={isDark ? 'text-gray-400' : 'text-gray-500'} size={20} />
            </div>
            
            <input
              type="text"
              placeholder="Search cafes, restaurants, attractions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className={`flex-1 py-3 px-2 focus:outline-none ${
                isDark 
                  ? 'bg-gray-800 text-white placeholder-gray-400' 
                  : 'bg-white text-gray-900 placeholder-gray-500'
              }`}
            />
            
            {query && (
              <button 
                onClick={clearSearch}
                className="px-2"
                aria-label="Clear search"
              >
                <X size={18} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
              </button>
            )}
            
            <button
              onClick={handleSearch}
              disabled={!query.trim() || loading}
              className={`px-2 py-3 font-medium ${
                !query.trim() || loading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : isDark
                    ? 'bg-[#d3f462]  text-gray-900 hover:bg-[#c1e150]'
                    : 'bg-[#3643FB]  text-white hover:bg-[#2833c9]'
              } transition`}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
        
        {/* Recent Searches */}
        {recentSearches.length > 0 && !results.length && !loading && (
          <div className="mb-6">
            <h2 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Recent Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((term, index) => (
                <button
                  key={index}
                  onClick={() => useRecentSearch(term)}
                  className={`flex items-center px-3 py-1 rounded-full text-sm ${
                    isDark 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Clock size={14} className="mr-1" />
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className={`mb-6 p-4 rounded-lg ${isDark ? 'bg-red-900/30' : 'bg-red-50'}`}>
            <p className="text-red-500 font-medium text-sm">{error}</p>
          </div>
        )}
        
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className={`h-8 w-8 rounded-full mb-2 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              <div className={`h-4 w-24 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            </div>
          </div>
        )}
        
        {/* Results Grid */}
        {results.length > 0 && (
          <>
            <p className="text-sm mb-4 font-medium">
              Found {results.length} place{results.length !== 1 ? 's' : ''}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {results.map((place) => (
                <div
                  key={place.place_id}
                  className={`rounded-xl overflow-hidden shadow-lg transition hover:shadow-xl ${
                    isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  {/* Place Image */}
                  <div className="h-48 relative bg-gray-200">
                    {place.photos ? (
                      <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${apiKey}`}
                        alt={place.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/api/placeholder/400/200";
                          e.target.classList.add("opacity-60");
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <MapPin size={32} className={isDark ? 'text-gray-700' : 'text-gray-400'} />
                      </div>
                    )}
                    
                    {/* Rating Badge */}
                    {place.rating && (
                      <div className={`absolute top-3 right-3 px-2 py-1 rounded-full flex items-center 
                        ${isDark ? 'bg-gray-900/80' : 'bg-white/90'} shadow-sm`}>
                        <Star size={14} className="text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Place Info */}
                  <div className="p-4">
                    <h2 className="font-bold text-lg mb-1 line-clamp-1">{place.name}</h2>
                    
                    <p className={`text-sm mb-2 line-clamp-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {place.formatted_address}
                    </p>
                    
                    {/* Types Tags */}
                    {place.types && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {place.types.slice(0, 3).map((type, index) => (
                          <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full ${
                              isDark 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {type.replace(/_/g, ' ')}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* Empty State */}
        {!loading && !results.length && !error && query && (
          <div className="text-center py-12">
            <MapPin size={48} className={`mx-auto mb-4 ${isDark ? 'text-gray-700' : 'text-gray-300'}`} />
            <h3 className="text-lg font-medium mb-2">No places found</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Try adjusting your search terms
            </p>
          </div>
        )}
      </main>
      
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

    </div>
  );
}