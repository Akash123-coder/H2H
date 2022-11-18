const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require('./routes/auth');
const userRoute = require("./routes/users");
const productRoute = require("./routes/products");
const { Router } = require('express');
const listRoute = require("./routes/lists");
const router = Router();
let  pool = require("./routes/db").pool;
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('db connection succesful');
}).catch((err)=>console.log(err));

app.use(express.json());

//app.use("/api/auth", authRoute);
//app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
//app.use("/api/orders", listRoute);
/*app.post("/product",async(req,res)=>{
  try{
      const{title,descr}=req.body;
     // console.log(description);
      console.log(req.body);
      console.log(pool);
      const newProduct=await pool.query("insert into Prode (title,descr) values ($1,$2) RETURNING *",[title,descr]);
      console.log(newProduct);
      res.json(newProduct);
  }
  catch(err)
  {
    console.log(err);
      res.status(500).json(err);
  }
});
*/
app.listen(8800, () => {
  console.log("backend server is running ");
});
