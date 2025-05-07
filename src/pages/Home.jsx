import { useState, useCallback } from 'react'
import { useTheme } from '../context/useTheme'  // ✅ added

import shangaiImg from '../assets/shangai.png'
import hotelImg from '../assets/mmmmeme.png'
import tokyoImg from '../assets/tokyo.png'
import senso from '../assets/senso.png'
import kimono from '../assets/kimono.png'
import tokyosky from '../assets/tokyosky.png'

import TripHeader from '../components/HomePageComponent/TripHeader'
import TripCard from '../components/HomePageComponent/TripCard'
import FlightInfoCard from '../components/HomePageComponent/FlightInfoCard'
import AccommodationList from '../components/HomePageComponent/AccommodationList'
import ActivityList from '../components/HomePageComponent/ActivityList'

import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'

export default function TravelOverviewScreen() {
  const { theme } = useTheme()  // ✅ added

  const [activeTab, setActiveTab] = useState('home')

  const handleSettings = useCallback(() => {}, [])
  const handleTripPress = useCallback(() => {}, [])
  const handleActivityPress = useCallback((id) => {}, [])

  const dummyFlight = {
    from: 'DEL',
    to: 'NRT',
    date: '21 Jan, 2025 · 06:30 AM',
    airline: 'Air Tokyo',
    status: 'Confirmed',
  }

  const dummyHotels = [
    { id: '1', name: 'Shinagawa Prince Hotel', imageUrl: shangaiImg, nights: 2, status: 'Confirmed', CheckIn: '26.01.2025, 11:15 pm', CheckOut: '28.01.2025, 11:15am ' },
    { id: '2', name: 'Mercure Tokyo Hotel', imageUrl: hotelImg, nights: 2, status: 'Pending', CheckIn: '28.01.2025, 6:00 pm', CheckOut: '30.01.2025, 11:15am' },
  ]

  const dummyActivities = [
    { id: 'a1', title: 'Senso-ji Temple', imageUrl: senso, time: '09:00 AM' },
    { id: 'a2', title: 'Tokyo Sky Tree', imageUrl: tokyosky, time: '11:00 AM' },
    { id: 'a3', title: 'Kimono Wearing', imageUrl: kimono, time: 'Anytime before 8:00pm' },
  ]

  return (
    <div className={`flex flex-col min-h-screen relative ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TopNav />

      <div className="flex-1 overflow-y-auto pb-20 md:pt-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <TripHeader userName="Chhavi" onSettingsPress={handleSettings} />

          <TripCard
            imageUrl={tokyoImg}
            title="TOKYO"
            dates="21.01.2025 – 02.02.2025"
            daysLeft={8}
            distanceKm={4294}
            onPress={handleTripPress}
          />

          <FlightInfoCard flight={dummyFlight} />
          <AccommodationList data={dummyHotels} />
          <ActivityList data={dummyActivities} onPressItem={handleActivityPress} />
        </div>
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
