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
      
    </section>
  );
};

export default FeaturedSection;
