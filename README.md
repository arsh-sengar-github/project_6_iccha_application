<a id="top"></a>

[![Issues][issues-shield]][issues-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Contributors][contributors-shield]][contributors-url]

<br />

<!-- LOGO -->

<div align="center">

  <a href="https://project-6-iccha-application.vercel.app/">
    <img src="public/iccha_logo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Iccha</h3>

  <p align="center">
    Iccha is an AI-powered web application that helps users generate unique and meaningful names for their ideas. By analyzing a few creative inputs, it suggests tailored name options and checks their domain availability, guiding users from inspiration to identity.
    <br />
    <a href="https://github.com/arsh-sengar-github/project_6_iccha_application">
    <strong>Explore Documents »</strong>
    </a>
    <br />
    <br />
    <a href="https://project-6-iccha-application.vercel.app/">View Demonstration</a>
    &middot;
    <a href="https://github.com/arsh-sengar-github/project_6_iccha_application/issues/new?labels=bug&template=bug-report---.md">Report a Bug</a>
    &middot;
    <a href="https://github.com/arsh-sengar-github/project_6_iccha_application/issues/new?labels=enhancement&template=feature-request---.md">Request a Feature</a>
  </p>

</div>

<!-- CONTENTS -->

<details>

  <summary>Contents</summary>

  <ol>
  
  <li>
  <a href="#acknowledgment">Acknowledgment</a>
  </li>
    <li>
      <a href="#about">About</a>
      <ul>
        <li>
        <a href="#technologies">Technologies</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#start">Start</a>
      <ul>
        <li>
        <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
        <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
    <a href="#usage">Usage</a>
    </li>
    <li>
    <a href="#contribution">Contribution</a>
    </li>
    <li>
    <a href="#contact">Contact</a>
    </li>

  </ol>

</details>

<!-- ACKNOWLEDGMENT -->

## Acknowledgment

Special thanks to the tools, libraries, and communities that made **Iccha** possible:

