import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import youtubeClone from "../images/youtubeClone.png"
import coronaTracker from "../images/coronaTracker.png";
import newsApp from "../images/newsApp.png";
import travlendar from "../images/travlendar.png";
import infixs from "../images/infixs.png";
import inotebook from "../images/inotebook.png"

const portfolios = [
  {
    id: "01",
    imgUrl: youtubeClone,
    category: "Web Design",
    title: "Youtube Clone",
    description:
      "Built a Youtube clone by fetching data from RapidAPI, which provided hands-on experience in ReactJs.",
    technologies: ["React", "css", "HTML","RapidAPI"],
    siteUrl: "#",
    githubUrl:'https://github.com/AshiwalKaran/Youtube-Clone'
  },
  {
    id: "02",
    imgUrl: newsApp,
    category: "Web Design",
    title: "NEWSAPP",
    description:
      "Web app to exhibit the news using NewsAPI and ReactJs framework.Categorized and displayed relevant news from 7 categories,including science, technology, business, entertainment, general,      health, and sports.",
    technologies: ["React", "HTML", "CSS", "RapidAPI"],
    siteUrl: "#",
    githubUrl:"https://github.com/AshiwalKaran/ReactNewsApp"
  },
  {
    id: "03",
    imgUrl: coronaTracker,
    category: "Web Design",
    title: "CORONATRACKER",
    description:
      "Web app to lay out corona statistics country wise and also Indian statewise data.",
    technologies: ["React", "css", "MongoDB"],
    siteUrl: "https://ashiwalkaran.github.io/corona_tracker/",
    githubUrl:"https://github.com/AshiwalKaran/corona_tracker"
  },
  {
    id: "04",
    imgUrl: travlendar,
    category: "Web Design",
    title: "Travlendar",
    description:
      "Travlendar will provide flexible and fully-featured web app support that considers the travel time between meetings. Travlendar support a multitude of travel means, including walking, biking, public transportation, and driving. A particular user may choose between each travel means.",
    technologies: ["HTML", "css", "Node.js", "mySQL"],
    siteUrl: "https://travlendarsks.herokuapp.com/",
    githubUrl:"https://github.com/saurabhpan98/travlendar"
  },
  {
    id: "05",
    imgUrl: infixs,
    category: "Web Design",
    title: "INFIXS: BLOGSITE",
    description:
      "Prepared a website that allows the user to perform 4 operations like add , read,modify and delete blogs of different categories.",
    technologies: ["HTML", "css", "Node.js", "mySQL"],
    siteUrl: "#",
    githubUrl:"https://github.com/sysachin/Infix"
  },
  {
    id: "06",
    imgUrl: inotebook,
    category: "Web Design",
    title: "INotebook",
    description:
      "To allow to store notes on their personal accounts.",
    technologies: ["React", "css", "Node.js", "MongoDB","HTML"],
    siteUrl: "#",
    githubUrl:"https://github.com/AshiwalKaran/iNotebook"
  }
  
];

export default portfolios;
