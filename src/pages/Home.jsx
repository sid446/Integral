import React, { useContext } from 'react'

function Home() {
    const {theme}=useContext(ThemeContext)
  return (
    <div className={`min-h-screen  ${theme==='dark'?'bg-[#0B0809]':'bg-white'}`}>
        <div className=' '>
            

        </div>

    </div>
  )
}

export default Home