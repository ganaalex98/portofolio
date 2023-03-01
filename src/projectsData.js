import ngenge from "./images/ngenge.png";
import bile from "./images/bile.png";
import keno from "./images/keno.png";
import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import clv from "./images/cloverbet.png";
import rlt from "./images/rlt.png";
import res from "./images/res.png";
import qr from "./images/qr.png";
import kenoghn from "./images/kenoghn.png";
import real from "./images/real.png";
import socca from "./images/socca.png";
import dela from "./images/dela.png";

const projects = [
  {
    name: "LOTO Betting Site",
    key: 1,
    aboutProject: `A web applications designed to allow users to place bets on lotteries. The application was developed for a client in Congo DR (ngengesport). Right now the application can only be accessed using a token provided by the integrators of the app`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs"],
    live: "https://web-lto.zarlab.dev/",
    picture: ngenge,
    github: "",
  },
  {
    name: "Lucky 48 - Screen",
    key: 2,
    aboutProject: `
        The Lucky 48 screen was designed to be used in retail locations, and to display the lucky balls game, including results, statistics and the live drawing of balls for varius clients.`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, ", "SignalR"],
    live: "http://rbtv-six48.syncrobet.ro/",
    picture: bile,
    github: "",
  },
  {
    name: "KENO - Screen",
    key: 3,
    aboutProject: `
        The Keno screen was designed, like the Lucky 48 screen, to be used in retail locations, and to display the keno game, including results, statistics and the live drawing for varius clients.`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, ", "SignalR"],
    live: "http://rbtv-keno.syncrobet.ro/",
    picture: keno,
    github: "",
  },
  {
    name: "DiceGame - UpDown",
    key: 4,
    aboutProject: `
        The Dice Game projects contains 4 different projects. One of them is UpDown game. Here the user can interact with a table to place chips, then throw some dices and see the result`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, "],
    live: "https://web-up7dice.zarlab.dev/",
    picture: dice1,
    github: "",
  },
  {
    name: "DiceGame - BiggerDice",
    key: 5,
    aboutProject: `
        The second game in the Dices games projects is Bigger Dice. Here the user choses how many chips to place on a bet, then the computer will place the same amount, and after the the dices are thrown, waiting for the result`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, "],
    live: "https://web-biggerdice.zarlab.dev/",
    picture: dice2,
    github: "",
  },
  {
    name: "Clover Bet",
    key: 6,
    aboutProject: `
       This is the biggest project that i developed. It is a full working Sport betting site. The site can allow bets on sports and loto, as well as showing results and different other necessities`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, "],
    live: "https://cloverbet.ro/#/",
    picture: clv,
    github: "",
  },

  {
    name: "Dog Racing Games",
    key: 7,
    aboutProject: `
       This projects is divided in 2 parts. The first part is an intteractive palette where the user can place bets on all types of markets related to dog racing. The second part is a TV-screen used to display odds, results and the live dog racing. Right now the app is integrated in the terminal solution and can be accessed ONLY in retails shops`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, ", "SignalR"],
    live: "#",
    picture: null,
    github: "",
  },
  {
    name: "Roulete game",
    key: 8,
    aboutProject: `
       This project was designed and developed to be part of the Terminal solution as well. The integration, for this game, in the terminal solution changed, and now the solution is on hold`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, ", "SignalR"],
    live: "https://presentation-rlt-t2.syncrobet.ro/",
    picture: rlt,
    github: "",
  },
  {
    name: "Results for Loto Game",
    key: 9,
    aboutProject: `
       This project is closely related to the first project in this list. As the customer requested, a new application with results only for the loto game has been developed.`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, "],
    live: "http://loto.ngenge.bet/",
    picture: res,
    github: "",
  },
  {
    name: "QR - Check page",
    key: 10,
    aboutProject: `
       This is a website used as a tool for the Terminal solution. The terminal solution, whenever you place a bet, will print a ticket with a qr code. If the user scans the qr code, this app will show him the state of the ticket. This app need a query param when opened`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, "],
    live: "https://qrc-app.syncrogames.com/?serialNumber=F01-1bbah6",
    picture: qr,
    github: "",
  },
  {
    name: "KENO Game - SoccaBet",
    key: 11,
    aboutProject: `
       This app is a Keno Game developed for a customer in Ghana. The app will connect to a SignalR hub to display all mesages and also the drawing itself.`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, ", "SignalR"],
    live: "#",
    picture: kenoghn,
    github: "",
  },
  {
    name: "Socca Bet",
    key: 12,
    aboutProject: `
       In this project i had to mentain the application whenever changes on the backend were made. I helped solving some bugs and added new functionalities`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, ", "PHP"],
    live: "https://www.soccabet.com/#/",
    picture: socca,
    github: "",
  },
  {
    name: "Real Bet",
    key: 13,
    aboutProject: `
       In this project i had to mentain the application whenever changes on the backend were made. I helped solving some bugs and added new functionalities`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "APIs, ", "PHP"],
    live: "https://realbet.ro/",
    picture: real,
    github: "",
  },
  {
    name: "Feed Integrator. Odds Integrator",
    key: 14,
    aboutProject: `
       This was one of my first projects. It is a Desktop/WinForm applications used to get odds from a provider, display them, make different raports and also update then in database`,
    techs: ["C#, ", "ASP .NET"],
    live: "#",
    picture: dela,
    github: "",
  },
  {
    name: "Terminal Solution",
    key: 15,
    aboutProject: `
       This project was developed to eventually replace the workers in a retail betting shop. It is a big application which contains a lot of small applications. The app is avalibe on retails shops`,
    techs: [
      "React, ",
      "Semantic UI, ",
      "HTML, ",
      "CSS, ",
      "APIs, ",
      "C#, ",
      "ASP .NET",
      "Entity Framework",
    ],
    live: "#",
    picture: null,
    github: "",
  },
];

export default projects;
