
import { useState } from "react";
import axios from 'axios';

const Register = () => {

  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [email, setemail] = useState("");
  let [msg, setmsg] = useState(false)
  let [veces, setveces] = useState(0);
  let [estado, setestado] = useState(0);
  

  const RegisterAccount = async (e) => {
    e.preventDefault();
    try {
      let {data, status} = await axios.post('https://restapinormal.vercel.app/register', {username: username, password: password, email: email});
      console.log(data);
      setveces(veces+=1);
      setestado(status);
      setmsg(false);
    } catch (error) {
      setmsg(true);
      setveces(0);
      console.log(error);
    }
  };

  return(
    <div className="container-lg">
      <form className="border" onSubmit={RegisterAccount}>
        <div className="justify-content-center">

        <div className="container py-5 m-0 m-auto w-75">
          <h3>Register your Account</h3>
          <label className="form-label" htmlFor="username">Username</label>
          <input className="form-control" type="text" id="username" onChange={e => setusername(e.target.value)}/>

          <label className="form-label" htmlFor="password">Password</label>
          <input className="form-control"  type="password" id="password" onChange={e => setpassword(e.target.value)}/>
          
          <label className="form-label" htmlFor="email" >Email</label>
          <input className="form-control" type="email" id="email" onChange={e => setemail(e.target.value)}/>
        </div>
        <div className="container justify-content-center py-4">
          {
            
            // like clicked and register success == true ? Mesage Succes :
            // clicked and  (! success) User Already Used : none Display  
            
            
            veces > 0 && estado === 200? <div className="m-0 m-auto bg-success bg-opacity-75 w-50 rounded-3 text-white p-2 text-center">Register Account Successfully</div>: <div> {msg ? <div className="m-0 m-auto bg-danger bg-opacity-75 w-75 rounded-3 text-white p-2 text-center"> Usuario ya en uso</div>: <div></div>}</div>
          }
        </div>
        <div className="container">
          <div className="justify-content-center align-items-center p-3">
            <div className="m-0 m-auto w-50">
              <button type="submit" className="w-100 btn btn-primary">Register Account</button>
            </div>
          </div>
        </div>
          </div>
      </form>
    </div>
  );
};

export default Register;