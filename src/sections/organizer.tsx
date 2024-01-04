import React from 'react';

const Organizer = ({ name, image }) => {
    return (
        <div style={{
            width: 'calc(33.333% - 10px)', // for 3 in a row, minus some margin
            margin: '5px',
            textAlign: 'center'
        }}>
            <img
                src={image}
                alt={name}
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '50%'
                }}
            />
            <h3>{name}</h3>
        </div>
    );
};

export default Organizer;
