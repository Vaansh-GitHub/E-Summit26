import styles from './Speakers.module.css';

export default function PastSpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      <div className={styles.sectionHeader}>
              <div>
                <img
                  src="/images/arrow-left.png"
                  alt="Previous"
                  className={styles.arrowImageleft}
                />
              </div>
      
              <div className={styles.headerBox}>
                <span className={styles.headerText}>PAST SPEAKERS</span>
              </div>
      
              <div>
                <img
                  src="/images/arrow-right.png"
                  alt="Next"
                  className={styles.arrowImageright}  
                />
              </div>
            </div>
      
           <div className={styles.speakerCards}>
            <Card />
            <Card />
            <Card />
          </div>
      
      </section>
  );
}

function Card(){
   return (
   <div className={styles.card}>
     <img
           src="/images/card.png"
           alt="Speaker"
            className={styles.speakerImage}
         />
       </div>

  );
}