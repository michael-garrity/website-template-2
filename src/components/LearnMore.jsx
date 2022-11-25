import blocks2 from "../assets/blocksImg2.png";
import styles, { layout } from "../style";
import Button from "./Button";

const LearnMore = () => (
  <section id="learnmore" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Excepteur sint occaecat <br className="sm:block hidden" /> cupidatat non proident.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <Button text="Learn More" styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={blocks2} className="max-w-[400px]" alt="blocks"/>
    </div>
  </section>
);

export default LearnMore;