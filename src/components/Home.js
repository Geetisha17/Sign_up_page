import React from 'react'
import { useUserAuth } from "../context/UserAuthContext";
import {Link} from  'react-router-dom'
export default function Home() {
  const { user } = useUserAuth();
  console.log(user);
  return (
    <div>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome 
      </div>
      <div className="d-grid gap-2">
        <button>
         <Link to='/signup'>LogOut</Link> 
        </button>
      </div>
    </div>
  )
}
