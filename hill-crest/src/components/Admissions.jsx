import React from 'react';

const Admissions = () => {
  return (
    <div className="admissions">
      <h1>Admissions at Rusinga School</h1>
      <section className="admission-process">
        <h2>Admission Process</h2>
        <p>
          We welcome students from diverse backgrounds to join the Rusinga family.
          Our admission process is designed to be simple and transparent.
        </p>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Application</h3>
            <p>
              Submit an online application form along with the required documents,
              including academic records and a recommendation letter.
            </p>
          </div>
          <div className="step">
            <h3>Step 2: Entrance Exam</h3>
            <p>
              Applicants are required to take an entrance exam to assess their
              academic readiness.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Interview</h3>
            <p>
              Shortlisted candidates will be invited for an interview with the
              admissions committee.
            </p>
          </div>
          <div className="step">
            <h3>Step 4: Enrollment</h3>
            <p>
              Successful candidates will receive an offer letter and can proceed
              with enrollment.
            </p>
          </div>
        </div>
      </section>

      <section className="requirements">
        <h2>Admission Requirements</h2>
        <p>
          To be considered for admission, applicants must meet the following
          requirements:
        </p>
        <ul>
          <li>Completed application form</li>
          <li>Previous academic records</li>
          <li>Recommendation letter from a previous school</li>
          <li>Passing score on the entrance exam</li>
        </ul>
      </section>

      <section className="scholarships">
        <h2>Scholarships and Financial Aid</h2>
        <p>
          We offer scholarships and financial aid to deserving students based on
          merit and need. Please contact our admissions office for more
          information.
        </p>
      </section>
    </div>
  );
};

export default Admissions;