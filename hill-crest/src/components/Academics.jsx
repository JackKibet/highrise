import React from 'react';
const Academics = () => {
  return (
    <div className="academics">
      <h1>Academics at Rusinga School</h1>
      <section className="academic-programs">
        <h2>Our Academic Programs</h2>
        <p>
          At Rusinga School, we offer a comprehensive curriculum designed to
          challenge and inspire students. Our programs are tailored to meet the
          needs of learners at all levels, from primary to secondary education.
        </p>
        <div className="program-list">
          <div className="program">
            <h3>Primary School</h3>
            <p>
              Our primary school program focuses on foundational skills in
              literacy, numeracy, and science. We also emphasize creativity and
              critical thinking through arts and extracurricular activities.
            </p>
          </div>
          <div className="program">
            <h3>Secondary School</h3>
            <p>
              The secondary school curriculum prepares students for national
              examinations and beyond. We offer a wide range of subjects,
              including mathematics, sciences, humanities, and languages.
            </p>
          </div>
          <div className="program">
            <h3>Advanced Placement (AP)</h3>
            <p>
              For students seeking additional challenges, we offer Advanced
              Placement courses in various subjects, allowing them to earn
              college credits while still in high school.
            </p>
          </div>
        </div>
      </section>

      <section className="facilities">
        <h2>State-of-the-Art Facilities</h2>
        <p>
          Our campus is equipped with modern facilities to support learning and
          development. These include:
        </p>
        <ul>
          <li>Fully equipped science laboratories</li>
          <li>A well-stocked library with digital resources</li>
          <li>Computer labs with high-speed internet</li>
          <li>Sports fields and gymnasiums</li>
          <li>Art and music studios</li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Academic Achievements</h2>
        <p>
          Our students consistently perform well in national and international
          examinations. Many of our alumni have gone on to attend prestigious
          universities worldwide.
        </p>
      </section>
    </div>
  );
};

export default Academics;