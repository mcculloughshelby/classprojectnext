import {useState, useContext,useEffect} from "react";
import GetCategories from "../Services/CategoryRoutes";
import {Navigate} from "react-router-dom";
//import { DataContext } from "../App";
import { MyContext } from "@/components/MyContext";

export default function Cart(){
    if(sessionStorage.getItem("cart")==null){
        sessionStorage.setItem("cart",JSON.stringify([]));
      }
      
     const {logStatus}=useContext(DataContext);
 const [shopCart,setCart]=useState(JSON.parse(sessionStorage.getItem("cart")));
 const [cartSize,setCartSize]=useState(shopCart.length);
 if(logStatus==0){
  return  <Navigate to="/books"/>
 }
else{
  return(
    <div id="cartContainer"  className="h-[40vh] px-50 overflow-y-scroll text-right bg-amber-200">
      <h2>You have {cartSize} Books in Your Cart</h2>
      <table>
      {shopCart.map((book, index) => (
            <tr key={index}>
              <td className="border-2">
                <input type="text" value={book.title} />
              </td>
              <td className="border-2">
                <input type="text" value={book.author} />
              </td>
              <td className="border-2">
                <input type="text" value={book.price} />
              </td>
              <td className="border-2">

               
             {/*
                <select value={book.category_id}>
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
                */}

              </td>
              </tr>
          ))}
      </table>
    </div>

  );

}



}