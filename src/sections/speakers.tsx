import React from 'react';
import Speaker from './speaker';
import { Container, Heading } from "theme-ui";

const speakersData = [
  { name: "Łukasz Langa", affiliation: "CPython Developer in Residence, Python 3.8 and 3.9 release manager", image: "/speakers/lukasz.jpeg", index: 1 },
  { name: "Kateřina Lesch", affiliation: "Senior Manager in Data Analytics and Artificial Intelligence at Deloitte", image: "/speakers/katerina1.jpg", index: 2 },
];

export const SpeakersSection = () => {
  return (
    <Container id="keynote" variant="smallContainer">
      <Heading>Keynote speakers</Heading>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {speakersData.map((speaker) => (
          <Speaker
            key={speaker.index}
            name={speaker.name}
            affiliation={speaker.affiliation}
            image={speaker.image}
          />
        ))}
      </div>
    </Container >

  );
};
