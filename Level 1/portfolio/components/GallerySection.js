import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  const items = [
    { id: 1,  img: '/img/600x360.png', subtitle: 'THE SUBTITLE', title: 'Shooting Stars', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { id: 2,  img: '/img/600x360.png', subtitle: 'THE SUBTITLE', title: 'The Catalyzer', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { id: 3,  img: '/img/600x360.png', subtitle: 'THE SUBTITLE', title: 'The 400 Blows', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { id: 4,  img: '/img/600x360.png', subtitle: 'THE SUBTITLE', title: 'Neptune', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { id: 5,  img: '/img/600x360.png', subtitle: 'THE SUBTITLE', title: 'Holden Caulfield', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { id: 6,  img: '/img/600x360.png', subtitle: 'THE SUBTITLE', title: 'Alper Kamu', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
  ];

  return (
    <section className="text-gray-600 body-font bg-slate-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {items.map(item => (
            <div key={item.id} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.src}
                  layout="fill"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{item.subtitle}</h2>
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
