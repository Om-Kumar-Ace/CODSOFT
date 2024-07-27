// components/AboutUsSection.js

import { MapPinIcon, TrophyIcon, ShieldCheckIcon, CashIcon, BoltIcon, ChatIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

const AboutUsSection = () => {
  const sections = [
    {
      title: "Innovative Features",
      icon: MapPinIcon,
      items: [
        "Nearby Worker Location: Our app shows the real-time location of active workers nearby, making it easy for customers to get timely service.",
        "Worker of the Month: We recognize and reward top-performing service providers with an award and goodies, ensuring high service standards and motivating workers."
      ]
    },
    {
      title: "Quality Assurance",
      icon: ShieldCheckIcon,
      items: [
        "Skill Verification: We implement thorough verification methods, including skill assessments, background checks, and customer feedback, to ensure all workers are highly skilled and trustworthy.",
        "Work Samples: Service providers’ profiles include samples of their previous work, allowing customers to assess their quality and expertise."
      ]
    },
    {
        title: "Convenient Booking and Payment",
        icon: BoltIcon,
        items: [
          "Flexible Payment Options: We offer various payment methods, including online payments (with discounts) and cash on delivery (COD), with options for UPI payments or cash.",
          "Immediate Service Feature: For urgent needs, customers can select the work they need and get available nearby workers dispatched quickly."
        ]
      },
      {
        title: "User-Friendly Experience",
        icon: StarIcon,
        items: [
          "Real-Time Tracking: Customers can track the status and location of their service providers in real-time.",
          "In-App Messaging and Calling System: Easy communication with service providers through our app’s messaging feature and also call feature."
        ]
      },
      {
        title: "Local Focus and Community Impact",
        icon: UserGroupIcon,
        items: [
          "Supporting Local Workers: We connect local daily wage workers and small repair shops with customers, supporting the local economy and creating job opportunities.",
          "Initial District Launch: Starting locally and expanding ensures that we cater to specific community needs and build strong relationships with customers and workers."
        ]
      },
      {
        title: "Trust and Transparency",
        icon: TrophyIcon,
        items: [
          "Detailed Profiles: Service providers have detailed profiles with reviews, ratings, and verified information, ensuring transparency.",
          "Customer Reviews: Customers can read reviews and ratings to make informed decisions about the service providers they choose."
        ]
      },
    // ... (other sections)
  ];

  return (
    <section className="p-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Platform?</h2>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon; // Dynamically assign the icon component
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-semibold">{section.title}</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="transition-colors duration-300 hover:text-blue-600 flex items-start">
                      <svg className="h-4 w-4 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2 2 2-2m-2 2V4m0 0l-2 2m2-2l2 2M15 10h6m-6 4h6m-6 4h6m-6-8v6m0 0v6m0-6h6" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
