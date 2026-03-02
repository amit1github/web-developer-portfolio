# Developer Portfolio - Amit Yadav

A professional, fully responsive Full Stack Developer Portfolio modernised with **Next.js 14**, **React 18**, and **TypeScript**. Designed to showcase experience, projects, and skills with a sleek aesthetic and optimal performance.

---

## ⚡ Tech Stack & Architecture

- **Core:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS, SCSS Modules
- **Animations:** Lottie React, React Fast Marquee
- **Forms & Integration:** EmailJS, React Toastify, React Icons
- **Backend & Cloud (Experience Base):** Node.js, Nest.js, Express, MongoDB, AWS (EC2, S3), Redis, Socket.io, Meta APIs

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v18+ recommended)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amit1github/web-developer-portfolio.git
cd web-developer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Environment Variables Setup (`.env`):
Duplicate the `.env.example` file to create a new `.env` file in the root directory and populate your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application locally.

---

## 📂 Content Management

All portfolio content is typed and strictly structured. You can easily update your details by modifying the TypeScript definitions in the `utils/data/` directory:
- `personal-data.ts` - Basic info, bio, and social links.
- `experience.ts` - Work history.
- `projects-data.ts` - Featured projects and technical stack.
- `skills.ts` - Array of technical skills rendered in the Marquee.
- `educations.ts` - Academic background.

---

## 📬 Contact

- **Email:** amitkryadav8991@gmail.com
- **LinkedIn:** [amit-kr-yadav](https://www.linkedin.com/in/amit-kr-yadav/)
- **GitHub:** [amit1github](https://github.com/amit1github)
