import React from 'react';
import Image from 'next/image';

const ChatBot = () => {
  return (
    <div className="fixed right-5 bottom-5 bg-blue-600 text-white p-3 rounded-full cursor-pointer flex items-center justify-center">
      <Image src="/bot.svg" width={50} height={50} alt="ChatBot" />
    </div>
  );
}

export default ChatBot;

  