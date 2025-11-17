'use client'

import { useState, useEffect, memo } from 'react'

interface WeatherData {
  temp: number
  condition: string
  icon: string
}

export default memo(function PhnomPenhClock() {
  const [time, setTime] = useState<string>('')
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const phnomPenhTime = now.toLocaleString('en-US', {
        timeZone: 'Asia/Phnom_Penh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
      setTime(phnomPenhTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Phnom Penh coordinates: 11.5564° N, 104.9282° E
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=11.5564&longitude=104.9282&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=Asia%2FBangkok'
        )
        const data = await response.json()

        // Weather code mapping (simplified)
        const getWeatherInfo = (code: number) => {
          if (code === 0) return { condition: 'Clear', icon: '☀️' }
          if (code <= 3) return { condition: 'Partly Cloudy', icon: '⛅' }
          if (code <= 48) return { condition: 'Foggy', icon: '🌫️' }
          if (code <= 67) return { condition: 'Rainy', icon: '🌧️' }
          if (code <= 77) return { condition: 'Snowy', icon: '❄️' }
          if (code <= 82) return { condition: 'Rainy', icon: '🌧️' }
          if (code <= 86) return { condition: 'Snowy', icon: '❄️' }
          return { condition: 'Stormy', icon: '⛈️' }
        }

        const weatherInfo = getWeatherInfo(data.current.weather_code)

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition: weatherInfo.condition,
          icon: weatherInfo.icon
        })
      } catch (error) {
        console.error('Failed to fetch weather:', error)
      }
    }

    fetchWeather()
    // Update weather every 10 minutes
    const weatherInterval = setInterval(fetchWeather, 10 * 60 * 1000)

    return () => clearInterval(weatherInterval)
  }, [])

  if (!time) return null

  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-white/80">Phnom Penh:</span>
        <span className="font-mono font-semibold text-yellow-300">
          {time}
        </span>
      </div>
      {weather && (
        <div className="flex items-center gap-2 border-l border-white/20 pl-4">
          <span className="text-2xl">{weather.icon}</span>
          <span className="font-semibold text-yellow-300">{weather.temp}°F</span>
          <span className="text-white/80">{weather.condition}</span>
        </div>
      )}
    </div>
  )
})

