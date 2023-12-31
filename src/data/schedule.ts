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
      label: "Welcome",
      when: "2024/02/24 10:00 AM UTC+1"
    },
    {
      name: "Łukasz Langa",
      title: "Keynote: Galactic Gathering: Forging Indisciplinary Fellowship in Open Source",
      photo: "/speakers/lukasz.jpeg",
      link: "https://fosstodon.org/@discombobulateme",
      when: "2023/11/17 10:12 AM UTC+1"
      /* 20 minutes*/
    },
    {
      name: "Alessandro Romano",
      title: "Streamlit: Making Data Shine in Minute",
      photo: "/speakers/katerina.jpeg",
      link: "",
      when: "2023/11/17 10:42 AM UTC+1"
    },
    {
      name: "Ellen König",
      title: "A story of surviving and thriving as an underrepresented gender in tech",
      photo: "/speakers/katerina1.jpg",
      link: "",
      when: "2023/11/17 10:54 AM UTC+1"
    },
    {
      label: "Quick break (30 minutes)",
      when: "2023/11/17 11:06 AM UTC+1"
    },
    {
      name: "Lorenzo Peña",
      title: "Who cares about URLs",
      photo: "/speakers/Lorenzo.jpeg",
      link: "",
      when: "2023/11/17 11:36 AM UTC+1"
    },
    {
      name: "Serena Bonaretti",
      title: "Introducing the ORMIR community and the book \"Learn Python with Jupyter\"",
      photo: "/speakers/Serena.png",
      link: "",
      when: "2023/11/17 11:48 AM UTC+1"
    },
    {
      name: "Martin Borus",
      title: "Choose HTMX and avoid learning too much JavaScript.",
      photo: "/speakers/Martin.jpg",
      link: "",
      when: "2023/11/17 12:00 PM UTC+1"
    },
    {
      name: "Bilge Yücel",
      title: "Build NLP Apps with Python, Even If You're a Total Newbie!",
      photo: "/speakers/Blige.jpg",
      link: "",
      when: "2023/11/17 12:12 PM UTC+1"
    },
    {
      label: "Pizza Time! (2 hours)",
      when: "2023/11/17 12:24 PM UTC+1"
      // 2 hours
    },
    {
      name: "Torsten Sander",
      title: "Know what you're worth:  5 key facts from our  Developer Salary Report",
      photo: "/speakers/Torsten.jpg",
      link: "https://www.honeypot.io",
      when: "2023/11/17 2:24 PM UTC+1"
    },
    {
      name: "Alexander CS Hendorf",
      title: "Python in Excel - Hell YEAH or hell NO?",
      photo: "/speakers/Alexander.jpg",
      link: "",
      when: "2023/11/17 2:36 PM UTC+1"
    },
    {
      name: "Mary Newhauser",
      title: "From Chaos to Clarity: Best Practices for Multi-Label Data Annotation",
      photo: "/speakers/Mary.jpg",
      link: "",
      when: "2023/11/17 2:48 PM UTC+1"
    },
    {
      name: "Johannes Kolbe",
      title: "Snow White and the Dwarf Ensemble",
      photo: "/speakers/Johannes.png",
      link: "",
      when: "2023/11/17 3:00 PM UTC+1"
    },
    {
      name: "Louisa von Hülsen",
      title: "Speeding up test runs",
      photo: "/speakers/Louisa.png",
      link: "",
      when: "2023/11/17 3:12 PM UTC+1"
    },
    {
      label: "Quick break (30 minutes)",
      when: "2023/11/17 3:44 PM UTC+1"
    },
    {
      name: "Sarah Haq",
      title: "From Berlin to Hamburg : Why I moved from tech to academia",
      photo: "/speakers/Sarah.png",
      link: "https://www.linkedin.com/in/sarah-haq-4437bb71/",
      when: "2023/11/17 3:56 PM UTC+1"
    },
    {
      name: "Mariana Meireles",
      title: "How to create an universe from scratch: LLMs and ABMs",
      photo: "/speakers/Mariana.jpg",
      link: "",
      when: "2023/11/17 4:08 PM UTC+1"
    },
    {
      name: "Julio Batista Silva",
      title: "Sailing smoothly: navigating API migration from multi-repo to mono-repo",
      photo: "/speakers/Julio.jpg",
      link: "https://juliobs.com/",
      when: "2023/11/17 4:20 PM UTC+1"
    },
    {
      name: "Georgi Ker",
      title: "Cat-alysts of Python's Hidden Figures",
      photo: "/speakers/Georgi.jpg",
      link: "https://georgiker.com/",
      when: "2023/11/17 4:32 PM UTC+1"
    },
    {
      label: "Closing 👋 and Lightning Talks ⚡",
      when: "2023/11/17 4:44 PM UTC+1"
    },
  ];