const img1 = '/images/projects/1.png';
const img2 = '/images/projects/2.png';
const img3 = '/images/projects/3.png';
const img4 = '/images/projects/4.png';

type TagsType = 'All' | 'Web' | 'Desktop';

export const ProjectsData: {
  image: string;
  tags: TagsType[];
  link: string;
  github: string;
}[] = [
  {
    image: img1,
    tags: ['All', 'Web'],
    link: 'https://pedime.netlify.app/',
    github: 'https://github.com/FacuMasino/pedime-reactjs-masino',
  },
  {
    image: img2,
    tags: ['All', 'Web'],
    link: 'https://facumasino.github.io/CotizadorSeguro-JS-Masino/',
    github: 'https://github.com/FacuMasino/CotizadorSeguro-JS-Masino',
  },
  {
    image: img3,
    tags: ['All', 'Web'],
    link: 'https://bi-consulting-web-testing.vercel.app/',
    github: 'https://github.com/FacuMasino/bi-consulting-web',
  },
  {
    image: img4,
    tags: ['All', 'Desktop'],
    link: 'https://github.com/FacuMasino/tp-integrador-grupo-10-lab2',
    github: 'https://github.com/FacuMasino/tp-integrador-grupo-10-lab2',
  },
];
