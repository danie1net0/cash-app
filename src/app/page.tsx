import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Pesquisar por localidade"
        className="w-1/3 h-[61px] p-3 mb-14 rounded-[9px] bg-[#6D67D0] text-[#C2BFF4] font-bold text-xl text-center border-none focus:outline-none"
      />

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
            <p className="text-white/80 text-sm font-bold">Rio do Sul, SC</p>
          </div>
        </div>

        <div className="text-center mt-14">
          <h1 className="text-white text-[88px] font-bold">
            18
            <span className="text-[#DAD8F7] font-bold text-2xl align-text-top">
              °C
            </span>
          </h1>
        </div>

        <div className="flex-1 flex items-end gap-4 p-4">
          <div className="flex-1 flex items-center text-[#E7E6FB] bg-[#6660C899]/60 rounded-md py-4 px-6 gap-4 h-[60px]">
            <Image src="/wind.svg" alt="Wind" width={32} height={32} />

            <div>
              <p className="font-normal text-xs">Vento</p>
              <p className="font-bold text-sm leading-3">
                <span className="text-lg leading-5">17</span>km/h
              </p>
            </div>
          </div>

          <div className="flex-1 flex items-center text-[#E7E6FB] bg-[#6660C899]/60 rounded-md py-4 px-6 gap-4 h-[60px]">
            <Image src="/rain.svg" alt="Humidity" width={32} height={32} />

            <div>
              <p className="font-normal text-xs">Umidade</p>
              <p className="font-bold text-sm leading-3">
                <span className="text-lg leading-5">31</span>%
              </p>
            </div>
          </div>

          <div className="flex-1 flex items-center text-[#E7E6FB] bg-[#6660C899]/60 rounded-md px-6 gap-4 h-[60px]">
            <Image src="/cloud.svg" alt="Rain" width={32} height={32} />

            <div>
              <p className="font-normal text-xs">Chuva</p>
              <p className="font-bold text-sm leading-3">
                <span className="text-lg leading-5">10</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
