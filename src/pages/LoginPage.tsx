import {Link} from "react-router-dom";

const LoginPage = () => {
    return <div>LoginPage

        <div>
        <Link to="/">Login</Link></div>
       <div> <Link to="/round/456">round 456</Link></div>
       <div> <Link to="/rounds">rounds</Link></div>
       <div> <Link to="/sdaf">not found</Link></div>
    </div>;
}

export default LoginPage;
