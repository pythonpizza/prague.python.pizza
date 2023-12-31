import Head from "next/head";
import { Box } from "theme-ui";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { genericInformation } from "~/data/generic";
import { About } from "~/sections/about";
import { CFP } from "~/sections/cfp";
import { Announcements } from "~/sections/announcements";
import { SpeakersSection } from "~/sections/speakers";
import { Coc } from "~/sections/coc";
import { Schedule } from "~/sections/schedule";
import { Hero } from "~/sections/hero";
import { Sponsors } from "~/sections/sponsors";
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
    <Schedule />
    <Announcements />
    <SpeakersSection />
    <Venue />
    <CFP />
    <Sponsors />
    <Coc />
    <Footer />
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
  </Box>
);

export default Home;
