import React from 'react';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to High Rise Group of Schools</h1>
          <p>Empowering students for a brighter future.</p>
          <button>Explore More</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-us">
        <div className="about-content">
          <h2>About High Rise Group of Schools School</h2>
          <p>
          High Rise Group of Schools is a leading educational institution dedicated to
            providing quality education and fostering holistic development in
            students. With state-of-the-art facilities and a team of experienced
            educators, we prepare our students to excel in academics and beyond.
          </p>
          <button>Learn More</button>
        </div>
        <div className="about-image">
          <img src="src\assets\administration.avif" alt="About highrise School" />
        </div>
      </section>

      {/* Academics Highlight Section */}
      <section className="academics-highlight">
        <h2>Our Academics</h2>
        <div className="academics-grid">
          <div className="academic-card">
            <img src="src\assets\chem.webp" alt="Science" />
            <h3>Science & Technology</h3>
            <p>
              We offer cutting-edge programs in science and technology to prepare
              students for the future.
            </p>
            <button className='academics1'>Learn More</button>

          </div>
          <div className="academic-card">
            <img src="src\assets\arts.avif" alt="Arts" />
            <h3>Arts & Humanities</h3>
            <p>
              Our arts and humanities programs encourage creativity and critical
              thinking.
            </p>
            <button className='academics1'>Learn More</button>

          </div>
          <div className="academic-card">
            <img src="src\assets\karate.jpg" alt="Sports" />
            <h3>Sports & Athletics</h3>
            <p>
              We promote physical fitness and teamwork through our sports programs.
            </p>
            <button className='academics1'>Learn More</button>
          </div>
        </div>
      </section>

      {/* Admissions Callout Section */}
      <section className="admissions-callout">
        <div className="admissions-content">
          <h2>Admissions Open</h2>
          <p>
            Join the High Rise Group of Schools family today! Admissions for the upcoming academic
            year are now open. Apply now to secure your spot.
          </p>
          <button>Apply Now</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "Rusinga School has provided me with the tools and support to
              achieve my dreams. I am forever grateful!"
            </p>
            <h4>- Jane Doe, Alumni</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "The teachers here are amazing, and the facilities are top-notch. I
              love being a part of this community."
            </p>
            <h4>- John Smith, Student</h4>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Our Gallery</h2>
        <div className="gallery-grid">
          <img src="src\assets\classroom.avif" alt="Gallery 1" />
          <img src="src\assets\lab.avif" alt="Gallery 2" />
          <img src="src\assets\pp1.avif" alt="Gallery 3" />
          <img src="src\assets\studentonboard.jpg" alt="Gallery 4" />
        </div>
      </section>

      {/* Contact Callout Section */}
      <section className="contact-callout">
        <h2>Have Questions? Contact Us!</h2>
        <p>
          We're here to help. Reach out to us via phone, email, or visit our
          campus.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Home;