import React from 'react';

const ServiceDetail = ({ service }) => {
  return (
    <div className="service-detail">
      <h2>{service} Service</h2>
      <p>Details about our {service} services.</p>
    </div>
  );
};

export default ServiceDetail;
