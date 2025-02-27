import React, { useState } from 'react';

const About = () => {
  const [showMoreHistory, setShowMoreHistory] = useState(false);
  const [showMoreValues, setShowMoreValues] = useState(false);

  return (
    <div className="about">
      {/* About Hero Section */}
      <section className="about-hero">
        <h1>About High Rise Group of Schools</h1>
        <p>
          Empowering students to achieve excellence in academics, character, and
          leadership since 1999.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At High Rise Group of Schools, our mission is to provide a holistic education that
          nurtures intellectual, emotional, and social growth. We aim to inspire
          students to become lifelong learners and responsible global citizens.
        </p>
      </section>

      {/* History Section */}
      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in 1999 by a group of visionary pioneers, High Rise Group of Schools began
          as a small institution with just 50 students. Over the decades, we have
          grown into one of the most respected schools in the region, known for
          our commitment to academic excellence and character development.
        </p>
        {showMoreHistory && (
          <div className="more-history">
            <p>
              In the early years, High Rise Group of Schools operated from a modest building
              with limited resources. However, through the dedication of our
              staff, parents, and community, we expanded our facilities and
              programs to meet the growing needs of our students.
            </p>
            <p>
              Today, High Rise Group of Schools boasts state-of-the-art facilities, including
              modern classrooms, science labs, sports fields, and a
              well-equipped library. Our alumni have gone on to excel in various
              fields, making significant contributions to society.
            </p>
          </div>
        )}
        <button onClick={() => setShowMoreHistory(!showMoreHistory)}>
          {showMoreHistory ? 'Show Less' : 'Show More'}
        </button>
      </section>

      {/* Values Section */}
      <section className="values">
        <h2>Our Core Values</h2>
        <p>
          At Rusinga School, we are guided by a set of core values that shape
          our culture and define who we are:
        </p>
        <ul>
          <li><strong>Integrity:</strong> We uphold the highest standards of honesty and ethical behavior.</li>
          <li><strong>Respect:</strong> We value diversity and treat everyone with dignity and kindness.</li>
          <li><strong>Excellence:</strong> We strive for excellence in everything we do.</li>
          <li><strong>Community:</strong> We foster a sense of belonging and collaboration.</li>
        </ul>
        {showMoreValues && (
          <div className="more-values">
            <p>
              These values are not just words; they are the foundation of our
              daily interactions and decision-making. We believe that by
              instilling these values in our students, we prepare them to lead
              meaningful and impactful lives.
            </p>
          </div>
        )}
        <button onClick={() => setShowMoreValues(!showMoreValues)}>
          {showMoreValues ? 'Show Less' : 'Show More'}
        </button>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>Academic Excellence</h3>
            <p>
              Our students consistently rank among the top performers in national
              and international examinations.
            </p>
          </div>
          <div className="achievement-card">
            <h3>Sports & Arts</h3>
            <p>
              We have won numerous awards in sports, music, and drama at regional
              and national levels.
            </p>
          </div>
          <div className="achievement-card">
            <h3>Community Impact</h3>
            <p>
              Our students and staff actively participate in community service
              projects, making a positive impact on society.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="src\assets\galswin.jpg" alt="Gallery 1" />
          <img src="src\assets\games.jpg" alt="Gallery 2" />
          <img src="src\assets\sportswin.jpg" alt="Gallery 3" />
          <img src="src\assets\win.jpg" alt="Gallery 4" />
        </div>
      </section>
    </div>
  );
};

export default About;