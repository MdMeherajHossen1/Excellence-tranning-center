import Header from './components/Header/Header'
import './App.css';
import Courses from './components/Courses/Courses';
import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Services from './components/Services/Services';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound'


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
          <Header></Header>
          <Switch>
            <Route exact path="/" >
              <Courses></Courses>
              <Footer></Footer>
            </Route>
            <Route exact path="/home" >
              <Courses></Courses>
              <Footer></Footer>
            </Route>
            <Route exact path="/services" >
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route exact path="/cart/:id" >
              <Cart></Cart>
              <Footer></Footer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>


      </div>
    </CoursesContext.Provider>
  );
}

export default App;
