"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import Section from '../components/Section';
import JoinUsButton from '../components/JoinUsButton';
import ChatBot from '../components/ChatBot';
import 'tailwindcss/tailwind.css';
import AppFeaturesSection from '@/components/AppFeaturesSection';
import WhyUsSection from '@/components/WhyUsSection';
import WhyUs from '@/components/WhyUsSection';
import Contact from '@/components/contact';
import FeaturedSection from '@/components/FeaturedSection';
import AboutUsSection from '@/components/AboutUsSection';

const banners = [
  '/banner1.jpg',
  '/banner2.jpg',
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleJoinUsClick = () => {
    alert('🎉 Congratulations! Welcome to Karya-Sarathi! 🎉');
  };

  const handleDotClick = (index) => {
    setIndex(index);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className='home w-full flex flex-col items-center text-center' id="home">
        <div className='container mx-auto h-3.5 p-9 m-10 -z-50 '> </div>
        <Banner src={banners[index]} currentIndex={index} banners={banners} onDotClick={handleDotClick} />
        <FeaturedSection />
        <div className='container mx-auto h-3.5 p-7 m-7 z-10 '></div>
        <Section >
          <AppFeaturesSection />

        </Section>
      </div>
      <div className='container mx-auto h-3.5 p-7 m-7 z-10 '></div>
      <Section title="Join Us">
        <JoinUsButton onClick={handleJoinUsClick} />
      </Section>
      <div className='about w-full flex flex-col items-center text-center' id="about">
        <div className='container mx-auto h-3.5 p-7 m-7 z-10 '> </div>
        <Section className="about" id="about">
          <AboutUsSection />
        </Section>
      </div>
        <div className='contact w-full flex flex-col items-center text-center' id="contact">
          <div className='container mx-auto h-3.5 p-7 m-7 z-10 '></div>
      <Section >
          <Contact /> 
      </Section>
        </div>
      
    </div>
  );
};

export default Home;
