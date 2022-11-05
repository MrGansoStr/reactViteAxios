import { useState } from "react";
import axios from 'axios';
import Login from "./Login";


const Table = () => {

  let [users, setusers] = useState([]);

  const getUsers = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get('https://restapinormal.vercel.app/users');
      //console.log(data)
      setusers(data)
    } catch (error) {
      console.log(error);
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
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <div className="container-sm">
      <button type="button" className="btn btn-success" onClick={ getUsers }>Get List Users</button>
    </div>
    <div className="p-5">
      <Login/>
    </div>
    </div>
  );
};

export default Table;