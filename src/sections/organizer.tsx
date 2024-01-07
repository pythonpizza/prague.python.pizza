import React from 'react';

const Organizer = ({ name, image }) => {
    return (
        <div>
            <img
                src={image}
                alt={name}
                style={{
                    width: '90%',
                    height: 'auto',
                    borderRadius: '50%',
                    objectFit: "cover",
                }}
            />
            <h3>{name}</h3>
        </div>
    );
};

export default Organizer;
