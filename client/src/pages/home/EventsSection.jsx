// EventsSection.jsx
import styles from "./Event.module.css";

export default function EventsSection() {
  return (
   
      <section className={styles.eventsSection}>
      <div className={styles.sectionHeader}>
        <div>
          <img
            src="/images/arrow-left.png"
            alt="Previous"
            className={styles.arrowImageleft}
          />
        </div>

        <div className={styles.headerBox}>
          <span className={styles.headerText}>EVENTS</span>
        </div>

        <div>
          <img
            src="/images/arrow-right.png"
            alt="Next"
            className={styles.arrowImageright}  
          />
        </div>
      </div>

      <div className={styles.eventCards}>
        <EventCard />
      </div>
   
    </section>
  );
}

function EventCard() {
  return (
    <div className={styles.eventCard}>
      <img
        src="/images/event-card.png"
        alt="Event"
        className={styles.eventImage}
      />
    </div>
  );
}