import styles from "./PastSpeakers.module.css";

export default function PastSpeakersSection() {
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
          <span className={styles.headerText}>PAST SPEAKERS</span>
        </div>

        <img
          src="/images/arrowright.png"
          alt=""
          className={styles.arrow}
        />
      </div>

      {/* ===== SUBTEXT ===== */}
      <p className={styles.subText}>
        Partnering with visionary investors who share our commitment to fostering innovation
        and entrepreneurship
      </p>

      {/* ===== SPEAKER CARDS ===== */}
      <div className={styles.cardsRow}>
        <img src="/images/card.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/card.png" alt="Speaker" className={styles.cardImage} />
        <img src="/images/card.png" alt="Speaker" className={styles.cardImage} />
      </div>

    </section>
  );
}
