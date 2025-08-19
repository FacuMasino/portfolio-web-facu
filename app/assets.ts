export type TagsType = 'all' | 'web' | 'desktop';
export type ProjectsDataType = {
  id: number;
  image: string;
  tags: TagsType[];
  link: string;
  github: string | null;
  date: Date;
}[];

export const ProjectsData: ProjectsDataType = [
  {
    id: 1,
    image: '/images/projects/1.png',
    tags: ['all', 'web'],
    link: 'https://pedime.netlify.app/',
    github: 'https://github.com/FacuMasino/pedime-reactjs-masino',
    date: new Date('2022-05-01'),
  },
  {
    id: 2,
    image: '/images/projects/2.png',
    tags: ['all', 'web'],
    link: 'https://facumasino.github.io/CotizadorSeguro-JS-Masino/',
    github: 'https://github.com/FacuMasino/CotizadorSeguro-JS-Masino',
    date: new Date('2022-04-01'),
  },
  {
    id: 3,
    image: '/images/projects/3.png',
    tags: ['all', 'web'],
    link: 'https://bi-consulting-web-testing.vercel.app/',
    github: 'https://github.com/FacuMasino/bi-consulting-web',
    date: new Date('2022-11-01'),
  },
  {
    id: 4,
    image: '/images/projects/4.png',
    tags: ['all', 'desktop'],
    link: 'https://github.com/FacuMasino/tp-integrador-grupo-10-lab2',
    github: 'https://github.com/FacuMasino/tp-integrador-grupo-10-lab2',
    date: new Date('2023-10-01'),
  },
  {
    id: 5,
    image: '/images/projects/5.png',
    tags: ['all', 'desktop'],
    link: 'https://github.com/FacuMasino/imprimir-polizas-utility',
    github: 'https://github.com/FacuMasino/imprimir-polizas-utility',
    date: new Date('2024-08-01'),
  },
  {
    id: 6,
    image: '/images/projects/6.png',
    tags: ['all', 'web'],
    link: 'https://comparatasas.ar',
    github:
      'https://github.com/ferminrp/compara-tasas/commits?author=FacuMasino',
    date: new Date('2024-02-01'),
  },
  {
    id: 7,
    image: '/images/projects/7.png',
    tags: ['all', 'web'],
    link: 'https://github.com/FacuMasino/ecommerce-net',
    github: 'https://github.com/FacuMasino/ecommerce-net',
    date: new Date('2024-05-01'),
  },
  {
    id: 8,
    image: '/images/projects/8.png',
    tags: ['all', 'web'],
    link: 'https://filadelfialaguna.com.ar/',
    github: 'https://github.com/FacuMasino/filadelfia-laguna-web',
    date: new Date('2024-03-01'),
  },
  {
    id: 9,
    image: '/images/projects/9.png',
    tags: ['all', 'web'],
    link: 'https://youtu.be/D8P1URMdCHU',
    github: 'https://github.com/FacuMasino/bancar',
    date: new Date('2024-10-01'),
  },
  {
    id: 10,
    image: '/images/projects/10.png',
    tags: ['all', 'web'],
    link: 'https://coopersive.bi.com.ar/login/?c=EMPG-ZJU4-DGZJ',
    github: null,
    date: new Date('2025-01-01'),
  },
];

export const socialLinks = {
  github: 'https://github.com/facumasino',
  linkedin: 'https://www.linkedin.com/in/facundomasino/',
};
