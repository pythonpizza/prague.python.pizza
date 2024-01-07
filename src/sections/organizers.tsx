import React from 'react';
import Organizer from './organizer';
import { Container, Heading, Grid, Paragraph } from "theme-ui";

const orgData = [
    { name: "Mia Bajić", image: "/speakers/mia.jpg", index: 1 },
    { name: "Artur Czepiel", image: "/speakers/pizza-square.png", index: 2 },
    { name: "Sena Şahin", image: "/speakers/pizza-square.png", index: 3 },
    { name: "Piotr Gnus", image: "/speakers/piotr.jpg", index: 4 },
    { name: "Moisés Guimarães de Medeiros", image: "/speakers/pizza-square.png", index: 5 },
];

export const OrganizerSection = () => {
    return (
        <Container id="organizers" variant="smallContainer">
            <Heading>Organizers</Heading>
            <Paragraph>Python Pizza is brought to life by volunteers. Everyone from our organizing team to our amazing speakers are donating their time to make this event happen.</Paragraph>
            <br />
            <Paragraph>By the community for the community. </Paragraph> 
            <br />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <Grid columns={[2,2,2,3]} gap="primary">
                    {orgData.map((org) => (
                        <Organizer
                            key={org.index}
                            name={org.name}
                            image={org.image}
                        />
                    ))}
                </Grid>
            </div>
        </Container >

    );
};
