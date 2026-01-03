export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  url: string;
}

const data: Project[] = [
  {
    title: 'Personal Site',
    subtitle: '2024 Last Update',
    image: '/images/projects/personal-site.png',
    date: '2024-07-30',
    desc: 'A visually appealing and responsive React application built with modern JavaScript. ',
    url: 'https://qaakalaw.github.io',
  },
];

export default data;
