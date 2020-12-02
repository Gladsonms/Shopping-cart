var express = require('express');
const {render}=require('../app');
const productsHelpers = require('../helpers/products-helpers');
var router = express.Router();
var productHelper=require('../helpers/products-helpers')
/* GET users listing. */
router.get('/', function(req, res, next) {
 productsHelpers.getAllProducts().then((products)=>{
   console.log(products);
  res.render('admin/view-products',{admin:true,products})
 })
 
  
});
router.get('/add-product',function(req,res){
res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{

productsHelpers.addProduct(req.body,(id)=>{
  let image=req.files.Image
  console.log(id);
  image.mv('./public/product-images/'+id+'.jpg',(err)=>{
    if(!err){
      res.render("admin/add-product")
    }else{
      console.log(err);
    }
  })
  
})
})
module.exports = router;
