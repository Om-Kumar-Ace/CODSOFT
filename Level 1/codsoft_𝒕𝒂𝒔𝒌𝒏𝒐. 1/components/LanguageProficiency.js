// components/LanguageProficiency.js
import Image from 'next/image';

const LanguageProficiency = () => {
  const languages = [
    { name: 'Python', proficiency: 40, img: '/img/python.svg' },
    { name: 'HTML', proficiency: 75, img: '/img/file-type-html.svg' },
    { name: 'CSS', proficiency: 70, img: '/img/file-type-css.svg' },
    { name: 'JavaScript', proficiency: 45, img: '/img/file-type-js-official.svg' },
    { name: 'C', proficiency: 60, img: '/img/c-original.svg' },
    { name: 'C++', proficiency: 35, img: '/img/cpp.svg' },
    { name: 'SQL', proficiency: 40, img: '/img/mysql-original-wordmark.svg' },
    { name: 'MongoDB', proficiency: 35, img: '/img/mongodb.svg' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="sm:text-3xl text-3xl font-medium text-center title-font text-black mb-8">
        Languages Known
      </h1>
      <div className="flex flex-wrap -m-2">
        {languages.map((lang) => (
          <div key={lang.name} className="p-2 sm:w-1/2 w-full">
            <div className="bg-slate-100 rounded flex p-4 h-full items-center justify-between transition-transform duration-500 transform hover:scale-105">
              <Image src={lang.img} alt={lang.name} width={60} height={60} className="transition-transform duration-500 transform hover:scale-125" />
              <span className="title-font font-medium text-lg text-black ml-4">{lang.name}</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-4 ml-4">
                <div
                
                  className="bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 h-4 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${lang.proficiency}%` }}
                ></div>
              </div>
              <span className="ml-4 text-lg text-black">{lang.proficiency}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default LanguageProficiency;
