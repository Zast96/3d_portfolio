import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  immagine,
  tesla,
  diggit,
  shopify,
  carrent,
  jobit,
  tripguide,
  dashd,
  restaurant,
  gym,
  threejs,
} from '../assets';
//prettier-ignore
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Angular Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Company Owner',
    company_name: 'My own Carpentry Shop',
    icon: immagine,
    iconBg: '#383E56',
    date: 'Oct 2015 - Jan 2022',
    points: [
      'Carpentry experience honed my customer communication skills—understanding their needs, setting realistic expectations, and maintaining transparent dialogues.',
      "I've learned the art of setting and managing expectations, avoiding overpromising, and ensuring delivery aligns with commitments, a crucial skill that applies in software development as well.",
      'Regularly updating clients or team members on project progress enhances transparency and trust, a practice carried over from carpentry to my development work.',
      'Obtaining milestone approvals from clients ensures project alignment and prevents misunderstandings—this practice is beneficial in both carpentry and development.',
    ],
  },
  {
    title: 'Front End Developer',
    company_name: 'Genesi Development',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 -  Sep 2022',
    points: [
      'Mastered responsive design for seamless user experiences on diverse devices.',
      'Improved website layouts for better usability and visual appeal.',
      'Contributed to faster-loading websites and enhanced user experiences through performance optimizations.',
      'Worked effectively with design teams, refining skills in user-friendly interface development.',
    ],
  },
  {
    title: 'Salesforce Dev 1 Course',
    company_name: 'Visioture',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jun 2022 - Sep 2023',
    points: [
      'Acquired expertise in the Salesforce platform, including data modeling, automation with workflows, and Process Builder.',
      'Developed dynamic user interfaces using Visualforce and Lightning components, enhancing user experience.',
      'Hone Apex programming skills, empowering the ability to create custom solutions and extensions.',
      'Gained insights into data security and compliance best practices, ensuring adherence to industry standards.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Kamy Kommunikasjon',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Dec 2023 - Mar 2023',
    points: [
      'Strengthened collaboration skills through teamwork on international projects, fostering a global perspective.',
      'Achieved proficiency as a developer by adhering to high coding standards and effectively resolving critical issues to improve user experiences.',
      'Contributed to enhancing website user interfaces and structures, becoming a more well-rounded developer.',
      'These experiences significantly elevated my skills, equipping me to excel in the tech industry.',
    ],
  },
  {
    title: 'Front End Program',
    company_name: 'Diggit',
    icon: diggit,
    iconBg: '#E6DEDD',
    date: 'Apr 2023 - Present',
    points: [
      "Spearheaded participation in DIGGIT's transformative challenge, undergoing a comprehensive evaluation that not only assessed technical competencies but also provided invaluable insights into soft skills.",
      'Applied personalized feedback strategically to refine professional abilities, resulting in a significant and well-documented growth trajectory both as a developer and an individual.',
      "Developed and honed effective communication and collaboration skills under DIGGIT's mentorship, demonstrating a nuanced approach to teamwork and interpersonal dynamics.",
      'Executed recommendations that led to a substantial transformation of the professional portfolio, showcasing heightened proficiency, successful project development, and alignment with key milestones in my career development.',
    ],
  },
];

/*const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Davide proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Davide does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Davide optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];*/

const projects = [
  {
    name: 'Coffee App',
    description:
      'Angular web application that allows users to search and filter a list of coffee products. The app provides a user-friendly interface for searching coffees based on their names.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'components',
        color: 'green-text-gradient',
      },
      {
        name: 'api',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/Zast96/CoffeeApp',
  },
  {
    name: 'XPLR Site',
    description:
      'A warm welcome to XPLR, a traveling website concept. Check out the most amazing places on earth and be astonished by the HD video of the Lofoten Islands (Thanks Git LFS)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'gallery',
        color: 'green-text-gradient',
      },
      {
        name: 'Git',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/Zast96/traveling_site',
  },
  {
    name: 'NFT Site',
    description:
      'A small concept for an NFT marketplace. The perfect example of semplicity and clearliness. This layout is perfect if you wanna buy NFTs.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'list',
        color: 'green-text-gradient',
      },
      {
        name: 'mobile-app',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/Zast96/nft_site',
  },
  {
    name: 'Syncfusion Dashboard',
    description:
      'A cool dashboard that will cover all your needs if you manage an e-shop. Amazing charts are included, as well as other cool utilities.',
    tags: [
      {
        name: 'clean',
        color: 'blue-text-gradient',
      },
      {
        name: 'dashboard',
        color: 'green-text-gradient',
      },
      {
        name: 'utilities',
        color: 'pink-text-gradient',
      },
    ],
    image: dashd,
    source_code_link: 'https://github.com/Zast96/syncfusion_dashboard',
  },
  {
    name: 'Restaurant Site',
    description:
      'Welcome to my restaurant! I love this design, rich but simple. We can still do a lot with our dear old Html, Css, Js team(a pinch of Bootstrap may be present, be careful!).',
    tags: [
      {
        name: 'modern',
        color: 'blue-text-gradient',
      },
      {
        name: 'order',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: restaurant,
    source_code_link: 'https://github.com/Zast96/restaurant_site',
  },
  {
    name: 'Gym Site',
    description:
      'Usually developers are not gym types but after seeing this layout perhaps you will have more will to go to the gym. Or to stretch at home, at least.',
    tags: [
      {
        name: 'fitness',
        color: 'blue-text-gradient',
      },
      {
        name: 'red',
        color: 'green-text-gradient',
      },
      {
        name: 'fluid',
        color: 'pink-text-gradient',
      },
    ],
    image: gym,
    source_code_link: 'https://github.com/Zast96/gym_site',
  },
];

export {services, technologies, experiences, /*testimonials,*/ projects};
