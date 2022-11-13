import { useState, useEffect } from "react";
import axios from 'axios';
import Login from "./Login";


const Table = ({auth}) => {

  let [users, setusers] = useState([]);
  let [msgfortable, setmsgfortable] = useState("");
  console.log(auth);
  /*
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const  getNewUsers = async () => {
      try {
        const response = await axios.get('https://restapinormal.vercel.app/users',{
          signal: controller.signal
        });
        console.log(response.data);
        isMounted && setusers(response.data);
      } catch (error) {
        console.log(error)
      }
    } 
    getNewUsers();
    return () => {
      isMounted = false;
      controller.abort();
    }
  }, []);*/
  const getUsers = async (e) => {
    e.preventDefault();
    if(auth) {

      try {
        const { data } = await axios.get('https://restapinormal.vercel.app/users', {
          withCredentials: true, headers: {
            'Authorization': 'SDMFPQOWE10234123KJDLSKF012',
          }
        });
        //console.log(data)
        setusers(data)
      } catch (error) {
        console.log(error);
      }
    }
    else {
      setmsgfortable("You need log in yout account");
    }
  };
  return (
    <div className="container-lg">
      <table className="table border rounded-3">
        <thead>
          <tr>
            <td>#</td>
            <td>User</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="container-sm">
        <button type="button" className="btn btn-success" onClick={getUsers}>Get List Users</button>
      </div>
      <div className="p-5">
        {
          console.log(document.cookie)
        }

      </div>
      <div>
        {
          msgfortable
        }
      </div>
    </div>
  );
};

export default Table;