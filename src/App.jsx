

import { useEffect, useState } from 'react';
import './App.css'
import Form from './Form'


function App() {
  
 const [num, setNum] = useState(0);
 const [Email, setEmail] = useState("")
 console.log(Email);
 const [password, setPassword] = useState("")
 console.log(password);
 
  
 useEffect(() => {
  // get data from api code
  console.log('called2')
},[]);//run once, if no dependency passed-> run on every change
  const countUp = ()=>{
   setNum(num+1);
    console.log(num);
  }

 var mystyle = {

  // use camel case
    color: "green",
    fontSize:"15px"
  }
  var buttonstyle = {
    color: "teal",
    borderStyle: "dotted dashed solid double"
    
  }
// anonymous function : function without name
   
  return (
    <>
   <form action="">
    <label htmlFor="">Email</label>
    <input onChange= {(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
    <br />
    <label htmlFor="">Password</label>
    <input type="password" onChange= {(e)=>setPassword(e.target.value)} placeholder='Password'/ >
    <br />
    <button type='submit'>submit</button>
   
    
   </form>

   {/* <Form/> */}
   {/* <Form/> */}
      <h1>Hello React</h1>
      <button style = {buttonstyle} onClick={countUp}>Count Up</button>
      <h4 style={mystyle}>{num}</h4>
{/*giving style in react => normal way 1  */}
      <h1 className='myname'>Sangam</h1>
{/* way2 */}
      <h1 style={{color: "red"}}>Title</h1>

      {/* way3 => passing the object of style */ }

      <h1 style = {mystyle}>Style</h1>



















    </>
  )
}
import { colors } from '@material-ui/core';

export default App
