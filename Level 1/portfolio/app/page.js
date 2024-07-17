import Image from "next/image";

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
    <div className="about">
      About
    </div>

    </>
  );
}
