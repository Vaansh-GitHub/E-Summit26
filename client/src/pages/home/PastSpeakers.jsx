import styles from './Speakers.module.css';
import { Linkedin, Twitter } from 'lucide-react';

const speakers = [
  {
    id: 1,
    name: "Amit Lodha",
    image: "/images/amit.jpg", 
    linkedin: "https://www.linkedin.com/in/amit-lodha-07452776/",
    twitter: "https://x.com/Ipsamitlodha7"
  },
  {
    id: 2,
    name: "Dr. Tanu Jain",
    image: "/images/tanujain.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-tanu-jain-4aa28a131/",
    twitter: "https://x.com/DrTanuJain1"
  },
  {
    id: 3,
    name: "Sandeep Jain",
    image: "/images/SandeepJain.jpeg",
    linkedin: "https://www.linkedin.com/in/sandeep-jain-/",
    twitter: "https://x.com/sandeep_jain"
  }
];

export default function PastSpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      <div className={styles.sectionHeader}>
              <div>
                <img
                  src="/images/arrowleft.png"
                  alt="Previous"
                  className={styles.arrowImageleft}
                />
              </div>
      
              <div className={styles.headerBox}>
                <span className={styles.headerText}>PAST SPEAKERS</span>
              </div>
      
              <div>
                <img
                  src="/images/arrowright.png"
                  alt="Next"
                  className={styles.arrowImageright}  
                />
              </div>
            </div>
      
           <div className={styles.speakerCards}>
            {speakers.map((speaker) => (
          <Card key={speaker.id} data={speaker} />
        ))}
          </div>
      
      </section>
  );
}

function Card({ data }){
   return (
   <div className={styles.card}>

      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.name} className={data.speakerImage} />
      </div>

    
      <div className={styles.nameBox}>
        <span className={styles.nameText}>{data.name}</span>
      </div>

     
      <div className={styles.socials}>
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <Linkedin size={20} color="#0077b5" />
        </a>
        <a href={data.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <Twitter size={20} color="#fff" />
        </a>
      </div>
       </div>

  );
}
