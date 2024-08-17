import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  const items = [
    { id: 1,  img: '/img/C2.png', subtitle: 'THE SUBTITLE', title: 'Shooting Stars', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { id: 2,  img: '/img/C1.png', subtitle: 'THE SUBTITLE', title: 'The Catalyzer', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
  ];

  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">Achievements</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>
        <div className="flex flex-wrap -m-10">
          {items.map(item => (
            <div key={item.id} className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                src={item.img}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  layout="fill"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{item.subtitle}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
