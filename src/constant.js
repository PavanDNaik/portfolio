export const filContent = {
  jsx: `import React from 'react';
const help = '"ctrl + click" to visit any link';

const Portfolio = () => {
    return (
        <div>
            <h1>My Portfolio</h1>
            <section>
                <h2>Sections</h2>
                <ul>
                    <li>
                        <a href="about.html">Know About Me</a>
                    </li>
                    <li>
                        <a href="project.json">See My Projects</a>
                    </li>
                    <li>
                        <a href="contact.css">Contact Me</a>
                    </li>
                    <li>
                        <a href="achievement.md">See My Achievements</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Portfolio;
`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Pavan Naik - Profile</title>
</head>
<body>
    <header>
        <h1>Pavan Naik</h1>
        <p><strong>Full Stack Developer</strong></p>
    </header>
    <section>
        <p>
            <h1>Hello! I'm Pavan Naik </h1>, a passionate and driven Computer Science Engineer 
            currently pursuing my Bachelor's degree at <strong>Canara Engineering College, Mangalore</strong>.
        </p>

        <p>My expertise lies in:</p>
        <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Competitive Programming</li>
        </ul>

        <Resume>https://drive.google.com/file/d/1AavIkobyx6rEnRs6cBWd1ulEWxI3t9Jf/view</Resume>
    </section>
</body>
</html>
`,
  css: `.contact {
    --email: "pawannaik396@gmail.com";
    --linkedin: "https://linkedin.com/in/pavan-d-naik";
    --github: "https://github.com/PavanDNaik";
}
`,
  json: `{
    "projects": [
        {
            "name": "Kavach",
            "repository":"https://github.com/PavanDNaik/KavachExtension",
            "technologies": ["ReactJS", "Webextension-polyfill", "LLAMA 2", "FastAPI", "Flask"],
            "description": "A browser extension that identifies Dark Patterns on e-commerce websites and alerts users.",
            "highlights": [
                "Integrated ML models BERT and LLAMA 2 to detect seven types of Dark Patterns.",
                "Enhanced online shopping safety with actionable user insights."
            ]
        },
        {
            "name": "CodeLoom",
            "repository":"https://github.com/PavanDNaik/CodeLoom",
            "technologies": ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
            "description": "A full-stack platform supporting multiple programming languages for coding practice.",
            "highlights": [
                "Implemented user authentication and profile management.",
                "Provided analytics for tracking skill development."
            ]
        },
        {
            "name": "Alumni Connect",
            "technologies": ["ReactJS", "NodeJS", "MongoDB", "TypeScript", "Puppeteer"],
            "description": "A platform to connect current students with alumni for mentorship and networking.",
            "highlights": [
                "Developed features for alumni-student communication and event organization.",
                "Implemented a search and filter system for efficient mentor matching.",
                "Scraped 1000+ profiles from LinkedIn using Puppeteer and TypeScript to populate the alumni database for enhanced connectivity."
            ]
        }
    ]
}`,
  js: "let a = {}",
  md: `# Achievements

- **Codevita 2024**: Achieved a global rank of **201** and qualified for the next round (Codevita is still running).
  
- **Leetcode**: 
  - Level: **Knight** (Top **4.33%**).
  - Rating: **1900+**.

- **DPBH 2024**: 
  - Finalist in the prestigious **Dark Pattern Buster Hackathon (DPBH) 2024**.
  - Recognized as one of the **top 25 teams** in the second round.
  - Advanced to the **top 10** in the third round at the national level.

- **Pralium 2023**: Secured **Rank 9** in **Pralium 2023**, the **NITK** rendition of the **IEEE Xtreme Competitive Programming Competition**.
`,
};

export const defaultFiles = [
  { type: "jsx", lang: "javascript", title: "Main" },
  { type: "html", lang: "html", title: "about" },
  { type: "json", lang: "json", title: "project" },
  { type: "md", lang: "markdown", title: "achievement" },
  { type: "css", lang: "css", title: "contact" },
];
