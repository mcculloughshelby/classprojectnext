"use client"
import { useState, useContext,useEffect } from "react";
import GetCategories from "../services/CategoryRoutes";
import GetBooks from "../services/BookRoutes";
//import { DataContext } from "../App";
//import { categories } from "../Model/categories.json";
//import { GetBooks,deleteBook, BookUpdate } from "../services/BookService";
export default function Books() {
  const [categories, setCategories] = useState([]);
  const[logStatus,setLogStatus]=useState(0);
  
  const [books, setBooks] = useState([]);
  const [length, setLength] = useState(-1);

  //************************************************* */

  async function getlist(){
     var clist=await GetCategories();
     setCategories(clist);
     var list=await GetBooks();
     setBooks(list);
     setLength(list.length);
  }
  //**********************************************************

  useEffect(()=>{
    if(sessionStorage.getItem("cart")==null){
        sessionStorage.setItem("cart",JSON.stringify([]));
      }
    if(sessionStorage.getItem("logValue")!=null){
        setLogStatus(sessionStorage.getItem("logValue"));
    }
    getlist();
  },      [logStatus]      );
  //***************************************************************** */
  
  async function delBook(e){
    var ind=e.target.value;

    await deleteBook(books[ind].id, setBooks,setLength);
    alert(" We will delete book#"+ind+" from the database");
  }
    //***************************************************************** */
   async function updateBook(e){
      var ind=e.target.value;
      var mybook=books[ind];
      await BookUpdate(mybook);
      alert(" We will alter book#"+ind+" in the database");
    }
  //************************************************************************ */

  function currUpdate(e,element,id){
  
    var book=books.find(bk => bk.id === id);
  
     var val=e.target.value;
  
     if(element==1){book.title=val}
    else if(element==2){book.author=val} 
    else if(element==3){book.price=val} 
    else {book.category_id=val} 
     
     
     
   }
  //************************************************************************ */
  function addToCart(e){
    var id= parseInt(e.target.id);
   var temp=JSON.parse(sessionStorage.getItem("cart"));
   temp.push(books[id]);
   sessionStorage.setItem("cart",JSON.stringify(temp));
    alert(" Add to Cart Called for Book #"+id+"\n cart length is "+temp.length);
  }

  //********************************************************************* */
  return (
    <div>
      <h1 className="text-3xl">Future Home of Books</h1>
      <h2 className="text-2xl">You have {length} books</h2>
      <div
        id="tableContainer"
        className="h-[40vh] px-50 overflow-y-scroll text-right bg-amber-200"
      >
        <table>
          {books.map((book, index) => (
            <tr key={index}>
              <td className="border-2">
                <input type="text" defaultValue={book.title} onChange={(e)=>{currUpdate(e,1,book.id)}}/>
              </td>
              <td className="border-2">
                <input type="text" defaultValue={book.author} onChange={(e)=>{currUpdate(e,2,book.id)}} />
              </td>
              <td className="border-2">
                <input type="text" defaultValue={book.price} onChange={(e)=>{currUpdate(e,3,book.id)}} />
              </td>
              <td className="border-2">
                <select value={book.category_id}  onChange={(e)=>{currUpdate(e,4,book.id)}}>
                  {categories.map((cat, index2) => {
                    if (book.category_id == cat.id) {
                      return (
                        <option value={cat.id} selected>
                          {cat.category}
                        </option>
                      );
                    } else {
                      return <option value={cat.id}>{cat.category}</option>;
                    }
                  })}
                </select>
              </td>
              
              {
              //sessionStorage.getItem("admin")==1? <td className="border-2 p-2">  <button value={index} onClick={delBook}>Delete</button></td>:""}
                logStatus==2? <td className="border-2 p-2">  <button value={index} onClick={delBook}>Delete</button></td>:""}

              {
              //sessionStorage.getItem("admin")==1? <td className="border-2 p-2"> <button value={index} onClick={updateBook}>Update</button> 
              logStatus==2? <td className="border-2 p-2"> <button value={index} onClick={updateBook}>Update</button> 
 
                </td>:""}
              {
              //(sessionStorage.getItem("logged")==1 && sessionStorage.getItem("admin")==0) ?
              logStatus==1?
              <td className="border-2 p-2"><input type="button" value="Add to Cart" id={index} onClick={addToCart}/> </td>:""}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
