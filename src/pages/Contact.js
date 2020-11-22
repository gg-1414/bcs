import React from 'react';
import ContactImg from '../assets/images/about.jpg';
import '../styles/pages/Contact.scss';

function onSubmit(event) {
  event.preventDefault()
  console.log('onsubmit')
}

const Contact = () => {
  return (
    <section className="Contact">
      <div className="container">
        <div className="image-block">
          <img src={ContactImg} alt="Contact page" />
        </div>
        <p className="email">info@bestcasescenario.nyc</p>
        <form onSubmit={onSubmit}>
          <input 
            type="text"
            name="name"
            placeholder="name"
          />
          <input 
            type="text"
            name="email"
            placeholder="email"
          />
          <input 
            type="text"
            name="subject"
            placeholder="subject"
          />
          <textarea 
            type="text"
            name="message"
            placeholder="message"
          />
          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;