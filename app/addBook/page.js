"use client";
import {useState, useContext, use} from "react";
//import {categories} from "../Model/categories.json";
import GetCategories from "../Services/CategoryRoutes";
//import { AddBook } from "../services/BooksRoutes";
import {BookAdd} from "../Services/BooksRoutes";
import { useRouter } from "next/navigation";
import { MyContext } from "../components/MyContext";

export default function AddBook(){


    const [logged, setLogged]=useState(0);
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [price,setPrice]=useState("");
    const [cat,setCat]=useState("");
    const [done, setDone]=useState(0);
    const [categories, setCatList]=useState([]);

    const {userRole, upDateRole}=useContext(MyContext);

    async function getCat(){
         var clist=await GetCategories();
         setCatList(clist);
    }
    async function loadData(){
        await getCat();
    }
    useEffect(()=>{
        loadData();

    },[userRole, done]);


    //************************************************************ */
    //********************************************************************** */
    async function addBook(){
      var book={"title":title,"author":author,"price":price,"category_id":cat};
       await BookAdd(book);
       setDone(1);

    }

    //******************************************************************************************* */
   var catSel=categories.map((cat,index)=>{return <option value={cat.id}>{cat.category}</option>})
   //following lines added
   if(userRole==0 || userRole==1){
    return (<h1>Please login as admin</h1>)
   }
   else if(done==1){
    useRouter().push("/books"); 
  }
   //*************************** */
   else
    return(
        <div className="px-60 py-10">
         <table className="border-2 text-center px-50 py-20">
           <tr>
               <td className="border-2 p-5"> Please enter book title</td>
               <td className="border-2 p-5"> <input type="text" className="border-2 p-5" defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}}/></td>
   
           </tr>
           <tr>
               <td className="border-2 p-5"> Please enter book author</td>
               <td className="border-2 p-5"> <input type="text" className="border-2 p-5" defaultValue={author} onChange={(e)=>{setAuthor(e.target.value)}}/></td>
   
           </tr>
           <tr>
               <td className="border-2 p-5"> Please enter book price</td>
               <td className="border-2 p-5"> <input type="text" className="border-2 p-5" defaultValue={price} onChange={(e)=>{setPrice(e.target.value)}}/></td>
   
           </tr>
           <tr>
               <td className="border-2 p-5"> Please choose  book category</td>
               <td className="border-2 p-5"> <select vlaue={cat} onChange={(e)=>{setCat(e.target.value)}}>{catSel}</select>
               </td>
   
           </tr>
         </table>
         <input type="button" onClick={addBook} value="Add this Book"/>
         </div>
   
         );


}