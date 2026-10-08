export const siteConfig = {
  name: 'Swapnil Devkate',
  shortName: 'Swapnil',

  role: 'Computer Engineer & Backend Developer',

  title: 'Swapnil Devkate | Computer Engineer & Backend Developer',

  description:
    'Swapnil Devkate is a Computer Engineering graduate and Backend Developer from Mumbai, specializing in Java, Spring Boot, REST APIs, Spring Security, JPA, Hibernate, PostgreSQL and MySQL.',

  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://swapnil-devkate.vercel.app',

  email: 'swapnildevkategmi@gmail.com',
  phone: '+91 93727 40657',
  location: 'Andheri (Marol), Mumbai, India',

  github: 'https://github.com/SwapnilAndDev046',
  linkedin: 'https://linkedin.com/in/swapnilsama',

  resume: '/Swapnil_Devkate_Resume.pdf',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'reach-out', label: 'Reach Out' },
];

export const projects = [
  {
    title: 'Digital Banking System',
    date: 'Aug 2026',
    description:
      'A Java and Spring Boot REST API for banking operations, account management and transactions with secure authentication and transactional business logic.',
    highlights: [
      'JWT authentication and role-based authorization',
      'Account ownership checks and transactional operations',
      'DTOs, validation, Flyway migrations and custom exceptions',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'JPA',
      'Hibernate',
    ],
    github:
      'https://github.com/SwapnilAndDev046/DigitalBankingSystem',
  },

  {
    title: 'E-Commerce Backend',
    date: 'Jul 2026',
    description:
      'A Java and Spring Boot REST API for products, shopping carts, orders and order history using JPA, Hibernate, MySQL and role-based security.',
    highlights: [
      'JWT authentication with role-based authorization',
      'JPA relationships for users, products, carts and orders',
      'REST API testing with Postman and MySQL persistence',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'MySQL',
      'JPA',
      'Hibernate',
    ],
    github:
      'https://github.com/SwapnilAndDev046/EcommerceApplication',
  },

  {
    title: 'ApptiDude – MCQ EdTech App',
    date: 'Mar 2025',
    description:
      'A Flutter-based learning application with adaptive testing, mock tests, learning modules and performance-based result analysis.',
    highlights: [
      'Adaptive and topic-wise question selection',
      'Performance-based result analysis',
      'Local persistence using Dart and SQLite',
    ],
    stack: [
      'Flutter',
      'Dart',
      'SQLite',
      'Authentication',
    ],
    github:
      'https://github.com/SwapnilAndDev046/ApptiDude-MCQ-generation-EdTech-App',
  },
];

export const technologyGroups = [
  {
    title: 'Programming',
    items: ['Java', 'SQL', 'Python'],
  },

  {
    title: 'Java & Backend',
    items: [
      'Core Java',
      'OOP',
      'Collections',
      'Java 8',
      'Exception Handling',
      'Multithreading',
      'JDBC',
      'Spring Framework',
      'Spring MVC',
      'Spring Boot',
      'REST APIs',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'JWT Authentication',
    ],
  },

  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL'],
  },

  {
    title: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'React',
    ],
  },

  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Maven',
      'Postman',
      'DBeaver',
      'Flyway',
      'IntelliJ IDEA',
    ],
  },
];