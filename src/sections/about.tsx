import { Container, Heading, Paragraph } from "theme-ui";

export const About = () => (
  <Container id="about" variant="smallContainer">
    <Heading>Python Pizza is Coming to Prague!</Heading>
    <Paragraph>
      <b>Python Pizza</b>, an annual micro conference originating from Naples in 2017, has made its mark in various cities in Germany, Italy, Cuba, as well as in remote formats. Now, it's landing in Prague.
    </Paragraph>
    <br />
    <Paragraph> Organized entirely by volunteers, we bring the Python Community together for some amazing original Pizza™ and Python Talks.
      <br />
    </Paragraph>
    <br />
    <Paragraph>
      We believe in and encourage practical sessions, in which developers share their experiences and lessons learned from real-world projects. Each talk is 10 minutes long.
    </Paragraph>
    <br />
    {/* <Paragraph> */}
    {/* The conference will also be streamed on our <a href="https://www.youtube.com/@PythonPizza" target="_blank" rel="noopener noreferrer">youtube channel</a> */}
    {/* <br /> */}
    {/* </Paragraph> */}
    <br />
    <Paragraph>
      Check out the past editions:{" "}
      <a href="https://python.pizza" target="_blank" rel="noopener noreferrer">
        Naples Python Pizza
      </a>
      , {" "}
      < a
        href="https://berlin.python.pizza"
        target="_blank"
        rel="noopener noreferrer"
      >
        Berlin Python Pizza
      </a>
      ,{" "}
      <a
        href="https://2021.hamburg.python.pizza"
        target="_blank"
        rel="noopener noreferrer"
      >
        2021 Hamburg Python Pizza
      </a>
      ,{" "}
      <a
        href="https://2020.hamburg.python.pizza"
        target="_blank"
        rel="noopener noreferrer"
      >
        2020 Hamburg Python Pizza
      </a>{" "}
      and{" "}
      <a
        href="https://2019.hamburg.python.pizza"
        target="_blank"
        rel="noopener noreferrer"
      >
        2019 Hamburg Python Pizza
      </a>
      .{" "}
    </Paragraph>
  </Container >
);
