import { Link } from "react-router-dom";

import { LayoutForPages } from "./Layout.tsx";

const RoundListPage = () => {
  return (
    <LayoutForPages>
      RoundListPage
      <div>
        <Link to="/">Login</Link>
      </div>
      <div>
        {" "}
        <Link to="/round/456">round 456</Link>
      </div>
      <div>
        {" "}
        <Link to="/rounds">rounds</Link>
      </div>
      <div>
        {" "}
        <Link to="/sdaf">not found</Link>
      </div>
    </LayoutForPages>
  );
};

export default RoundListPage;
