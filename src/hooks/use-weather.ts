import { useState } from 'react';

import { ForecastData } from '@/interfaces/forecast-data';
import { getForecast as getForecastApi } from '@/api/weather';

export default function useWeather() {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const getForecast = async (): Promise<void> => {
    if (!city) return;

    try {
      const forecast: ForecastData = await getForecastApi(city, 'BR');
      setForecast(forecast);
      setError(null);
    } catch (error) {
      setCity('');
      setError(error.message);
    }
  };

  return { forecast, city, error, setCity, getForecast };
}