- [Next.js](https://nextjs.org/) — for powering the frontend and backend seamlessly.
- [Shadcn/UI](https://ui.shadcn.com/) — for beautiful, customizable UI components.
- [Google AI Studio](https://aistudio.google.com/) — for enabling intelligent name generation powered by Gemini models.
- [WhoisXMLAPI](https://whois.whoisxmlapi.com/) — for providing seamless and reliable domain availability checks.
- [Vercel](https://vercel.com/) — for frictionless deployment and hosting.
- All open-source maintainers and contributors whose libraries made this project shine.

---

<p align="right">
(<a href="#top">back to top</a>)
</p>

---

<!-- ABOUT -->

## About

[![Screen Shot][screenshot]](https://project-6-iccha-application.vercel.app/)

---

## 🔮 About Iccha

**Iccha** (Sanskrit: इच्छा — “desire”) is an A.I.-driven web application that helps users generate meaningful, expressive, and memorable names for their ideas — whether they’re for brands, products, or creative projects.

By blending linguistic style, emotional resonance, and controlled randomness, **Iccha** lets creativity meet precision through an elegant, interactive interface.

### 🌐 Universal Pages

- **Landing:** In this page, users enter an **Idea (word)** and click **“Get Names”**, opening a dialog with three tabs that define the personality of their generated names:

  - **Mannerism (Style):** Auto, Descriptive, Invented, Evocative, Experiential, Lexical, Foundational
  - **Predictability (Arbitrariness):** Easy, Moderate, Hard
  - **Quality:** Users define their idea and provide a short description to clarify intent

  After completing these selections, clicking **“Name Idea”** redirects to `/name-idea`, where the generation process begins.

- **Name Idea:** In this page:

  - A **sidebar** displays previously chosen settings (editable anytime).
  - The main panel presents **20 generated names**, powered by **Google’s Gemini A.I.**
  - **Infinite scroll** loads 20 new names at a time for continuous discovery.
  - Users can alter preferences at any time — new results appear dynamically.
  - Selecting a name triggers a **domain availability check** via **WhoisXMLAPI's API**, helping users validate if a `.com` domain is available for their chosen name.

---

<p align="right">
(<a href="#top">back to top</a>)
</p>

---

### ⚙️ Technologies

This project was built using a modern, full-stack web development ecosystem that combines performance, scalability, and user experience. Below are the key frameworks, libraries, and services that power **Iccha**:

- [![Next][Next.js]][Next-url]
- [![Shadcn][Shadcn.ui]][Shadcn-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- [![Google AI Studio][GoogleAIStudio]][GoogleAIStudio-url]
- [![WhoisXMLAPI][WhoisXMLAPI]][WhoisXMLAPI-url]

---

| Category                       | Stack                                 |
| ------------------------------ | ------------------------------------- |
| **Framework & Core**           | Next.js, React, JavaScript            |
| **Styling & UI**               | Tailwind CSS, Shadcn/ui, Lucide Icons |
| **A.I. Integration**           | Google Gemini API                     |
| **External APIs**              | WhoisXML Domain Availability          |
| **State Management & Context** | React Context API                     |
| **Build & Deployment**         | Vercel                                |

---

<p align="right">
(<a href="#top">back to top</a>)
</p>

---

<!-- START -->

## Start

Follow these steps to run **Iccha** locally for development and experimentation.

---

<p align="right">
(<a href="#top">back to top</a>)
</p>

---

### 📋 Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version ≥ 18.x recommended)
  [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

---

### 📥 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arsh-sengar-github/project_6_iccha_application.git
   ```

2. **Navigate into the project directory**

   ```bash
   cd project_6_iccha_application
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Create your environment file**

   > Duplicate the `.env.example` file (if available) or create a new file named `.env.local` in the project root.

   ```bash
   NEXT_PUBLIC_GEMINI_API_KEY="your_google_ai_studio_api_key"
   NEXT_PUBLIC_DOMAIN_AVAILABILITY_API_KEY="your_whyisxmlapi_api_key"
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

6. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) to view **Iccha** in your browser.

---

### ⭐ Tips

- To build for production:

  ```bash
  npm run build
  npm start
  ```

---

<p align="right">
(<a href="#top">back to top</a>)
</p>

---

<!-- USAGE -->

## Usage

Once your development server is running, you can explore **Iccha** through the following routes and dashboards:

### 🌐 Public Pages

| Page          | Path         | Description                                                                          |
| ------------- | ------------ | ------------------------------------------------------------------------------------ |
| **Landing**   | `/`          | Enter an idea and configure naming parameters (Mannerism, Predictability, Quality).  |
| **Name Idea** | `/name-idea` | View and interact with AI-generated names. Infinite scroll for continuous discovery. |

---

<p align="right">
(<a href="#top">back to top</a>)
</p>

---

<!-- CONTRIBUTION -->

## Contribution

Contributions are what make the open-source community such an inspiring space to **learn**, **collaborate**, and **create**.
Any contributions you make to **Iccha** are **deeply appreciated** — whether it’s improving the UI, optimizing backend logic, or suggesting new features!

If you have an idea to make this project even better, feel free to **fork** the repository and submit a **pull request**.
Alternatively, you can simply open an **issue** with the label `enhancement`.

And of course — don’t forget to ⭐ **star the repo** if you like what you see!

---

### ❓ How to Contribute

1. **Fork** the Project
2. **Create your Feature Branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

---

### 👨‍💻 Top Contributors

<a href="https://github.com/arsh-sengar-github/project_6_iccha_application/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=arsh-sengar-github/project_6_iccha_application" alt="Contributors Graph" />
</a>

---

<p align="right">
(<a href="#top">back to top</a>)
</p>

---

<!-- CONTACT -->

## Contact

**Project Maintainer:** [Arsh Sengar](https://github.com/arsh-sengar-github)

📧 **Email:** [arshsengar.academic@gmail.com](mailto:arshsengar.academic@gmail.com)

📁 **Repository:** [https://github.com/arsh-sengar-github/project_6_iccha_application](https://github.com/arsh-sengar-github/project_6_iccha_application)

🌐 **Application:** [https://project-6-iccha-application.vercel.app](https://project-6-iccha-application.vercel.app)

If you have any questions, feedback, or suggestions, feel free to reach out!
Collaboration and constructive ideas are always welcome. 💡

---

<p align="right">
(<a href="#top">back to top</a>)
</p>

---

<!-- Badge Definitions -->

[issues-shield]: https://img.shields.io/github/issues/arsh-sengar-github/project_6_iccha_application.svg?style=for-the-badge
[issues-url]: https://github.com/arsh-sengar-github/project_6_iccha_application/issues
[forks-shield]: https://img.shields.io/github/forks/arsh-sengar-github/project_6_iccha_application.svg?style=for-the-badge
[forks-url]: https://github.com/arsh-sengar-github/project_6_iccha_application/network/members
[stars-shield]: https://img.shields.io/github/stars/arsh-sengar-github/project_6_iccha_application.svg?style=for-the-badge
[stars-url]: https://github.com/arsh-sengar-github/project_6_iccha_application/stargazers
[contributors-shield]: https://img.shields.io/github/contributors/arsh-sengar-github/project_6_iccha_application.svg?style=for-the-badge
[contributors-url]: https://github.com/arsh-sengar-github/project_6_iccha_application/graphs/contributors
[screenshot]: public/iccha.png
[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Shadcn.ui]: https://img.shields.io/badge/shadcn/ui-111111?style=for-the-badge&logo=react&logoColor=61DAFB
[Shadcn-url]: https://ui.shadcn.com/
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[GoogleAIStudio]: https://img.shields.io/badge/Google%20AI%20Studio-4285F4?style=for-the-badge&logo=google&logoColor=white
[GoogleAIStudio-url]: https://aistudio.google.com/
[WhoisXMLAPI]: https://img.shields.io/badge/WhoisXMLAPI-FF6F00?style=for-the-badge&logo=whois&logoColor=white
[WhoisXMLAPI-url]: https://whois.whoisxmlapi.com/
