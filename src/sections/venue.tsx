import { Container, Heading, Paragraph } from "theme-ui";
import { Image } from "~/components/image";

export const Venue = () => (
    <Container id="venue" variant="smallContainer">
        <Heading>Venue</Heading>
        <Paragraph>
            The event will take place in the lobby of <a href="https://apify.com/">Apify's</a> Prague office in Lucerna Palace — a newly renovated space in the former atelier of Václav Havel, the founder of Lucerna Palace and grandfather of President Václav Havel.
        </Paragraph>
        <br></br>
        <Paragraph>
            You can get there by metro (Muzeum or Můstek station) or tram (Václavské náměstí station). Enter Lucerna Passage from Vodičkova Street. After a few meters, you'll see glass doors on your left opposite Lucerna Music Bar, beside Lucerna Pub. Ring the "Apify" bell and take the elevator (or walk up the stairs 🙂) to the 7th floor. See <a href="https://cdn-cms.apify.com/Directions_Apify_large_7c967c1a2a.png">map</a>.
        </Paragraph>
        <br></br>
        <Paragraph>
            If you encounter any issues, please call Karolína at +420 720 343 949 or Mia at +420 777 177 720.
        </Paragraph>
        <br></br>
        <Paragraph>Photos of previous events at the venue</Paragraph>
        <Image src={"/venue/talk.jpg"} alt="venue image" width="100%"
            height="auto" objectFit="contain" />
        <Image src={"/venue/networking.jpg"} alt="venue image" width="100%"
            height="auto"
            objectFit="contain" />
        <Image src={"/venue/pizza.jpg"} alt="venue image" width="50%"
            height="auto"
            objectFit="contain" />

    </Container >
);
