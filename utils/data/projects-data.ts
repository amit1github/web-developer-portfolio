export interface ProjectType {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  code: string;
  demo: string;
  image: string;
}

//TODO: Complete the tools and description also using chatGPT or current resume.
export const projectsData: ProjectType[] = [
  {
    id: 1,
    name: "Ease Commerce Technologies Pvt. Ltd.",
    description:
      "Engineered high-scale automation and integration systems, specializing in omnichannel communication and logistics. I spearheaded the integration of Meta APIs (WhatsApp, Instagram, Facebook) into a unified ticketing support system, significantly enhancing customer engagement. I also architected end-to-end order lifecycle managers for enterprise partners like TataCliq and automated complex warehouse workflows for major couriers including Delhivery and iThink Logistics, reducing manual operational effort by 60%. By developing searchable agenda job modules and custom B2B reporting tools with advanced data filtering, I improved system reliability and provided deep operational visibility for data-driven decision-making.",
    tools: [
      "Node.js",
      "Nest.js",
      "Express",
      "TypeScript",
      "React",
      "Next.js",
      "Material-UI",
      "MongoDB",
      "Mongoose",
      "Redis",
      "Socket.io",
      "Git",
      "REST APIs",
      "Meta API",
      "Agenda.js"
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: "/image/crefin.jpg",
  },
  {
    id: 2,
    name: "Wipzent Tech Pvt. Ltd.",
    role: "Full Stack Developer",
    description:
      "Architected and deployed scalable full-stack solutions with a focus on algorithmic automation and secure financial communication. I engineered a dynamic prize distribution algorithm for Starplayers to manage high-volume automated payouts and implemented platform-wide reliability through custom cron jobs for background processing. Additionally, I led the development of FG Media, a multi-content platform for short-form video and news, where I optimized frontend performance using lazy loading and efficient state management. My work also included building the secure backend infrastructure for Omega Finance and fortifying platform security by implementing Two-Factor Authentication (2FA) and integrated payment gateways like Stripe and Razorpay.",
    tools: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "Razorpay",
      "AWS EC2",
      "JWT",
      "Chart.js",
      "Cron Jobs",
      "2FA/OTP"
    ],
    code: "",
    demo: "",
    image: "/image/travel.jpg",
  },
  {
    id: 3,
    name: "Jobs Territory - Women Empowerment Org",
    description:
      "At Jobs Territory, I specialize in development and maintenance, bolstering backend infrastructure and resolving API issues for our workforce management system using Node.js, Express.js, MongoDB, and AWS services. Additionally, I craft new APIs to meet frontend demands, enriching our recruitment platform's capabilities. I also excel in AWS management, optimizing EC2 and S3 to ensure peak system performance, scalability, and data security, thus enhancing our overall operations and user experience.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "bcryptjs",
      "cors",
      "dotenv",
      "jsonwebtoken",
      "multer",
      "nodemailer",
      "validator",
    ],
    code: "",
    demo: "",
    image: "/image/real-estate.jpg",
    role: "Backend Developer with AWS expertise",
  },
  {
    id: 5,
    name: "Crypto Watcher",
    description:
      "Introducing Crypto Watcher, a cutting-edge crypto listing web application designed to provide users with real-time insights into the top-performing cryptocurrencies. Accessible at [https://crypto-currency-watcher.netlify.app/], Crypto Watcher seamlessly integrates cryptocurrency data APIs to deliver up-to-date information on rankings, market capitalizations, and prices. Through dynamic charting and visualization powered by Chart.js, users can explore cryptocurrency performance across various timeframes, from yearly trends to hourly fluctuations. With built-in mechanisms for real-time data updates, Crypto Watcher ensures users stay informed about the latest cryptocurrency trends and market movements, making it the ultimate destination for crypto enthusiasts seeking timely and accurate insights.",
    tools: [
      "React.js",
      "Axios",
      "Chart.js",
      "React Router DOM",
      "React Alice Carousel",
      "Emotion",
      "Material-UI",
      "Testing Library",
    ],
    code: "",
    demo: "",
    image: "/image/ayla.jpg",
    role: "Front-End Developer",
  },
];
