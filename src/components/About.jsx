import { features } from "../constants/features.js";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row ${index !== features.length - 1 ? "mb-6" : "mb-0"}`}>
    <div className={`w-[64px] h-[64px] flex items-center`}>
      <img src={icon} alt="feature" className="w-[50%] h-[50%] object-contain items-center" />
    </div>
    <div className="flex-1 flex flex-col">
      <h4 className="font-montserrat font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-montserrat font-normal text-black text-[16px] leading-[24px] max-w-[470px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () =>  (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem ipsum dolor
      </h2>
      <p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>

      <Button styles={`z-50 mt-10`} />
    </div>

    <div className={`flex-1 flex justify-center md:ml-10 ml-0 md:mt-0 mt-16 relative flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default About;