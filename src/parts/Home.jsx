import Table from "./Table";
import Header from "./Header";
import { useState, useEffect } from "react";
const Home = () => {

  let [loged, setloged] = useState(false);
  useEffect(() => {
    localStorage.length > 0 ? (setloged(true)): (setloged(false));
  }, [localStorage])
  
  return (
    <div className="container-xxl">
      <h2>Home Page</h2>
      <Header/>
      <hr />
      <Table auth={loged} />
    </div>
  );
};

export default Home;