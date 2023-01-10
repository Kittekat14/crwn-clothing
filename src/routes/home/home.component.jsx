import { Outlet } from "react-router-dom";

import CategoriesDirectory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Outlet /> {/* all of the child routes come here on the screen */}
      <CategoriesDirectory />
    </div>
  );
};

export default Home;
