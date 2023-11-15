import React from 'react';
import Speaker from './speaker';

const speakersData = [
  { name: "Łukasz Langa", affiliation: "CPython Developer in Residence, Python 3.8 and 3.9 release manager", image: "/speakers/lukasz.jpeg", index: 1 },
];

export const SpeakersSection = () => {
  return (
    <div>
      <h2>Keynote speakers</h2>
      {speakersData.map((speaker, index) => (
        <Speaker
          name={speaker.name}
          affiliation={speaker.affiliation}
          image={speaker.image}
        />
      ))}
    </div>
  );
};
