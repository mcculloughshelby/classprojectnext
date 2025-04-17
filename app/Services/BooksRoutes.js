"use server";
import {pool} from "./PoolConnection.js";

async function GetBooks()
{
  var result;
  try {
    result = await pool.query("SELECT * from books");
    console.log(result);
  }
  catch (error) {
    console.error("Query error:", error);
  }
  let list=[];
  result.rows.map((tmp,index)=>{
  var book={"id":tmp.id,"title":tmp.title,"author":tmp.author,"price":tmp.price,"category_id":tmp.category_id};
    list.push(book);
   })
   console.log(list);
return list;
};


async function DeleteBook(id,setBooks,setLength){
  var qry="delete from books where id="+id;
  const result = await pool.query(qry);
  setBooks([]);
  setLength(0);
}
async function UpdateBook(book){
  
    try {
      //var book=req.body;
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
    }
    catch (error) {
      console.error("Query error:", error);
    }
  }
 // bookRouter.get("/addbook", async (req, res) => {
  async function BookAdd(book){
    try {
        //var book=req.body;
        var title =book.title;
        var author = book.author;
        var price = book.price;
        var catid = book.category_id;
        

       var qry = "Insert into books (title,author,price,category_id) VALUES ("+"'"+title+"','"+author+"',"+price+","+catid+")";
       
      const result = await pool.query(qry);
      console.log(result);
     // res.json({ans:1});
     
    } catch (error) {
      console.error("Query error:", error);
      //res.json({ans:0});
     
    }
  };

// bookRouter.get("/getbook", async (req, res) => {
//   try {
//     var id1=req.query.id;
//     console.log(id1);
//     const result = await pool.query("select * from books where id="+id1);
//     console.log(result);
//     res.json({rows:result.rows});
   
//   } catch (error) {
//     console.error("Query error:", error);
//     res.json({rows:[]});
   
//   }
// });
// bookRouter.get("/delbook", async (req, res) => {
//   try {
//     var id1=req.query.id;
//     console.log(id1);
//     const result = await pool.query("delete from books where id="+id1);
//     console.log(result);
//     res.json({ans:1});
   
//   } catch (error) {
//     console.error("Query error:", error);
//     res.json({ans:0});
   
//   }
// });

// bookRouter.get("/addbook", async (req, res) => {
//     try {
//         var book=req.body;
//         var title =book.title;
//         var author = book.author;
//         var price = book.price;
//         var catid = book.category_id;
        

//        var qry = "Insert into books (title,author,price,category_id) VALUES (
//        '"+title+"','"+author+"',"+price+","+catid+"
//      ")";
//       const result = await pool.query(qry);
//       console.log(result);
//       res.json({ans:1});
     
//     } catch (error) {
//       console.error("Query error:", error);
//       res.json({ans:0});
     
//     }
//   });
//   BookRouter..post("/updateBook", async(req,res)=>{
//     try {
//       var book=req.body;
//       var title =book.title;
//         var author =book.id;
//         var price = book.price;
//         var catid = book.category_id;
//         var id=book.id;

//         var qry= "UPdate books set Author='"+author+"', title='"+title+"',price="+price
//         +",category_id="+category_id+" where id="+id;
  
     
     
//  console.log(qry);
//       const result = await pool.query(qry);

//       console.log(result);
//       res.json({ans:1});
      
//     } catch (error) {
//       console.error("Query error:", error);
//       res.json({ans:0});
      
//     }
//   })
   
// }



export {GetBooks,DeleteBook,UpdateBook,BookAdd};
