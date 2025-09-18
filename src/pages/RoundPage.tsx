import {Link, useParams} from "react-router-dom";

const RoundPage = () => {
    // TODO: типизация параметров
    const {id} = useParams()
    return <div>RoundPage with id = {id}



        <div>
            <Link to="/">Login</Link></div>
        <div> <Link to="/round/456">round 456</Link></div>
        <div> <Link to="/rounds">rounds</Link></div>
        <div> <Link to="/sdaf">not found</Link></div>
    </div>;
}

export default RoundPage;
