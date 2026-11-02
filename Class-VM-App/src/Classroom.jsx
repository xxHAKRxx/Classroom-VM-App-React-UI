import "./index.css"
import { Link, Outlet, useParams } from "react-router-dom"

export function Classroom() {
    const { className } = useParams();
    return (
        <div className="classrooms">
            <h1>My Classes</h1>
            <div className="class1">
                <h2>CIS 228 - Advanced Web App Programming</h2>
                <p>David Barnes - CRN 12115</p>
                <p>Score: */350 - *%</p>
                <Link to="/Classrooms/CIS228">View Class</Link>
            </div>
            <div className="class2">
                <h2>CIS 140 - Intro to Cybersecurity</h2>
                <p>Rostam Ahmad Daud - CRN 11605</p>
                <p>Score: */350 - *%</p>
                <Link to="/Classrooms/CIS140">View Class</Link>
            </div>
            <div className="class3">
                <h2>CIS 112 - Linux Operating Systems</h2>
                <p>Rostam Ahmad Daud - CRN 10205</p>
                <p>Score: */350 - *%</p>
                <Link to="/Classrooms/CIS112">View Class</Link>
            </div>
            <Outlet />
        </div>
    );
}

export function Exercise() {
    return (
        <div className="exercises">
            <h1>Exercises</h1>
            <div className="exercise1">
                <h2>Exercise 1: Manage file permissions</h2>
                <p>
                    Objective: Your company has recently suffered a data breach due to lax file permissions, allowing a rouge employee to hack into the company's network and
                    leak the data to the public. Your boss has ordered you to change the file permissions on all computers so that this kind of breach will never happen
                    again. Every single computer in your company uses Ubuntu. Follow the instructions on each section in the lab and answer the flags.
                </p>
                <p>Due: November 4th, 2026, 12:00 AM</p>
                <p>Score: */30</p>
            </div>
            <div className="exercise2">
                <h2>Exercise 2: Track suspicious network traffic with Wireshark</h2>
                <p>
                    Objective: Upper management has become concerned about a malicious hacker trying to get into their network. You decide to use Wireshark to monitor the
                    company network and check for any suspicious traffic. Follow the instructions on each section in the lab and answer the flags.
                </p>
                <p>Due: November 10th, 2026, 12:00 AM</p>
                <p>Score: */30</p>
            </div>
        </div>
    );
}