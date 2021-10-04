import Header from './components/Header/Header'
import './App.css';
import Courses from './components/Courses/Courses';
import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Services from './components/Services/Services';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About';


export const CoursesContext = createContext([])


function App() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('/courses.JSON')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <CoursesContext.Provider value={courses}>
      <div className="App">
        <Router>

          <Switch>
            <Route exact path="/" >
              <Header></Header>
              <Courses></Courses>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route exact path="/home" >
              <Header></Header>
              <Courses></Courses>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route exact path="/services" >
              <Header></Header>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route exact path="/cart/:id" >
              <Header></Header>
              <Details></Details>
              <Footer></Footer>
            </Route>
            <Route exact path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>


      </div>
    </CoursesContext.Provider>
  );
}

export default App;
