# 🔴 Part 6: Career Ready

> **រយៈពេល:** 4 Lessons (~2 weeks)
> **តម្រូវការមុន:** Part 5 (Deployed Project)
> **លទ្ធផល:** ត្រៀមខ្លួនចូលការងារ Developer
> **Final Output:** Portfolio + Resume + GitHub Profile

---

## Lesson 45: Portfolio Building

### គោលបំណង (Objectives)
- បង្កើត Portfolio Website ដ៏ Professional
- រៀបចំ Projects សម្រាប់បង្ហាញ

### មាតិកា (Topics)
- **Portfolio ហេតុអ្វីសំខាន់?**
  - First impression ពី Employer/Client
  - បង្ហាញ Skills ជាក់ស្តែង
  - ខុសពី Resume — Portfolio បង្ហាញការងារពិត
- **Portfolio Website Structure**
  - **Hero Section** — Name, Title, Short Bio, Photo
  - **About Section** — Background, Skills, Education
  - **Skills Section** — Tech Stack (Icons/Progress bars)
  - **Projects Section** — 3-5 Best Projects
  - **Contact Section** — Form or Contact Info
- **Project Showcase (3-5 Projects)**
  - Project Name & Description
  - Screenshot/Demo GIF
  - Tech Stack Used
  - Live Demo Link
  - GitHub Repository Link
  - Key Features List
- **Project Selection Strategy**
  | # | Project | Purpose |
  |---|---------|---------|
  | 1 | Full-Stack App (Part 4) | Show full-stack capability |
  | 2 | React App (Part 2) | Show frontend skills |
  | 3 | REST API (Part 3) | Show backend skills |
  | 4 | Personal Project | Show creativity |
  | 5 | Group Project (Optional) | Show teamwork |
- **GitHub Profile**
  - Professional Profile Picture
  - Bio & Location
  - README.md for Profile
  - Pin Best Repositories
  - Green Contribution Graph (commit regularly!)
  - Good README.md for each project:
    ```md
    # Project Name
    Short description

    ## Screenshots
    ![Screenshot](link)

    ## Features
    - Feature 1
    - Feature 2

    ## Tech Stack
    React, Express, MongoDB, Tailwind CSS

    ## Getting Started
    1. Clone the repo
    2. npm install
    3. npm run dev

    ## Live Demo
    [Link](https://...)
    ```

### លំហាត់ (Exercise)
- បង្កើត Portfolio Website (React + Tailwind)
- បន្ថែម 3-5 Projects ជាមួយ Screenshots & Links
- រៀបចំ GitHub Profile (README, Pin repos)
- Deploy Portfolio ទៅ Vercel
- សរសេរ README សម្រាប់ Project នីមួយៗ

---

## Lesson 46: Git Collaboration & Team Work

### គោលបំណង (Objectives)
- អាចធ្វើការជាក្រុមដោយប្រើ Git
- យល់ដឹងពី Pull Request & Code Review

### មាតិកា (Topics)
- **Git Branching Strategy**
  ```
  main (production)
  └── develop
      ├── feature/login-page
      ├── feature/product-api
      └── fix/cart-bug
  ```
- **Feature Branch Workflow**
  1. `git checkout -b feature/new-feature`
  2. Write Code & Commit
  3. `git push origin feature/new-feature`
  4. Create Pull Request on GitHub
  5. Code Review
  6. Merge to develop/main
- **Pull Requests (PR)**
  - Writing Good PR Descriptions
  - Requesting Reviewers
  - PR Template
    ```md
    ## What does this PR do?
    - Added login page with form validation

    ## Screenshots
    ![screenshot](link)

    ## How to test
    1. Go to /login
    2. Enter credentials
    3. Should redirect to dashboard
    ```
- **Code Review**
  - Reading Other People's Code
  - Leaving Constructive Comments
  - Approving & Requesting Changes
- **Merge Conflicts**
  - Why conflicts happen
  - How to resolve conflicts
  ```bash
  git pull origin main
  # Fix conflicts in files
  git add .
  git commit -m "Resolve merge conflicts"
  ```
- **Git Best Practices**
  - Write meaningful commit messages
  - Commit often, push regularly
  - Never commit sensitive data (.env, passwords)
  - Keep PRs small and focused

### លំហាត់ (Exercise)
- Team Exercise: 2-3 students work on same project
- Each student creates Feature Branch
- Create Pull Requests & Review Each Other's Code
- Practice Resolving Merge Conflicts
- Complete a mini feature using full PR workflow

---

## Lesson 47: UX/UI មូលដ្ឋាន

### គោលបំណង (Objectives)
- យល់ដឹងពី Design Principles មូលដ្ឋាន
- អាចប្រើ Figma សម្រាប់ Basic Design

