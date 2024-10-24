import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      name: 'Data Science',
      path: 'data-science',
      description: 'No.1 Best Data Science Course Training Institute in Hyderabad.',
      imgUrl: 'https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg'
    },
    {
      name: 'Full Stack Development',
      path: 'full-stack',
      description: 'Full Stack Web Development Training Program at Innomatics.',
      imgUrl: 'https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png'
    },
    {
      name: 'Digital Marketing',
      path: 'digital-marketing',
      description: 'Digital Marketing Course Training in Hyderabad.',
      imgUrl: 'https://www.innomatics.in/wp-content/uploads/2023/01/digital-marketing-course-training-hyderabad.jpg'
    }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.imgUrl} alt={service.name} className="service-image" />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <Link to={service.path}>Learn More</Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Services;
