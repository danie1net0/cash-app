import React, { JSX } from 'react';
import Image from 'next/image';

interface Props {
  name: string;
  label: string;
  value?: number;
  icon: string;
}

const Metric: React.FC<Props> = ({
  name,
  label,
  value,
  icon,
}: Props): JSX.Element => {
  return (
    <div className="flex-1 flex items-center text-[#E7E6FB] bg-[#6660C899]/60 rounded-md py-4 px-3 space-x-1 h-[60px]">
      <Image src={`/${icon}.svg`} alt={icon} width={32} height={32} />

      <div>
        <p className="font-normal text-xs">{name}</p>
        <p className="font-bold text-sm leading-3">
          <span className="text-lg leading-5">{value?.toFixed(1)}</span>
          {label}
        </p>
      </div>
    </div>
  );
};

export default Metric;
