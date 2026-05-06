import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Intern</h4>
                <h5>Gisul Software Services</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a Tech Intern at Gisul Software Services, gaining 
              hands-on experience in software development, working on real-world projects, 
              and contributing to production-ready applications using modern technologies 
              and development practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineering in Computer Science</h4>
                <h5>8.00 CGPA</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Pursuing Bachelor's degree in Computer Science Engineering with a strong 
              academic record of 8.00 CGPA. Focused on software development, data structures, 
              algorithms, web technologies, cloud computing, and modern development practices. 
              Building practical skills through projects and internships.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pre-University</h4>
                <h5>92%</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Completed Pre-University education with 92%, focusing on Physics, Chemistry, 
              and Mathematics. Developed strong analytical and problem-solving skills that 
              laid the foundation for engineering studies. Actively participated in coding 
              competitions and technical workshops.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School</h4>
                <h5>94%</h5>
              </div>
              <h3>2019–20</h3>
            </div>
            <p>
              Completed High School with an outstanding 94%, demonstrating academic excellence 
              across all subjects. Built a strong foundation in mathematics and sciences, 
              while developing an early interest in technology and programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
