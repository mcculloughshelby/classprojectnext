"use client"

import GetResponse from "../Services/AIResponse";

import {useState} from "react";
export default function ChatBot(){
 const [question, setQuestion]=useState(" ");
    const [response,setResponse]=useState("");
   //**************************************************************
 function handleEnter(e){
        var x = e.code;
        if(x === "Enter") {
            callGoogleAI();
        }    
    }

//***********************************************
    async function callGoogleAI(){
       setResponse("")
       var q=question;
       var ans=await GetResponse(q);
        setResponse(ans);
       setQuestion(" ")
      
    
    }
    return( 
       
     <div className="w-[80vw] h-[70vh] grid-row-2    px-100 py-10">
       
<div> <textarea  defaultValue={response} readOnly className="  text-1xl border-2 overflow-y-scroll w-[60vw] h-[30vh]"/> </div>
      
      <div className=" grid-row-3 p-5 w-[45vw] h-[20vh]">
     
             <div>Please enter your questions</div>

 <div > <textarea defaultValue={question}                     onChange={(e)=>{setQuestion(e.target.value) }}  onKeyDown={handleEnter}   className="text-1xl border-2 overflow-y-scroll w-[40vw] h-[10vh]"/>

             <div >  <button className="border-2 bg-emerald-600 px-30 text-center"               value="Submit" onClick={callGoogleAI}>Submit</button>   </div>

       </div>
       
       </div>
       </div>

    )
}
