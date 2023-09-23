import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 mb-2 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Ali</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-[40ch]`}>
            I&apos;m a <span className="text-[#915eff]">Fullstack Developer</span>
            /<span className="text-[#915eff] ">Software Engineer</span>, this is
            my portfolio, join me on this coding journey as I showcase my projects and learning experiences,
            and enjoy your time here!
          </p>
        </div>

      </div>


      <div className="flex absolute xs:bottom-36 bottom-80 w-full justify-center items-center">
        <a href="#about">
          <div className="animated-scroll-icon w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;