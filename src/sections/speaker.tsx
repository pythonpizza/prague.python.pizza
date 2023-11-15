import React from 'react';

const Speaker = ({ name, affiliation, image }) => {
  return (
    <div className="speaker">
      <img src={image} alt={name} width="50%" height="auto" objectFit="contain" />
      <h3>{name}</h3>
      <p>{affiliation}</p>
    </div>
  );
};

export default Speaker;
