import {useState, useContext,useEffect} from "react";
import { useRouter } from "next/navigation";
import {MyContext} from "../context/MyContext";
export default function NavBar(){
const {userRole, upDateRole}=useContext(MyContext);
  //const { booklist,logStatus,setLogStatus } = useContext(DataContext);
const [uname,setUname]=useState("");

const [pwd, setPwd]=useState("");
const[logStatus, setLogStatus]=useState(0);
useEffect(()=>{
  if(sessionStorage.getItem("logValue")!=null){
    setLogStatus(sessionStorage.getItem("logValue"));
  }
}, [logStatus, userRole]);

function check(){
  if(uname.trim()==="admin"  && pwd.trim() === "test")
{
  setLogStatus(2)
    sessionStorage.setItem("logValue",2);
    upDateRole(2);
  }
 
    

if(uname.trim()==="user1"  && pwd.trim() === "test")
  sessionStorage.setItem("logValue",1);
setLogStatus(1)
upDateRole(1);

}

function logout(){
 sessionStorage.setItem("cart",JSON.stringify([]));
 sessionStorage.setItem("logValue",0);

 setLogStatus(0)
 updateRole(0);
 //setlogin(0);

}

var login=<div>
  Please enter UserName
   <input className="border-2" type="text" id="uname" value={uname} onChange={(e)=>{setUname(e.target.value)}}/>
   <br></br>Please enter Password
   <input className="border-2" type="password" id="pwd" value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/>
  <br></br>
  <input className="border-2" type="button" value="Login" onClick={check}/>
</div>


var logoutUser=<div >
<a className="p-4" href="cart">Your Cart</a>
<input type="button p-4" value="Logout" onClick={logout}/>
</div>
  return(

    <div className="grid grid-cols-6 bg-blue-100 text-2xl px-10 py-20">
      <div><a href="/Home">Home</a></div>
       <div><a href="/books">Books</a></div>
       
       <div><a href="/contactus">Contact Us</a></div>
       <div> </div>
       <div> {//sessionStorage.getItem("admin")==1?<a href="/addBook">Add New Book</a>:""
       // 
       // 
       logStatus==2? <a href="/addBook">Add New Book</a>:""
        }</div>
       
       <div>{ //sessionStorage.getItem("logged")== 0 && sessionStorage.getItem("admin")==0?login:logoutUser
         logStatus==0?login:logoutUser
        
        }</div>

    </div>
  );


}