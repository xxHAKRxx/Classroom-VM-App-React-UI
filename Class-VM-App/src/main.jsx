import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import { Classroom, Exercise } from './Classroom.jsx'
import About from './About.jsx'
import './index.css'

function Main() {
  return (
    <BrowserRouter>
      <div className="Navigation">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/Classrooms">Classrooms</Link> |{" "}
          <Link to="/About">About Us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Classrooms" element={<Classroom />}>
            <Route path=":className" element={<Exercise />}>
              <Route path=":exerciseName" element={<Exercise />} />
            </Route>
          </Route>
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <Main />
)
