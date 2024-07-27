// components/ServiceIconBox.js

import Image from 'next/image';

const ServiceIconBox = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
      <Image src={icon} alt={name} width={50} height={50} />
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  );
};

export default ServiceIconBox;
