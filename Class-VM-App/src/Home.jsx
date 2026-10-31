import "./index.css"
import { Link, Outlet } from "react-router-dom"

function Home() {
    return (
        <div className="header">
            <h1>Welcome, User!</h1>
            <Link to="/Classrooms">View Classes</Link>
            <Outlet />
        </div>
    );
}

export default Home;