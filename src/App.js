import Login from "./Login.jsx"
import SignUp from "./Signup.jsx";
import { useSelector,useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {logoutUser} from "./registrationSlice"
import Userlist from "./Userlist.jsx";
function App() {
  const loginListener=useSelector((state)=>state.registration.current_user);
  const dispatch=useDispatch();
  return (
    <Router>
      <div>
        <div style={{display:"flex"}}>
          <h1> User Registration Application</h1>
          <ul>
            <li>
            <Link to="/Login">Login  </Link>
            </li>
            <li>
              <Link to="/Signup">Sign up</Link>
            </li>
            <li>
              <Link to="/UserList">User List</Link>
            </li>
          </ul>
          </div>
          {
                loginListener==="" ? <button disabled>Log Out</button>:
                <button onClick={()=>{
                    dispatch(logoutUser())  
                }}>Log Out</button>
          }
        <Routes>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<SignUp />}></Route>
          <Route exact path="/UserList" element={<Userlist />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
