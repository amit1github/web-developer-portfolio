import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

//TODO: Complete the tools and description also using chatGPT or current resume.
export const projectsData = [
  {
    id: 1,
    name: "FG Media",
    description:
      "As a Full Stack Developer at FG Media, I spearheaded the creation of a versatile online platform, seamlessly combining features of an OTT platform, TikTok alternative, and a live news portal, alongside incorporating Tweet functionalities, offering users diverse content experiences. Additionally, I developed a robust user dashboard facilitating media uploads and offering valuable insights into user interactions through comprehensive analytics. Skillfully integrating APIs for smooth communication and leveraging Chart JS for dynamic data visualization, I ensured an engaging user experience. Moreover, I optimized AWS EC2 and S3 to enhance system performance, scalability, and data security, thus contributing to the platform's success.",
    tools: [
      "React",
      "Tailwind css",
      "Chart.js",
      "firebase",
      "axios",
      "Express",
      "MongoDB",
      "OpenAI API",
      "AWS SES",
      "AWS S3",
      "Node Mailer",
      "Joi",
      "Puppeteer",
      "EC2",
      "PM2",
      "Nginx",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Starplayers",
    description:
      "As a Backend Developer with specialized AWS expertise at Starplayers, I spearheaded the development and maintenance of a cutting-edge fantasy sports app utilizing Node.js, Express.js, MongoDB, and third-party APIs, focusing on scalability, performance, and optimal user experiences. I seamlessly integrated real-time sports data, ensuring up-to-the-minute game statistics through efficient cronjob updates for user-friendly applications. Additionally, I implemented user account functionalities, KYC verification processes, and withdrawal mechanisms, while also devising a dynamic algorithm for equitable prize distribution, all aimed at delivering a seamless user experience.",
    tools: [
      "AWS SDK",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "bcryptjs",
      "cors",
      "dotenv",
      "Firebase",
      "jsonwebtoken",
      "mongoose",
      "node-cron",
      "nodemailer",
      "razorpay",
      "validator",
      "winston",
    ],
    code: "",
    demo: "",
    image: travel,
    role: "Backend Developer with AWS expertise",
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
    image: realEstate,
    role: "Backend Developer with AWS expertise",
  },
  {
    id: 4,
    name: "Omega Finance",
    description:
      "At Omega Finance, I led the comprehensive development of our platform as the primary backend developer, overseeing its evolution from conception to a feature-rich portal. Implementing stringent user authentication and authorization protocols, I fortified our system against unauthorized access, guaranteeing the protection of sensitive financial information. Through close collaboration with frontend counterparts, I facilitated the smooth integration of frontend and backend elements, providing seamless user experiences.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "jsonwebtoken",
      "cors",
      "dotenv",
      "express-validator",
      "multer",
      "firebase-admin",
      "aws-sdk",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Backend Developer",
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
    image: ayla,
    role: "Front-End Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
