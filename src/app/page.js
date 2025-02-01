'use client';

import { useState } from 'react';
import JobItem from '../components/jobItem';

const initialJobs = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Deltopia Inc.",
    date: "Summer 2024",
    responsibilities: [
      "Developed key Lit-based components for DupliWalker.",
      "Leveraged Theia's modular framework for both web and desktop apps.",
      "Created a product upgrade checkout page using custom React components and Next.js API routes.",
      "Performed testing and managed JIRA tasks."
    ]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Apricorn Inc.",
    date: "Summer 2023",
    responsibilities: [
      "Engineered a prototype of a touchscreen encrypted drive using C++ and STM32CubeIDE.",
      "Showcased the prototype to cross-functional teams.",
      "Collaborated with engineering, product management, and commercial teams."
    ]
  },
  {
    id: 3,
    title: "Software Developer Intern",
    company: "Deltopia Inc.",
    date: "Summer 2022",
    responsibilities: [
      "Shadowed experienced developers to learn agile practices.",
      "Designed and implemented toolbar, menu, and text comparison components for CompareJS.com.",
      "Utilized Lit, Monaco Editor, and the Browser File System API to ensure privacy and security."
    ]
  }
];

export default function Home() {
  const contactInfo = {
    name: "Julian Ignatov",
    email: "jignatov@calpoly.edu",
    phone: "858.349.2544",
    linkedin: "https://linkedin.com/in/julian-ignatov"
  };

  const education = {
    degree: "BS in Computer Science (AI and ML concentration)",
    graduation: "Expected graduation: June 2026",
    program: "Cal Poly Honors Program",
    gpa: "3.7",
    deanList: "Dean’s List for 5 quarters",
    courses: [
      "Data Structures",
      "Project-Based OOP & Design",
      "Systems Programming",
      "Design & Analysis of Algorithms",
      "Programming Languages",
      "Intro to Database Systems (in progress)"
    ]
  };

  const skills = {
    programming: "TypeScript, JavaScript, Java, Python, HTML5, S/CSS, C, SQL",
    libraries: "Web Components, Lit, React, Next.js, PayPal Advanced Checkout API, Eclipse Theia, Electron.js",
    cloud: "AWS",
    design: "Figma",
    ide: "Visual Studio Code, IntelliJ IDEA, PyCharm",
    versionControl: "Git, BitBucket, Jira, GitHub",
    os: "Windows, macOS, Linux"
  };

  const [jobList, setJobList] = useState(initialJobs);

  const sortedJobs = [...jobList].sort((a, b) => b.id - a.id);

  function addJob() {
    const newJob = {
      id: jobList.length + 1,
      title: "New Job",
      company: "New Company",
      date: "2025",
      responsibilities: [
        "Responsibility 1", 
        "Responsibility 2"
      ]
    };
    setJobList([...jobList, newJob]);
  }

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1>{contactInfo.name}</h1>
        <p>Email: {contactInfo.email}</p>
        <p>Phone: {contactInfo.phone}</p>
        <p>
          LinkedIn:{" "}
          <a href={contactInfo.linkedin}>
            {contactInfo.linkedin}
          </a>
        </p>
      </header>

      <section>
        <h2>Education</h2>
        <p>{education.degree}</p>
        <p>{education.graduation}</p>
        <p>{education.program}</p>
        <p>
          GPA: {education.gpa} ({education.deanList})
        </p>
        <p>Relevant Courses: {education.courses.join(', ')}</p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p>
          <strong>Programming Languages:</strong> {skills.programming}
        </p>
        <p>
          <strong>Libraries & Frameworks:</strong> {skills.libraries}
        </p>
        <p>
          <strong>Cloud Platforms:</strong> {skills.cloud}
        </p>
        <p>
          <strong>Design Tools:</strong> {skills.design}
        </p>
        <p>
          <strong>IDEs:</strong> {skills.ide}
        </p>
        <p>
          <strong>Version Control & Task Management:</strong> {skills.versionControl}
        </p>
        <p>
          <strong>Operating Systems:</strong> {skills.os}
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>EncinitasRRD.org</h3>
            <p>
              Co-created a digital platform for the Encinitas grassroots community (Summer 2022). Managed website operations and content during its active period.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Work Experience</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {sortedJobs.map((job) => (
            <JobItem key={job.id} job={job} />
          ))}
        </ul>
        <button onClick={addJob}>Add Job</button>
      </section>
    </div>
  );
}
