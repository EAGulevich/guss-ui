import {Link} from "react-router-dom";

const NotFoundPage = () => {

    return <div>Not found page

        <div>
            <Link to="/">Login</Link></div>
        <div> <Link to="/round/456">round 456</Link></div>
        <div> <Link to="/rounds">rounds</Link></div>
        <div> <Link to="/sdaf">not found</Link></div>
    </div>
}

export default NotFoundPage;
