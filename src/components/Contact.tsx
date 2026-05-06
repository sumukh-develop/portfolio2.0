import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/sumukh-shenoy-271a2a339/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — sumukh-shenoy
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Engineering in Computer Science, 8.00 CGPA — 2022–2026
            </p>
            <p>
              Pre-University, 92% — 2020–2022
            </p>
            <p>
              High School, 94% — 2019–2020
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/sumukh-develop"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sumukh-shenoy-271a2a339/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sumukh Shenoy</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
