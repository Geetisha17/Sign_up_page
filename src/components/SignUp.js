import React ,{ useState } from 'react'
import Black from './Black - 13495.mp4';
import '../App.css';
import { useUserAuth } from '../context/UserAuthContext';
import { Link , useNavigate} from 'react-router-dom'
export default function LoginIn() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState();
  const [user,setUser] =useState();
  const {signUp} = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    setError("");
    try{
      await signUp(user,email,password);
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
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email"
               placeholder="Email" 
               onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input type='text' placeholder="ph" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" 
              placeholder="Username" 
              onChange={(e)=>setUser(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" 
              placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="SignUp" className="btn solid" />
{error && <div className='error'>
  {error}
  </div>}
            <p className="social-text">Already have an account? <Link to='/signup'>Sign In</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}
