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
    image: '/images/projects/1.png',
    tags: ['all', 'web'],
    link: 'https://pedime.netlify.app/',
    github: 'https://github.com/FacuMasino/pedime-reactjs-masino',
  },
  {
    id: 2,
    image: '/images/projects/2.png',
    tags: ['all', 'web'],
    link: 'https://facumasino.github.io/CotizadorSeguro-JS-Masino/',
    github: 'https://github.com/FacuMasino/CotizadorSeguro-JS-Masino',
  },
  {
    id: 3,
    image: '/images/projects/3.png',
    tags: ['all', 'web'],
    link: 'https://bi-consulting-web-testing.vercel.app/',
    github: 'https://github.com/FacuMasino/bi-consulting-web',
  },
  {
    id: 4,
    image: '/images/projects/4.png',
    tags: ['all', 'desktop'],
    link: 'https://github.com/FacuMasino/tp-integrador-grupo-10-lab2',
    github: 'https://github.com/FacuMasino/tp-integrador-grupo-10-lab2',
  },
  {
    id: 5,
    image: '/images/projects/5.png',
    tags: ['all', 'desktop'],
    link: 'https://github.com/FacuMasino/imprimir-polizas-utility',
    github: 'https://github.com/FacuMasino/imprimir-polizas-utility',
  },
  {
    id: 6,
    image: '/images/projects/6.png',
    tags: ['all', 'web'],
    link: 'https://comparatasas.ar',
    github:
      'https://github.com/ferminrp/compara-tasas/commits?author=FacuMasino',
  },
  {
    id: 7,
    image: '/images/projects/7.png',
    tags: ['all', 'web'],
    link: 'https://github.com/FacuMasino/ecommerce-net',
    github: 'https://github.com/FacuMasino/ecommerce-net',
  },
  {
    id: 8,
    image: '/images/projects/8.png',
    tags: ['all', 'web'],
    link: 'https://filadelfialaguna.com.ar/',
    github: 'https://github.com/FacuMasino/filadelfia-laguna-web',
  },
];

export const socialLinks = {
  github: 'https://github.com/facumasino',
  linkedin: 'https://www.linkedin.com/in/facundomasino/',
};