### មាតិកា (Topics)
- **UX vs UI**
  - UX (User Experience) — ប្រើប្រាស់ងាយស្រួលទេ?
  - UI (User Interface) — មើលទៅស្អាតទេ?
- **Design Principles**
  - **Consistency** — ប្រើ Style ដូចគ្នាទូទាំង App
  - **Hierarchy** — Important things stand out
  - **Whitespace** — Don't overcrowd
  - **Contrast** — Text readable on background
  - **Alignment** — Elements aligned properly
- **Color Theory**
  - Primary, Secondary, Accent Colors
  - Color Palette Tools (Coolors, Adobe Color)
  - Accessible Color Contrast (WCAG)
- **Typography**
  - Font Pairing (Heading + Body font)
  - Font Size Scale (16px base)
  - Google Fonts
- **Figma មូលដ្ឋាន**
  - Figma Account & Interface
  - Frames, Shapes, Text
  - Auto Layout
  - Components & Variants
  - Simple Wireframing
  - Prototyping (Click through)
- **Accessibility មូលដ្ឋាន**
  - Alt text for images
  - Keyboard navigation
  - Color contrast
  - Semantic HTML
  - Screen reader friendly

### លំហាត់ (Exercise)
- Redesign Portfolio Website ក្នុង Figma
- បង្កើត Color Palette & Typography System
- Wireframe a new feature for your project
- Audit your project for accessibility issues

---

## Lesson 48: Career Preparation

### គោលបំណង (Objectives)
- ត្រៀមខ្លួនសម្រាប់ចូលការងារ
- យល់ដឹងពី Career Paths

### មាតិកា (Topics)
- **Developer Resume**
  - Contact Information
  - Summary (2-3 sentences)
  - Skills (Tech Stack)
  - Projects (with links)
  - Education
  - Keep it 1 page
  - Tailor for each application
- **Career Paths**
  | Path | Description | Skills Focus |
  |------|-------------|--------------|
  | Frontend Developer | UI/UX focused | React, CSS, Design |
  | Backend Developer | Server/API focused | Node.js, Database, Security |
  | Full-Stack Developer | Both sides | Everything |
  | Freelancer | Independent work | All + Business Skills |
- **Job Search Strategy**
  - LinkedIn Profile (Professional)
  - Job Platforms (LinkedIn, Indeed, local platforms)
  - Networking (Tech meetups, Communities)
  - Freelance Platforms (Upwork, Fiverr, Freelancer)
  - Direct Applications to Companies
- **Interview Preparation**
  - **Technical Questions** (Common)
    - What is the difference between `let`, `const`, and `var`?
    - Explain the Virtual DOM
    - What is REST API?
    - Explain Authentication vs Authorization
    - What is CORS?
    - How does `useEffect` work?
  - **Coding Challenges**
    - Practice on LeetCode (Easy level)
    - FreeCodeCamp exercises
    - Build something in 1 hour (live coding)
  - **Behavioral Questions**
    - Tell me about a project you built
    - How do you handle challenges?
    - How do you learn new technologies?
  - **Questions to Ask the Interviewer**
    - What does the tech stack look like?
    - How does the team collaborate?
    - What does a typical day look like?
- **Continuous Learning**
  - Follow Tech Blogs & YouTube Channels
  - Build side projects
  - Contribute to Open Source (Good First Issues)
  - Stay updated with new technologies
  - Next steps: TypeScript, Next.js, Docker, AWS

### លំហាត់ (Exercise)
- សរសេរ Resume (1 page)
- Update LinkedIn Profile
- Practice 10 Technical Interview Questions
- Apply to 3 Internship/Job/Freelance Opportunities
- Set 3-month Learning Goals for after the course

---

## 🎓 Course Completion Checklist

### Student ត្រូវមាន:
- [ ] Portfolio Website (Deployed & Live)
- [ ] 3-5 Projects on GitHub (with README)
- [ ] Professional GitHub Profile
- [ ] Resume (1 Page)
- [ ] LinkedIn Profile
- [ ] Understanding of Full-Stack Development
- [ ] Ability to build & deploy Web Applications independently

### Skills Acquired:
```
Frontend:  HTML, CSS, Tailwind, JavaScript, React
Backend:   Node.js, Express, MongoDB, JWT Auth
Tools:     Git, GitHub, Postman, VS Code, Figma
Deployment: Vercel, Railway/Render, MongoDB Atlas
Soft Skills: Teamwork, Communication, Problem Solving
```

### Recommended Next Steps:
1. **TypeScript** — Type safety for JavaScript
2. **Next.js** — Full-stack React framework
3. **Docker** — Containerization
4. **AWS/GCP** — Cloud services
5. **GraphQL** — Alternative to REST
6. **CI/CD** — Automated deployment pipelines
7. **System Design** — Architecture at scale
