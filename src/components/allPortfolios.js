import port1 from '../img/portImages/port1.jpg';
import port2 from '../img/portImages/port1.jpg';
import sortVis from '../img/portImages/sortVis.png';
import Hangman from '../img/portImages/Hangman.PNG';
import UserAuth from '../img/portImages/UserAuth.PNG';
import iOSExpenseTracker from '../img/portImages/iOSExpenseTracker.PNG';
import iOSMemoryGame from '../img/portImages/iOSMemoryGame.PNG';

// Portfolio Categories:
// 1. Web
// 2. Python
// 3. iOS

const portfolios = [
  {
    id: 1,
    category: 'Web',
    link1: 'https://aqueous-escarpment-60789.herokuapp.com/',
    link2: 'https://github.com/Karsenh/SortingVisualizer/',
    icon1: 'View',
    icon2: 'GitHub',
    image: sortVis,
    title: 'Sorting Visualizer',
    description: 'React.js visualizer for JS sorting algorithms.',
  },
  {
    id: 2,
    category: 'Web',
    link2: 'https://github.com/ReactJs-Hyperbolic/Hangman-2.0',
    icon1: 'View',
    icon2: 'GitHub',
    image: Hangman,
    title: 'React Hangman',
    description: 'React.js based hangman game.',
  },
  {
    id: 3,
    category: 'Web',
    link1: 'https://mern-310-final.herokuapp.com/',
    link2: 'https://github.com/Karsenh/MERN-User-Profile-Project',
    icon1: 'View',
    icon2: 'GitHub',
    image: UserAuth,
    title: 'MERN User Authentication',
    description:
      'MongoDB, Express, React, and Node User-Authentication Dashboard',
  },
  {
    id: 4,
    category: 'iOS',
    link2: 'https://github.com/iOS-Hyperbolic/Clima-for-iOS',
    icon1: 'View',
    icon2: 'GitHub',
    image: iOSExpenseTracker,
    title: 'Expense Tracker',
    description: 'Expense Tracker iOS App written in Swift',
  },
  {
    id: 5,
    category: 'iOS',
    link2: 'https://github.com/iOS-Hyperbolic/iOS-AR-Memory-App',
    icon1: 'View',
    icon2: 'GitHub',
    image: iOSMemoryGame,
    title: 'Memory Game',
    description: 'Memory Game iOS App written in Swift',
  },
];

export default portfolios;
