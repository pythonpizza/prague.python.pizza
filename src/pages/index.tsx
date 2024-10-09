import Head from "next/head";
import { Box } from "theme-ui";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { genericInformation } from "~/data/generic";
import { About } from "~/sections/about";

import { SpeakersSection } from "~/sections/speakers";
import { Coc } from "~/sections/coc";
import { Schedule } from "~/sections/schedule";
import { Hero } from "~/sections/hero";
import { Sponsors } from "~/sections/sponsors";
import { OrganizerSection } from "~/sections/organizers";
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
        content="https://prague.python.pizza/social-image.jpg"
      />
      <meta
        name="twitter:description"
        content="Join the fun 🥳🎉 on 24th February 2024"
      />
      <meta
        name="photo-attribution"
        content="Photo by Denis Poltoradnev on Unsplash (https://unsplash.com/photos/brown-and-white-concrete-building-during-daytime-Jq1zrutUFP4)"
      />
    </Head>
    <Header />
    <Hero />
    <About />
    <SpeakersSection />
    <Schedule />
    <OrganizerSection />
    <Sponsors />
    <Venue />
    <Coc />
    <Footer />
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
  </Box>
);

export default Home;
