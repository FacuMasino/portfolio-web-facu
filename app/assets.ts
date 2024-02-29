const img1 = '/images/projects/1.png';
const img2 = '/images/projects/2.png';
const img3 = '/images/projects/3.png';
const img4 = '/images/projects/4.png';
const img5 = '/images/projects/5.png';
const img6 = '/images/projects/6.png';

export type TagsType = 'all' | 'web' | 'desktop';
export type ProjectsDataType = {
  id: number;
  image: string;
  tags: TagsType[];
  link: string;
  github: string;
}[];

export const ProjectsData: ProjectsDataType = [
  {
    id: 1,
    image: img1,
    tags: ['all', 'web'],
    link: 'https://pedime.netlify.app/',
    github: 'https://github.com/FacuMasino/pedime-reactjs-masino',
  },
  {
    id: 2,
    image: img2,
    tags: ['all', 'web'],
    link: 'https://facumasino.github.io/CotizadorSeguro-JS-Masino/',
    github: 'https://github.com/FacuMasino/CotizadorSeguro-JS-Masino',
  },
  {
    id: 3,
    image: img3,
    tags: ['all', 'web'],
    link: 'https://bi-consulting-web-testing.vercel.app/',
    github: 'https://github.com/FacuMasino/bi-consulting-web',
  },
  {
    id: 4,
    image: img4,
    tags: ['all', 'desktop'],
    link: 'https://github.com/FacuMasino/tp-integrador-grupo-10-lab2',
    github: 'https://github.com/FacuMasino/tp-integrador-grupo-10-lab2',
  },
  {
    id: 5,
    image: img5,
    tags: ['all', 'desktop'],
    link: 'https://github.com/FacuMasino/imprimir-polizas-utility',
    github: 'https://github.com/FacuMasino/imprimir-polizas-utility',
  },
  {
    id: 6,
    image: img6,
    tags: ['all', 'web'],
    link: 'https://comparatasas.ar',
    github:
      'https://github.com/ferminrp/compara-tasas/commits?author=FacuMasino',
  },
];

export const socialLinks = {
  github: 'https://github.com/facumasino',
  linkedin: 'https://www.linkedin.com/in/facundomasino/',
};
