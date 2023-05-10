import './App.css';
 import SignUp from './components/SignUp';
 import Home from './components/Home';
 import Login from './components/LogIn';
 import {Routes , Route } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
//import SignIn from './components/SignIn';
function App() {
  return (
    <UserAuthContextProvider>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<SignUp/>} />
          <Route path="/signup" element={<Login/>} />
        </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
