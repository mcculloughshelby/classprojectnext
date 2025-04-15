"use server";
import {pool} from "./PoolConnection.js";

async function  GetCategories()
{
  var result;
  try {
    result = await pool.query("SELECT * from categories");
    console.log(result);
  }
  catch (error) {
    console.error("Query error:", error);
  }
  let list=[];
  result.tows.map((tmp,index)=>{
  var cat={"id":tmp.id,"category":tmp.category};
    list.push(book);
   })
   console.log(list);
return list;
};
export default GetCategories;