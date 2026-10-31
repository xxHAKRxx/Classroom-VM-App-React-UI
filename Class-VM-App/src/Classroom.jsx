import "./index.css"
import { Link, Outlet } from "react-router-dom"

export function Classroom() {
    return (
        <div className="classrooms">
            <h1>My Classes</h1>
            <div className="class1">
                <h2>CIS 228 - Advanced Web App Programming</h2>
                <p>David Barnes - CRN 12115</p>
                <p>Score: */350 - *%</p>
                <nav>
                    <Link to="/Classrooms/Exercises">View Exercises</Link>
                </nav>
            </div>
            <div className="class2">
                <h2>CIS 140 - Intro to Cybersecurity</h2>
                <p>Rostam Ahmad Daud - CRN 11605</p>
                <p>Score: */350 - *%</p>
                <nav>
                    <Link to="/Classrooms/Exercises">View Exercises</Link>
                </nav>
            </div>
            <div className="class3">
                <h2>CIS 112 - Linux Operating Systems</h2>
                <p>Rostam Ahmad Daud - CRN 10205</p>
                <p>Score: */350 - *%</p>
                <nav>
                    <Link to="/Classrooms/Exercises">View Exercises</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    );
}

export function Exercise() {
    return (
        <div className="exercises">
            <h1>Exercises</h1>
        </div>
    );
}