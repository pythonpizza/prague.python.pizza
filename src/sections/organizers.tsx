import React from 'react';
import Organizer from './organizer';
import { Container, Heading } from "theme-ui";

const orgData = [
    { name: "Mia Bajić", image: "/speakers/mia.jpg", index: 1 },
    { name: "Artur Czepiel", image: "/speakers/redpythonpizza.png", index: 2 },
    { name: "Sena Şahin", image: "/speakers/redpythonpizza.png", index: 3 },
    { name: "Piotr Gnus", image: "/speakers/piotr.jpg", index: 4 },
    { name: "Moisés Guimarães de Medeiros", image: "/speakers/redpythonpizza.png", index: 5 },
];

export const OrganizerSection = () => {
    return (
        <Container id="venue" variant="smallContainer">
            <Heading>Organizers</Heading>
            <p>Python Pizza is an event organized by the community for the community. Everyone involved is a volunteer giving their time for free. </p>
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
