import styles from "./Speakers.module.css";

export default function SpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      
      {/* ===== HEADER ===== */}
      <div className={styles.sectionHeader}>
        <img
          src="/images/arrowleft.png"
          alt=""
          className={styles.arrow}
        />

        <div className={styles.headerBox}>
          <span className={styles.headerText}>SPEAKERS</span>
        </div>

        <img
          src="/images/arrowright.png"
          alt=""
          className={styles.arrow}
        />
      </div>

      {/* ===== SPEAKER CARDS ===== */}
      <div className={styles.cardsRow}>
        <img src="/images/speakers/bhanu.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/chirag.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/ashish.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/buddha.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/haren.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/kamlesh.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/mausumi.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/nidhi.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/sambit.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/satyajit.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/shibu.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/sriparna.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/srivatsa.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/suman.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/speakers/varun.png" alt="Speaker" className={styles.cardImage} />
      </div>

    </section>
  );
}
