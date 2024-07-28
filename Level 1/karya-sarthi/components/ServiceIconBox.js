// components/ServiceIconBox.js

import Image from 'next/image';

const ServiceIconBox = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <Image src={icon} alt={name} width={150} height={150} />
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  );
};

export default ServiceIconBox;
