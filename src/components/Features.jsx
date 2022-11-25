import blocks from "../assets/blocksImg.png";
import styles, { layout } from "../style";

const Features = () => (
  <section id="features" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={blocks} alt="blocks" className="relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Lorem ipsum <br className="sm:block hidden" /> dolor sit amet
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </section>
);

export default Features;