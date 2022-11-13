import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  let [logedin, setlogedin] = useState(false);
  useEffect(() => {
    setlogedin(true);
  }, [localStorage]);
  const logout = () => {
    localStorage.clear();
    setlogedin(false);
  }

  return (
    <header className="container-xxl">
      <nav className="navbar navbar-expand-lg bg-light">
        {
          logedin ? (
            <>
              <h3>Name of client: </h3>
              <button className="btn btn-primary" type="button" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <h3>Page Without Loged</h3>
              
              <button className="btn btn-success" type="button"> <a className="nav-link" href="/login">Login</a> </button>
            </>
          )
        }

      </nav>
    </header>
  );
}

export default Header;