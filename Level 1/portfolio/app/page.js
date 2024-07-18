import Image from "next/image";
import LanguageProficiency from '../components/LanguageProficiency';
import GallerySection from '../components/GallerySection';

export default function Home() {
  return (
    <>
      <div className="home bg-slate-200" id="home">
        <section className="body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="kfc lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <Image
                className="object-cover object-center rounded-full"
                alt="hero"
                src="/img/head.jpg"
                width={400}
                height={400}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                Hi There<span className="waving-hand">👋</span>
                <br className="hidden lg:inline-block" />I am Om Kumar
              </h1>
              <p className="mb-8 leading-relaxed">
                Aspiring Software Engineer || HTML | CSS | JS | C | C++ | Python | My SQL | SQL|| Tech enthusiast
              </p>
              <div className="flex justify-center">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                    Download CV
                  </span>

                </button>
                <div className="socal">
                  <ul className="hover:cursor-pointer flex mx-3 px-3 py-1">
                    <li className="px-2 mx-2 z-10">
                      <a href="https://www.linkedin.com/in/om-kr" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/linkedin.svg" alt="linkedin" width={44} height={44} />
                      </a>
                    </li>
                    <li className="px-2 mx-2 z-10">
                      <a href="https://github.com/Om-Kumar-Ace" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/github.svg" alt="github" width={44} height={44} />
                      </a>
                    </li>
                    <li className="px-2 mx-2 z-10">
                      <a href="https://wa.me/7903465911" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/whatsapp.svg" alt="Whatsapp" width={44} height={44} />
                      </a>
                    </li>
                    <li className="px-2 mx-2 z-10 cursor-pointer">
                      <a href="mailto:om2005kumar001@gamil.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/gmail.svg" alt="mail" width={44} height={44} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="about" id="about">
        <div className="bg-slate-200 body-font flex  items-center py-24">
          <div className="container px-5 mx-auto flex flex-col items-center">
            <div className="text-center mb-20 w-full">
              <h1 className="sm:text-6xl text-3xl font-medium title-font mb-4 text-gray-900">About Me</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700">
                Hi there! I'm Om Kumar, an aspiring Software Engineer currently pursuing a Bachelor of Technology degree in Computer Science Engineering from Asansol Engineering College, affiliated with Maulana Abul Kalam Azad University of Technology. I am a tech enthusiast and a skilled web developer.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/img/Portarit.jpg"
                alt="Photo of Om Kumar"
                width={300}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <section className="text-gray-800 bg-slate-200 body-font">
          <h1 className="sm:text-6xl text-3xl font-medium text-center title-font text-black mb-4">My Education</h1>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap m-auto">
              <div className="box2 p-2 lg:w-1/3">
                <div className="h-full bg-white bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Secondary Education</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">D.A.V. Public School</h1>
                  <p className="leading-relaxed mb-3">I have completed my Secondary education from DAV Public School Rajrappa Project Ramgarh</p>
                </div>
              </div>
              <div className="box2 p-2 lg:w-1/3">
                <div className="h-full bg-white bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Higher Secondary Education</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">D.A.V. Public School</h1>
                  <p className="leading-relaxed mb-3">I have completed my Higher Secondary Education in Science from DAV Public School Rajrappa Project Ramgarh</p>
                </div>
              </div>
              <div className="box2 p-2 lg:w-1/3">
                <div className="h-full bg-white bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Currently Pursuing</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">Asansol Engineering College</h1>
                  <p className="leading-relaxed mb-3">Currently I am pursuing my Bachelor of Technology Degree in Computer Science Engineering from Asansol Engineering College which is affiliated to Maulana Abul Kalam Azad University Of Technology.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="Skill bg-slate-200" id="skill" >
        <div className="container mx-auto">
          <main className="flex flex-col items-center justify-center min-h-screen py-16">
            <h1 className="text-5xl font-bold mb-8">Skills</h1>
            <LanguageProficiency />
          </main>
        </div>
      </div>
      <div className="Projects" id="Projects">
        <section className="text-black bg-slate-200 body-font">
          <h1 className="sm:text-6xl text-3xl font-medium text-center title-font text-black mb-4">My Projects</h1>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-slate-300 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/img/Screenshot 2024-04-10 154642.png"
                    alt="Twitter Clone"
                    width={500}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Clone</h2>
                    <h1 className="title-font text-lg font-medium text-black mb-3">Twitter</h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-blue-400 group-hover:from-cyan-500 inline-flex items-center md:mb-2 lg:mb-0" href="#">
                        Check Out
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-slate-300 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/img/Screenshot 2024-04-10 154642.png"
                    alt="Twitter Clone"
                    width={500}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Clone</h2>
                    <h1 className="title-font text-lg font-medium text-black mb-3">Twitter</h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-blue-400 group-hover:from-cyan-500 inline-flex items-center md:mb-2 lg:mb-0" href="#">
                        Check Out
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-slate-300 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/img/Screenshot 2024-04-10 154642.png"
                    alt="Twitter Clone"
                    width={500}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Clone</h2>
                    <h1 className="title-font text-lg font-medium text-black mb-3">Twitter</h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-blue-400 group-hover:from-cyan-500 inline-flex items-center md:mb-2 lg:mb-0" href="#">
                        Check Out
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-slate-300 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/img/Screenshot 2024-04-10 154642.png"
                    alt="Twitter Clone"
                    width={500}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Clone</h2>
                    <h1 className="title-font text-lg font-medium text-black mb-3">Twitter</h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-blue-400 group-hover:from-cyan-500 inline-flex items-center md:mb-2 lg:mb-0" href="#">
                        Check Out
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-slate-300 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/img/Screenshot 2024-04-10 154642.png"
                    alt="Twitter Clone"
                    width={500}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Clone</h2>
                    <h1 className="title-font text-lg font-medium text-black mb-3">Twitter</h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-blue-400 group-hover:from-cyan-500 inline-flex items-center md:mb-2 lg:mb-0" href="#">
                        Check Out
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <div className=" Achievement">
        <GallerySection />
      </div>
      <div className="Contact">
        <section className="text-gray-600 body-font relative bg-slate-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to get in touch with me. I am open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">omkumar@example.com</a>
                  <p className="leading-normal my-5">1234 Main St.<br />Anytown, USA</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18.36 6.64a9 9 0 11-12.73 0 9 9 0 0112.73 0z"></path>
                        <path d="M12 10.49v4.24"></path>
                        <path d="M12 15.75h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-6.28 8.08 8.5 8.5 0 01-8.42-1.79 8.38 8.38 0 01-.54-11.4 8.38 8.38 0 0111.4-.54 8.5 8.5 0 011.79 8.42 8.38 8.38 0 01-.95 2.62l-1.8-1.8a5.57 5.57 0 00-.64-6.4"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 00-6-6 6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10z"></path>
                        <path d="M12 8a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
