import React , {useState} from 'react';
import '../App.css';
import { useUserAuth } from '../context/UserAuthContext';
import { Link ,useNavigate } from 'react-router-dom';
import Black from './Black - 13495.mp4';
export default function SignIn() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState();
  const {logIn} = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    setError("");
    try{
      await logIn(email,password);
      navigate("/home");
    }catch(err){
      setError(err.message);
    }
  }
  return (
    <div>
        <video className='back-video' autoPlay loop muted>
    <source src={Black} type='video/mp4' />
</video>
      <div className="forms-container" onSubmit={handleSubmit}>
        <div className="signin-signup">
          <form action="/" className="sign-in-form">
            <h2 className="title">Log In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text"
               placeholder="Username" 
               onChange={(e)=>setEmail(e.target.value)}
               />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" 
              placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            {error && <div className='error'>
  {error}
  </div>}
            <p className="social-text">Don't have an Account? <Link to='/'>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}
