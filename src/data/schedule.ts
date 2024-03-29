export type Event = {
  label?: string;
  name?: string;
  title?: string;
  photo?: string;
  link?: string;
  when?: string;
};

export const SCHEDULE: Event[] = [
  {
    label: "Open Doors",
    when: "2024/02/24 9:30 AM UTC+1"
  },
  {
    label: "Welcome 🙌",
    when: "2024/02/24 10:00 AM UTC+1"
  },
  {
    name: "Łukasz Langa",
    title: "Keynote: The big leap of Python 3.13",
    photo: "/speakers/lukasz.jpeg",
    link: "https://lukasz.langa.pl/",
    when: "2024/02/24 10:12 AM UTC+1"
  },
  {
    name: "Jürgen Gmach",
    title: "Your perfect Python development experience on Ubuntu",
    photo: "/speakers/jurgen.jpg",
    link: "https://jugmac00.github.io/",
    when: "2024/02/24 10:48 AM UTC+1"
  },
  {
    name: "Kayla Eilhart",
    title: "Why Cyberfolks Love Python?",
    photo: "/speakers/kayla.png",
    link: "https://www.linkedin.com/in/zuzanapechova/",
    when: "2024/02/24 11:00 AM UTC+1"
  },
  {
    name: "Jan Pipek",
    title: "Is Margherita Better than Quattro Stagioni? a.k.a. Polars vs Pandas API",
    photo: "/speakers/janp.jpg",
    link: "https://github.com/janpipek",
    when: "2024/02/24 11:12 AM UTC+1"
  },
  {
    label: "Quick break (24 minutes) ☕",
    when: "2024/02/24 11:24 AM UTC+1"
  },
  {
    name: "Karolina Surma",
    title: "Licensing your Python project",
    photo: "/speakers/karolina.jpeg",
    link: "https://www.linkedin.com/in/karolina-surma-950452b7/",
    when: "2024/02/24 11:48 AM UTC+1"
  },
  {
    name: "Miro Hrončok",
    title: "Python Packaging: pyproject.toml build backends under the hood",
    photo: "/speakers/miro.jpg",
    link: "https://hroncok.cz",
    when: "2024/02/24 12:00 PM UTC+1"
  },
  {
    name: "Cristián Maureira-Fredes",
    title: "Python's Secret Friends",
    photo: "/speakers/cristian.JPG",
    link: "https://maureira.xyz/",
    when: "2024/02/24 12:12 PM UTC+1"
  },
  {
    name: "Bára Drbohlavová",
    title: "Do's and Don't's of event organizing",
    photo: "/speakers/bara.jpg",
    link: "https://www.linkedin.com/in/baradrb/",
    when: "2024/02/24 12:24 PM UTC+1"
  },
  {
    label: "🍕🍕🍕 Pizza Time! (1 hour) 🍕🍕🍕",
    when: "2024/02/24 12:36 PM UTC+1"
  },
  {
    name: "Kateřina Lesch",
    title: "Keynote: How Languages Become Extinct",
    photo: "/speakers/katerina1.jpg",
    link: "https://www.linkedin.com/in/kveselovska",
    when: "2024/02/24 1:36 PM UTC+1"
  },
  {
    name: "Martin Kolar",
    title: "Freelancing: How to start work as a freelancer?",
    photo: "/speakers/martin.jpg",
    link: "https://martinkolar.eu/en/",
    when: "2024/02/24 2:12 PM UTC+1"
  },
  {
    name: "Tetiana Kukhelna",
    title: "Automating Tasks with Python and Ansible",
    photo: "/speakers/tetiana.jpg",
    link: "https://www.linkedin.com/in/tetiana-kukhelna/",
    when: "2024/02/24 2:24 PM UTC+1"
  },
  {
    name: "Tim Hobbs",
    title: "Deploying your Jupyter notebooks directly into production",
    photo: "/speakers/tim.jpg",
    link: "https://hobbs.cz",
    when: "2024/02/24 2:36 PM UTC+1"
  },
  {
    name: "Pavel Král",
    title: "Large Language Models Across Languages",
    photo: "/speakers/pavel.jpeg",
    link: "https://pavelkral.eu",
    when: "2024/02/24 2:48 PM UTC+1"
  },
  {
    name: "Honza Kral",
    title: ".",
    photo: "/speakers/honzak.jpg",
    link: "https://www.linkedin.com/in/honzakral/",
    when: "2024/02/24 3:00 PM UTC+1"
  },
  {
    name: "Matěj Volf",
    title: "Web scraping tricks with mitmproxy and its scripting API",
    photo: "/speakers/matej.jpeg",
    link: "https://mvolfik.github.io/",
    when: "2024/02/24 3:12 PM UTC+1"
  },
  {
    label: "Quick break (48 minutes) ☕",
    when: "2024/02/24 3:24 PM UTC+1"
  },
  {
    name: "Karol Lasocki",
    title: "PyCharm Tips and Tricks",
    photo: "/speakers/karol.jpeg",
    link: "",
    when: "2024/02/24 4:12 PM UTC+1"
  },
  {
    name: "Roman Pavelka",
    title: "CLI to OpenAI GPT models",
    photo: "/speakers/roman.jpg",
    link: "https://www.romanpavelka.cz",
    when: "2024/02/24 4:24 PM UTC+1"
  },
  {
    name: "Bilge Yücel",
    title: "What is multimodality, and can it generate captions for my Instagram photos?",
    photo: "/speakers/bilge.jpg",
    link: "https://bilgeyucel.github.io/",
    when: "2024/02/24 4:36 PM UTC+1"
  },
  {
    name: "Matěj Račinský",
    title: "Julia - a Python rival?",
    photo: "/speakers/matejr.png",
    link: "https://www.linkedin.com/in/matej-racinsky/",
    when: "2024/02/24 4:48 PM UTC+1"
  },
  {
    name: "Klára Mikšíčková",
    title: "How to overcome overwhelm and reduce work stress",
    photo: "/speakers/klara.jpeg",
    link: "https://www.kouc-miksickova.cz",
    when: "2024/02/24 5:00 PM UTC+1"
  },
  {
    name: "Adam & Michał",
    title: "The first Python game for beginners",
    photo: "/speakers/michal.jpeg",
    link: "",
    when: "2024/02/24 5:12 PM UTC+1"
  },
  {
    label: "Lightning Talks & Closing Session 👋",
    when: "2024/02/24 5:24 PM UTC+1"
  },
  {
    label: "Happy Hour & Networking 🍻",
    when: "2024/02/24 6:00 PM UTC+1"
  },
];
