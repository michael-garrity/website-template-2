import styles from "../style";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <section id="home" className={`hero-section flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-montserrat font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Lorem Ipsum
          </h1>
        </div>
        <p className={`${styles.paragraph} text-black max-w-[470px] mt-5 z-10`}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} hero-img md:my-0 my-10 relative`}>
        <img src={heroImg} alt="blocks" className="relative z-[5]" />
      </div>
    </section>
  );
};

export default Hero;