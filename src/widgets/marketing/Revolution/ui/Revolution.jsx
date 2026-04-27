import React from 'react';
import { motion } from 'framer-motion';
import rev1 from '../../../../assets/rev1_refined.png';
import rev2 from '../../../../assets/rev2_refined.png';
import rev3 from '../../../../assets/rev3_gen.png';
import rev4 from '../../../../assets/rev4_refined.png';
import rev5 from '../../../../assets/rev5_gen.png';
import { Button } from '../../../../shared/ui/Button';
import styles from '../Revolution.module.css';

const Revolution = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.revolution} id="revolution">
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">a new era of energy</span>
          <h2 className="section-title">Inside the Solar Revolution</h2>
          <p className="section-subtitle">
            The numbers speak for themselves. Solar energy isn't a future possibility — it's the current reality.
          </p>
        </motion.div>

        <div className={styles.narrative}>
          {/* Chapter 1: The Scale */}
          <motion.div
            className={`${styles.block} ${styles.blockScale}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className={styles.content}>
              <span className={styles.stat}>30s</span>
              <h3 className={styles.title}>A new solar roof appears in Europe every 30 seconds</h3>
              <p className={styles.text}>
                While you've been reading this page, several more families have declared their energy independence.
                The scale of adoption is unprecedented, transforming neighborhoods into self-sustaining power plants.
              </p>
            </div>
            <div className={styles.image}>
              <img src={rev1} alt="Solar transformation in Europe" />
            </div>
          </motion.div>

          {/* Chapter 2: The Macro Shift */}
          <motion.div
            className={`${styles.block} ${styles.blockShift}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className={styles.image}>
              <img src={rev2} alt="Solar surpassing coal" />
            </div>
            <div className={styles.content}>
              <span className={styles.stat}>2024</span>
              <h3 className={styles.title}>Solar generation surpassed coal in the US for the first time</h3>
              <p className={styles.text}>
                A technology that dominated the global energy landscape for over a century is yielding to something cleaner.
                We are witnessing a tectonic shift: the end of the fossil fuel era and the rise of the sun as the world's primary engine.
              </p>
            </div>
          </motion.div>

          {/* Chapter 3: The Micro Impact */}
          <motion.div
            className={`${styles.block} ${styles.blockImpact}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className={styles.panorama}>
              <img src={rev3} alt="The impact of a single panel" />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.stat}>13 t</span>
                  <h3 className={styles.title}>One panel saves 13 tons of coal over its life</h3>
                  <p className={styles.text}>
                    Your roof isn't just space; it's a massive untapped resource. A single 500W panel prevents
                    an entire truckload of coal from being mined and burned.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chapter 4: Global Dominance */}
          <motion.div
            className={`${styles.block} ${styles.blockDominance}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className={styles.content}>
              <span className={styles.stat}>50%</span>
              <h3 className={styles.title}>Half of all new power capacity worldwide is now solar</h3>
              <p className={styles.text}>
                In just a decade, solar's global share grew from 0.5% to 6%. Current trajectories show
                that solar will dominate the grid by 2030. This is the only logical path forward for a resilient power system.
              </p>
            </div>
            <div className={styles.image}>
              <img src={rev4} alt="Global solar growth" />
            </div>
          </motion.div>

          {/* Chapter 5: The Financial Logical (CTA) */}
          <motion.div
            className={`${styles.block} ${styles.blockValue}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className={styles.image}>
              <img src={rev5} alt="Property value increase" />
            </div>
            <div className={styles.cta}>
              <h3 className={styles.title}>Your Roof Is Your Most Valuable Asset</h3>
              <p className={styles.text}>
                Homes with solar panels sell for 4.1–6.8% more on average. It's a dual benefit:
                you eliminate monthly liabilities while adding tens of thousands to your net worth.
              </p>
              <div className={styles.accent}>
                Solar pays you twice: first on your utility bills, and finally on your property valuation.
              </div>
              <Button href="#contact" variant="primary">Request a Consultation</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Revolution;
