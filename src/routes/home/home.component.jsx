import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Outlet /> {/* all of the child routes come here on the screen */}
      <Directory />
    </div>
  );
};

export default Home;
