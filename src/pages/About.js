import React from 'react';
import aboutImg from '../assets/images/about.jpg';
import '../styles/pages/About.scss';

const About = () => {
  return (
    <section className="About">
      <div className="container">
        <div className="image-block">
          <img src={aboutImg} />
        </div>
        <div className="content-block">
          <p>Ever been shopping and almost bought an item but couldn’t because of one minor detail that would’ve made it better? You love that polo but it didn’t need those buttons. You love those jeans but wish the cuff was permanent. You love that hoodie but wish it was heavier- because if it was, that’d be the Best Case Scenario!</p>
          <p>BCS is dedicated to designing the ideal piece - from the graphic + fabric down to the actual fit and functionality. Indeed, the BEST CASE SCENARIO!</p>
          <p>Designed for girls, inspired by boys.</p>
          <p>Founded with finesse in New York City, Best Case Scenario stands on an uncompromising enthusiasm for authenticity and free-thinking. The popularity contest ends with BCS. If you validate yourself and don’t need anyone else to notice - you’ll love it here!</p>
        </div>
      </div>
    </section>
  )
}

export default About;