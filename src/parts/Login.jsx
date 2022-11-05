import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  let [user, setuser] = useState("");
  let [pass, setpass] = useState("");
  let [datos, setdatos] = useState([]);
  let [msg, setmsg] = useState(false)
  let [estado, setestado] = useState(0)

  const Autenticate = async (e) => {
    e.preventDefault()
    try {
      const { data, status } = await axios.post('https://restapinormal.vercel.app/login', { username: user, password: pass });
      setdatos(data)
      setestado(status)
      setmsg(false)
      //console.log(data)
      //console.log(status)
    } catch (error) {
      setmsg(true)
      setdatos([])
      console.log(error)
    }
  };

  return (
    <div className="container-xxl">
      <div className="container-xxl p-0">
        <form className="" onSubmit={Autenticate}>
          <div className="container p-0">
            <div className="justify-content-center w-100 px-0">
              <div className="container w-75 py-5 px-0 m-0 m-auto">
                <h2>Log into Your Account</h2>
                <label className="form-label" htmlFor="user">Username</label>
                <input className="form-control" type="text" id="user" onChange={(e) => setuser(e.target.value)} />
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" onChange={(e) => setpass(e.target.value)} />
              </div>
            </div>
            <div className="justify-content-center">
              {
                datos.length === 0 || estado == 0 ? <div className="text-danger w-75 m-0 m-auto p-2">{msg ? <div className="text-white m-0 m-auto p-2 bg-danger bg-opacity-75 rounded-3 w-50 text-center">Invalid Username or Password</div> : <div></div>}</div> : <div className="w-50 m-0 m-auto p-2 bg-success bg-opacity-75 rounded-3 text-center">Bienvenido <b>{datos[0].username}</b> con Email: <b>{datos[0].email}</b></div>
              }
            </div>
            <div className="container  align-items-center justify-content-center">
              <div className="container w-75 m-0 m-auto p-3">
                <button type="submit" className="w-100 btn btn-success">Login into account</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;