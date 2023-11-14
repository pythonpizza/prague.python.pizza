import Head from "next/head";
import { Box } from "theme-ui";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { genericInformation } from "~/data/generic";
import { About } from "~/sections/about";
<<<<<<< Updated upstream
=======
import { CFP } from "~/sections/cfp";
import { SpeakerSection } from "~sections/speakers";
>>>>>>> Stashed changes
import { Coc } from "~/sections/coc";
import { Hero } from "~/sections/hero";
import { Venue } from "~/sections/venue";

const Home = () => (
  <Box>
    <Head>
      <title>{genericInformation.pageTitle}</title>
      <meta property="og:title" content={genericInformation.pageTitle} />
      <meta
        property="og:description"
        content={genericInformation.socialDescription}
      />
      <meta name="twitter:site" content="@pythonpizzaconf" />
      <meta property="og:image" content="/social-image.jpg" />
      <meta name="twitter:image:alt" content="Conference logo" />
      <meta
        name="twitter:title"
        content="Prague Python Pizza Conference!!"
      />
      <meta
        name="twitter:image"
        content="https://python.python.pizza/social-image.jpg"
      />
      <meta
        name="twitter:description"
        content="Join the fun 🥳🎉 on 24th February 2024"
      />
    </Head>
    <Header />
    <Hero />
    <About />
<<<<<<< Updated upstream
=======
    <CFP />
    <Speaker />
>>>>>>> Stashed changes
    <Venue />
    <Coc />
    <Footer />
  </Box>
);

export default Home;
