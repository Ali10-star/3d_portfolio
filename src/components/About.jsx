/* eslint-disable react/no-unescaped-entities */
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
            justify-evenly items-center flex-col hover:brightness-75 hover:rotate-3
            transition-all ease-in duration-100"
        >
          <img src={icon} alt={`icon-${index}`} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a software developer with experience in Python, .NET and
        TypeScript/JavaScript, with expertise in frameworks like React, Next.js and
        Django. I'm a quick learner who collaborates closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

const Export = SectionWrapper(About, "about");
export default Export;