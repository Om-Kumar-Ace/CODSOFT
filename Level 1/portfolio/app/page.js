import Image from "next/image";
import LanguageProficiency from '../components/LanguageProficiency';

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
        <div className=" bg-slate-200 body-font flex">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-10xl text-3xl font-medium text-center title-font mb-4">About me</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"> Hi there!  I'm Om Kumar, an aspiring Software Engineer currently pursuing a Bachelor of Technology degree in Computer Science Engineering from Asansol Engineering College, affiliated with Maulana Abul Kalam Azad University of Technology. I am a tech enthusiast and a skilled web developer.</p>
            </div>
          </div>
          <div className="container px-5 mx-auto">
            <Image src="/img/Portarit.jpg" alt="Photo" width={300} height={350} />
          </div>
        </div>
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

    </>
  );
}
