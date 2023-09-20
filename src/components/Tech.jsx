import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div className="cursor-default text-center">
            <p className="text-secondary text-[12px] hover:text-white hover:font-semibold transition-all ease-in duration-150">
              {technology.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const Export = SectionWrapper(Tech, "tech");
export default Export;