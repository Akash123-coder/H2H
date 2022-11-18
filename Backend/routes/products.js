/*
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./../verifyToken");


*/
const router = require("express").Router();
const pool=require("./../routes/db")
//CREATE

/*router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
router.post("/data",async(req,res)=>{
  try{
      const{title,descriptio,img,size,color,price}=req.body;
     // console.log(description);
      console.log(req.body);
      console.log(pool);
      const newProduct=await pool.query("insert into product (title,descriptio,img,size,color,price) values ($1,$2,$3,$4,$5,$6)",[title,descriptio,img,size,color,price]);
      console.log(newProduct);
      res.json(newProduct);
  }
  catch(err)
  {
    console.log(err);
      res.status(500).json(err);
  }
});
/*

title varchar(255) not null unique,
     descriptio varchar(255),
     img varchar(255) not null,
     size varchar(255),
     color varchar(255),
     price INT
*/
//UPDATE
/*
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
module.exports = router;
 