/** @jsxRuntime classic */
/** @jsx jsx */
import { Container, Grid, Heading, jsx, Paragraph } from "theme-ui";

import { Image } from "~/components/image";
import { Sponsor, SPONSORS } from "~/data/sponsors";

type SponsorProps = {
  sponsor: Sponsor;
};

export const SponsorItem: React.FC<SponsorProps> = ({ sponsor }) => (
  <a
    href={sponsor.link}
    rel="noopener noreferrer"
    target="_blank"
    sx={{ position: "relative" }}
  >
    <Image
      width="14rem"
      height="auto"
      objectFit="contain"
      src={sponsor.image}
      alt={sponsor.name}
    />
  </a>
);

export const Sponsors = () => (
  <Container id="sponsors">
    <Heading mb="primary">Sponsors</Heading>
    <Paragraph>If you would like to sponsor us, please reach out to the Team via{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto: praguepythonpizza@gmail.com?subject=[Sponsorship]"
      >
        email.
      </a>
    </Paragraph>
    {/* <Grid columns={[1, 2, 2, 3]} gap="primary">
      {SPONSORS.map((sponsor, index) => (
        <SponsorItem key={index} sponsor={sponsor} />
      ))}
    </Grid> */}
  </Container>
);
