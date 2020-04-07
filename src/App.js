import React from 'react';
import './App.css';
import NewsChina from './newsreact/NewsChina'
import NewsFrance from './newsreact/NewsFrance'
import NewsGermany from './newsreact/NewsGermany'
import NewsUSA from './newsreact/NewsUSA'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav className="header-me">
        <h1>News By Country</h1>
        <Link to="/">home</Link>
        <Link to="/NewsUSA">USA</Link>
        <Link to="/NewsGermany">Deutschland</Link>
        <Link to="/NewsFrance">Frankreich</Link>
        <Link to="/NewsChina">China</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact>
            <img id="startimage" src="https://newswelcome.com/wp-content/uploads/2020/03/News-Welcome-Updates-3.png"></img>
          </Route>
          <Route path="/NewsUSA" exact>
            <NewsUSA />
          </Route>
          <Route path="/NewsGermany" exact>
            <NewsGermany />
          </Route>
          <Route path="/NewsFrance" exact>
            <NewsFrance />
          </Route>
          <Route path="/NewsChina" exact>
            <NewsChina />
          </Route>
        </Switch>
      </main>
    </div >
  );
}

export default App;

// --------------------------------------------- Working Backup ----------------------------------------
// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Home from "./components/Home"
// import About from "./components/About"
// import Contact from "./components/Contact"
// import Contact1 from "./components/Contact1"

// import {
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <nav>
//         <Link to="/">home</Link><br />
//         <Link to="/about">About</Link><br />
//         <Link to="/contact">Contact</Link><br />
//       </nav>
//       <Switch>
//         <Route path='/' exact>
//           <Home />
//         </Route>
//         <Route path='/Contact' exact>
//           <Contact />
//         </Route>
//         <Route path='/About'>
//           <About />
//         </Route>
//         <Route path='/Contact/1'>
//           <Contact1 />
//         </Route>
//       </Switch>
//     </div >
//   );
// }

// export default App;
// --------------------------------------------- Working Backup ----------------------------------------
