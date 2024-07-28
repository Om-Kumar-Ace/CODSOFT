import Image from 'next/image';
import ServiceIconBox from './ServiceIconBox';

const services = [
  { name: 'Electrician', icon: '/Electrician-bro.svg' },
  { name: 'Plumber', icon: '/Pipeline maintenance-amico.svg' },
  { name: 'Gardener', icon: '/Gardening-rafiki.svg' },
  { name: 'Pest Control', icon: '/cleaning service-cuate.svg' },
  { name: 'Driver', icon: '/By my car-amico.svg' },
  { name: 'Laundry', icon: '/Laundry and dry cleaning-bro.svg' },
  { name: 'Chef', icon: '/female chef-rafiki.svg' },
  { name: 'Home Tutor', icon: '/Teacher student-bro.svg' },
  { name: 'Labour', icon: '/Construction worker-bro.svg' },
  { name: 'Maid', icon: '/cleaning service-rafiki.svg' },
  { name: 'CAR SPA', icon: '/Car wash-bro.svg' },
  { name: 'More', icon: '/view-more.png' },
];

const FeaturedSection = () => {
  return (
    <section className="p-4 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Featured Services</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
        {services.map((service, index) => (
          <ServiceIconBox
            key={index}
            name={service.name}
            icon={service.icon}
          />
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center sm:flex-row sm:items-start p-4 bg-blue-500 text-white rounded-lg ">
        <Image
          className="rounded-full"
          src="/worker-image.jpg"
          alt="Worker of the Month"
          width={50}
          height={50}
        />
        <div className="ml-0 mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <h3 className="text-lg font-bold">Binod Kumar</h3>
          <p className="text-sm">Earned: ₹35,000</p>
        </div>
        <div className="ml-0 mt-4 sm:ml-auto sm:mt-0 text-center">
          <span className="block text-xs">You Won</span>
          <Image src="/trophy-icon.png" alt="Trophy" width={30} height={30} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
