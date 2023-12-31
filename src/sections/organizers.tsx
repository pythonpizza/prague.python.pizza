import React from 'react';
import Organizer from './organizer';
import { Container, Heading } from "theme-ui";

const orgData = [
    { name: "Kateřina Lesch", affiliation: "Senior Manager in Data Analytics and Artificial Intelligence at Deloitte", image: "/speakers/katerina1.jpg", index: 1 },
    { name: "Kateřina Lesch", affiliation: "Senior Manager in Data Analytics and Artificial Intelligence at Deloitte", image: "/speakers/katerina1.jpg", index: 2 },
    { name: "Kateřina Lesch", affiliation: "Senior Manager in Data Analytics and Artificial Intelligence at Deloitte", image: "/speakers/katerina1.jpg", index: 3 },
    { name: "Kateřina Lesch", affiliation: "Senior Manager in Data Analytics and Artificial Intelligence at Deloitte", image: "/speakers/katerina1.jpg", index: 4 },
    { name: "Kateřina Lesch", affiliation: "Senior Manager in Data Analytics and Artificial Intelligence at Deloitte", image: "/speakers/katerina1.jpg", index: 5 },
];

export const OrganizerSection = () => {
    return (
        <Container id="venue" variant="smallContainer">
            <Heading>Organizers</Heading>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {orgData.map((org) => (
                    <Organizer
                        key={org.index}
                        name={org.name}
                        image={org.image}
                    />
                ))}
            </div>
        </Container >

    );
};
