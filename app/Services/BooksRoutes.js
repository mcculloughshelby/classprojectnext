import express from "express";
const bookRouter = express.Router();    
import pool from "./PoolConnection.js";

bookRouter.get("/getbook", async (req, res) => {
  try {
    var id1=req.query.id;
    console.log(id1);
    const result = await pool.query("select * from books where id="+id1);
    console.log(result);
    res.json({rows:result.rows});
   
  } catch (error) {
    console.error("Query error:", error);
    res.json({rows:[]});
   
  }
});
bookRouter.get("/delbook", async (req, res) => {
  try {
    var id1=req.query.id;
    console.log(id1);
    const result = await pool.query("delete from books where id="+id1);
    console.log(result);
    res.json({ans:1});
   
  } catch (error) {
    console.error("Query error:", error);
    res.json({ans:0});
   
  }
});

bookRouter.get("/addbook", async (req, res) => {
    try {
        var book=req.body;
        var title =book.title;
        var author = book.author;
        var price = book.price;
        var catid = book.category_id;
        

       var qry = "Insert into books (title,author,price,category_id) VALUES (
       '"+title+"','"+author+"',"+price+","+catid+"
     ")";
      const result = await pool.query(qry);
      console.log(result);
      res.json({ans:1});
     
    } catch (error) {
      console.error("Query error:", error);
      res.json({ans:0});
     
    }
  });
  BookRouter..post("/updateBook", async(req,res)=>{
    try {
      var book=req.body;
      var title =book.title;
        var author =book.id;
        var price = book.price;
        var catid = book.category_id;
        var id=book.id;

        var qry= "UPdate books set Author='"+author+"', title='"+title+"',price="+price
        +",category_id="+category_id+" where id="+id;
  
     
     
 console.log(qry);
      const result = await pool.query(qry);

      console.log(result);
      res.json({ans:1});
      
    } catch (error) {
      console.error("Query error:", error);
      res.json({ans:0});
      
    }
  })
   
  


export default bookRouter;
