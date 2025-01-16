export const Bio = {
  name: "Nirali Patel",
  roles: ["Python Developer", "Full Stack Developer", "Django Developer"],
  description:
    "Developer with over 2 years+ of experience, skilled in Python, Django, JavaScript, and databases. Focused on writing clean, modular code and creating automation and data-driven solutions. Quick to adapt to new technologies and consistently delivers high-quality results.",
  resume:
    "https://drive.google.com/file/d/16d3mGOe9bS8jeFVh21nuypmgspV8PClq/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/nirali-s-patel/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      // {
      //   name: "React Js",
      //   image:
      //     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      // },
      // {
      //   name: "Bootstrap",
      //   image:
      //     "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      // },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Python",
      },
      {
        name: "Django",
      },
      {
        name: "MongoDB",
      },
      {
        name: "SQL",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "MySQL",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
      },
      {
        name: "GitHub",
      },
      {
        name: "VS Code",
      },
      {
        name: "Postman",
      },
      {
        name: "Flask",
      },
      {
        name: "FastAPI",
      },
      {
        name: "Pychram",
      },
      {
        name: "Docker",
      },
      {
        name: "AWS",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://th.bing.com/th?id=ODLS.7c5eeea1-143a-49b8-8278-59ffbad20894&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
    role: "Python Software Developer",
    company: "CMOTS Internet Technologies, Chembur",
    date: "Jan 2023 - Present",
    desc: "As a Python Software Developer, I have experience developing mid to large-scale business software, designing efficient workflows, and managing version control. I also contribute to team productivity by sharing knowledge.",
    skills: [
      "Python",
      "Django",
      "Pandas",
      "NumPy",
      "SQL",
      "PostgreSQL",
      "JavaScript",
      "MongoDB",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://www.rcpimrd.ac.in/uploads/1688186800.jpg",
    school: "RCPET's IMRD Shirpur",
    date: "2021 - 2023",
    grade: "9 SGPA",
    degree: "Master of Computer Application",
  },
  {
    id: 1,
    img: "https://www.psgvpmandal.com/wp-content/uploads/2018/10/cropped-Logo.png",
    school: "PSGVPM'S, GBPatil Science College, Shahada",
    date: "2019 - 2021",
    grade: "89.60%",
    degree: "Bachelor of Science (Maths)",
  },
  {
    id: 2,
    img: "https://mahahsscboard.in/boardlogo.svg",
    date: "2018",
    grade: "72.62%",
    degree: "XII",
  },
  {
    id: 3,
    img: "https://mahahsscboard.in/boardlogo.svg",
    date: "2016",
    grade: "86.60%",
    degree: "X",
  },
];

export const projects = [
  {
    id: 1,
    title: "Stock Charts Technical Analysis ",
    description:
      "Stock Charts Technical Analysis is a web application that provides stock market data visualization and technical analysis. It allows users to view stock data, analyze trends, and make informed investment decisions. The application is built using Django, MySQL, JavaScript, CSS",
    image:
      "http://capitacharts.com/staticfiles/landing_index/images/screen-2.png",
    tags: ["DRF", "MySQL", "JS", "CSS", "Ajax", "jQuery", "AmCharts5"],

    github: "http://capitacharts.com/",
  },
  {
    id: 2,
    title: "MiraeAssets Portfolio Integration",
    description:
      "Developed a Python script using multiprocessing for FIFO logic with deque to handle large-scale portfolio transaction data. It utilizes NumPy for calculations and threading for automating corporate actions (Bonus, Dividend, Merger, Demerger, Split, ROC). The system ensures efficient updates, accurate data storage, and improved reporting and action management.",
    image:
      "https://cdn.educba.com/academy/wp-content/uploads/2020/02/Python-Multiprocessing-2.jpg",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Multiprocessing",
      "PostgreSQL",
      "Threadding",
      "Dequeue",
    ],
    github: "https://github.com/Kusamthakur/chat-app_using_mern",
  },
  {
    id: 3,
    title: "Web Captcha Reader",
    description:
      "Created a script using PyAutoGUI and Selenium to automate captcha-solving on MCA websites by simulating mouse actions and interacting with the website.",
    image: "https://i.sstatic.net/mStXU.jpg",
    tags: ["Pyautogui", "Selenium"],
    github: "https://github.com/Kusamthakur/chat-app_using_mern",
  },
  {
    id: 4,
    title: "Automating XBRL Tool with PyAutoGUI",
    description:
      "Created a script using PyAutoGUI and Selenium to automate captcha-solving on MCA websites by simulating mouse actions and interacting with the website.",
    image: "https://i.sstatic.net/mStXU.jpg",
    tags: ["Python", "PyAutoGUI", "Subprocess", "Time"],
    github: "https://github.com/Kusamthakur/chat-app_using_mern",
  },
  {
    id: 5,
    title: "Words Transliteration",
    description:
      "Built a desktop app using PyQt5 to transliterate company names into languages like Hindi, Marathi, Gujarati, and Telugu using phonetic words and the Google Translate API. The app stores the transliterated data in an SQL database for easy management and retrieval",
    image: "https://i.sstatic.net/mStXU.jpg",
    tags: ["Python", "Pandas", "pyQt5", "Threading", "MongoDB", "MsSQL"],
    github: "https://github.com/Kusamthakur/chat-app_using_mern",
  },
  {
    id: 6,
    title: "PDF File Attachment Extractor and Merge PDF",
    description:
      "Created a exe to extract attachments (images, files) from PDF documents and merge multiple PDF files into one.",
    image: "https://i.sstatic.net/mStXU.jpg",
    tags: ["Python", "PyQt5"],
    github: "https://github.com/Kusamthakur/chat-app_using_mern",
  },
];
