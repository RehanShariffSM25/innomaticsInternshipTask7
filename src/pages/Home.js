import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero">
        <h1>Welcome to Innomatics Research Labs</h1>
        <p className="tagline">Innovating the future with AI and Data Science</p>
        <button onClick={() => navigate('/services')}>Explore Our Services</button>
      </div>

      <section className="features">
        <div className="feature">
          <span className="icon"></span>
          <h3>Global Leaders in Training</h3>
          <p>
            We have trainers hailing from fortune companies who understand
            real-time business cases and train individuals based on them.
          </p>
        </div>

        <div className="feature">
          <span className="icon"></span>
          <h3>Practical Oriented Approach</h3>
          <p>
            Our methodology isn’t confined to theory; we provide exposure to real-time industry training.
          </p>
        </div>

        <div className="feature">
          <span className="icon"></span>
          <h3>Hands-on Projects & Internship</h3>
          <p>
            Gain experience with hands-on projects from industry experts and internships.
          </p>
        </div>

        <div className="feature">
          <span className="icon"></span>
          <h3>100% Placement Assistance</h3>
          <p>
            We offer career transformation with top company collaborations and dedicated placement support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
