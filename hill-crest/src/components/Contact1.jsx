import React, { useState } from 'react';

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            {isSubmitted && (
              <div className="success-message">
                <p>Your message has been sent successfully!</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817476315423!2d36.82160961475391!3d-1.282835599061456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7b2d5f3b5%3A0x1f0b0b0b0b0b0b0b!2sRusinga%20School!5e0!3m2!1sen!2ske!4v1629999999999!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact1;