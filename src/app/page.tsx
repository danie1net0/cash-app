'use client';

import React from 'react';
import Image from 'next/image';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import useWeather from '@/hooks/use-weather';
import Metric from '@/components/metric';
import Notification from '@/components/ui/notifications';

export default function Home() {
  const { forecast, error, city, setCity, getForecast } = useWeather();

  return (
    <div className="min-h-screen bg-background bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
      {error && <Notification title="Ooops..." type="error" message={error} />}

      <div className="grid grid-cols-1 w-1/3 h-[61px] mb-14">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && getForecast()}
          placeholder="Pesquisar por localidade"
          className="col-start-1 row-start-1 block w-full p-3 rounded-[9px] bg-[#6D67D0] text-[#C2BFF4] font-bold text-xl text-center border-none focus:outline-none"
        />

        <MagnifyingGlassIcon
          onClick={getForecast}
          className="col-start-1 row-start-1 mr-3 size-6 self-center justify-self-end  text-[#C2BFF4] cursor-pointer"
        />
      </div>

      <div className="w-1/3 aspect-square relative flex flex-col bg-foreground bg-cover bg-center bg-no-repeat rounded-[10px]">
        <div className="absolute -top-[55px] -left-[60px]">
          <Image
            src="/weather.png"
            alt="Cloud"
            width={176}
            height={176}
            className="object-contain"
          />
        </div>

        <div className="text-right mb-8">
          <div className="flex items-center justify-end gap-2 pt-8 pr-8">
            <Image
              src="/location-marker.png"
              alt="Location"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <p className="text-white/80 text-sm font-bold">{forecast?.city}</p>
          </div>
        </div>

        <div className="text-center mt-4">
          {forecast && (
            <>
              <h1 className="text-white text-[88px] font-bold">
                {forecast?.temperature?.toFixed(1)}
                <span className="text-[#DAD8F7] font-bold text-2xl align-text-top">
                  °C
                </span>
              </h1>

              <p className="text-white/80 text-sm font-bold">
                {forecast?.weather}
              </p>
              <p className="text-white/80 text-sm font-bold">
                Max.: {forecast?.max_temperature.toFixed(1)}°&nbsp; Min.:{' '}
                {forecast?.min_temperature.toFixed(1)}°
              </p>
            </>
          )}
        </div>

        <div className="flex-1 flex items-end gap-4 p-4">
          <Metric
            name={'Vento'}
            label={'km/h'}
            value={forecast?.wind}
            icon="wind"
          />
          <Metric
            name={'Umidade'}
            label={'%'}
            value={forecast?.humidity}
            icon="rain"
          />
          <Metric
            name={'Chuva'}
            label={'%'}
            value={forecast?.rain}
            icon="cloud"
          />
        </div>
      </div>
    </div>
  );
}
