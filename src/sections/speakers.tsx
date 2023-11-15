import React from 'react';
import Speaker from './speaker';
import { Container, Heading, Paragraph } from "theme-ui";

const speakersData = [
  { name: "Łukasz Langa", affiliation: "CPython Developer in Residence, Python 3.8 and 3.9 release manager", image: "/speakers/lukasz.jpeg", index: 1 },
];

export const SpeakersSection = () => {
  return (
    <Container id="venue" variant="smallContainer">
      <Heading>Keynote speakers</Heading>
      {speakersData.map((speaker, index) => (
        <Speaker
          name={speaker.name}
          affiliation={speaker.affiliation}
          image={speaker.image}
        />
      ))}
    </Container >

  );
};
