import React from 'react';
import { motion } from 'framer-motion';
import styles from '../AbTeam.module.css';
import erikImg from '../../../../assets/images/team/erik.png';
import claraImg from '../../../../assets/images/team/clara.png';
import mikaelImg from '../../../../assets/images/team/mikael.png';

const team = [
  { id: '01', name: 'Erik Sundberg', role: 'Founder & CEO', img: erikImg },
  { id: '02', name: 'Clara Lindberg', role: 'Lead Architectural Engineer', img: claraImg },
  { id: '03', name: 'Mikael Nilsson', role: 'Technical Director', img: mikaelImg }
];

export const AbTeam = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {team.map((member, i) => (
            <motion.div 
              key={member.id}
              className={styles.member}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <span className={styles.index}>{member.id}</span>
                <img src={member.img} alt={member.name} />
              </div>
              <div className={styles.info}>
                <span className={styles.role}>{member.role}</span>
                <h3 className={styles.name}>{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
